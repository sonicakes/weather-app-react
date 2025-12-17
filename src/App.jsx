import TextInput from "./components/ui/TextInput";
import Button from "./components/ui/Button";
import MainHeading from "./components/typography/MainHeading";
import SearchPanel from "./components/SearchPanel";
import { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import MainDisplayWindow from "./components/MainDisplayWindow";
import InfoSquaresRow from "./components/InfoSquaresRow";
import HourlyDisplay from "./components/HourlyDisplay";
const API_URL = import.meta.env.VITE_GEOCODE_API;
const METEO_URL = import.meta.env.VITE_METEO_API;
import { slidesData } from "./constants/staticGallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import DailyDisplay from "./components/DailyDisplay";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const App = () => {
  
  const [location, setLocation] = useState("");
  const [locationsLoading, setLocationsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [showEmptyMsg, setShowEmptyMsg] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocLoading, setSelectedLocLoading] = useState(false);
  const [selectedLocInfo, setSelectedLocInfo] = useState(null);

  useEffect(() => {
    if (location === "") {
      setLocationsLoading(false);
      return;
    }
    setLocationsLoading(true);
    const delayDebounceFn = setTimeout(() => {
      const fetchSearchResults = async () => {
        const encodedLocation = encodeURIComponent(location);

        try {
          const res = await fetch(
            `${API_URL}?name=${encodedLocation}&count=8&language=en&format=json`
          );
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

          const data = await res.json();
          console.log(data.results);

          const resultsArray = Array.isArray(data.results) ? data.results : [];

          setSearchResults(resultsArray);
          setError(null);
          setShowEmptyMsg(true);
        } catch (err) {
          setError(err.message);
          setSearchResults([]);
          setShowEmptyMsg(false);
        } finally {
          setLocationsLoading(false);
          setShowEmptyMsg(true);
        }
      };

      fetchSearchResults();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [location]);

  //selected location precised search
  useEffect(() => {
    if (
      !selectedLocation ||
      typeof selectedLocation !== "object" ||
      !selectedLocation.latitude
    ) {
      setSelectedLocLoading(false);
      return;
    }
    setSelectedLocLoading(true);
    const delayDebounceFn = setTimeout(() => {
      const fetchLocationDetails = async () => {
        try {
          const res = await fetch(
            `${METEO_URL}?latitude=${selectedLocation.latitude}&longitude=${selectedLocation.longitude}&hourly=temperature_2m,weather_code&forecast_hours=8&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,apparent_temperature,relative_humidity_2m,is_day,weather_code,precipitation,rain,cloud_cover,wind_speed_10m,showers&timezone=${selectedLocation.timezone}`
          );
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

          const data = await res.json();
          console.log("meteo data SUCCESS", data);

          setSelectedLocInfo(data);
        } catch (err) {
          console.error("meteo data ERROR", err);
        } finally {
          setSelectedLocLoading(false);
        }
      };
      //todo - include fetch api to https://en.wikipedia.org/api/rest_v1/page/summary/paris

      fetchLocationDetails();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [selectedLocation]);

  const handleSearchUpdate = (e) => {
    setLocation(e.target.value);
  };

  const handleLocationSelection = (el) => {
    setSelectedLocation(el);
    setError(null);
    setSearchResults([]);
    setShowEmptyMsg(false);
    setLocation("");
  };

  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-8">
      <nav className="flex justify-between">
        <div>
          <img src={logo} alt="weather app logo" />
        </div>
        <div>unit selector</div>
      </nav>
      <main>
        <div className="flex md:justify-center flex-col items-center gap-3">
          <MainHeading title="How's the sky looking today?" />
             
          <p className="md:w-100 text-center leading-6 text-neutral-200 py-4">
            Search for a specific destination or select one of the major cities
            from the gallery below.
          </p> 
          <div className="relative w-full flex-wrap justify-center flex gap-3 items-center">
            <TextInput
              name="location"
              value={location}
              placeholder="Search for a place..."
              onInputChange={handleSearchUpdate}
            />
            <Button />
            {!error && location != "" && (
              <SearchPanel
                searchResults={searchResults}
                locationsLoading={locationsLoading}
                onClickSelection={handleLocationSelection}
              />
            )}
          </div>
          {!locationsLoading && showEmptyMsg && searchResults.length === 0 && (
            <div className="flex justify-center items-center mt-3">
              <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                No search result found!
              </h3>
            </div>
          )}
        </div>
        {error && <div className="error">error: {error}</div>}
        {/* landing gallery of major global cities to choose from */}
        {!selectedLocation && !locationsLoading && (
          <div
            style={{ width: "100%", maxWidth: "800px", margin: "20px auto" }}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="mySwiper"
              style={{ height: "450px" }}
            >
              {slidesData.map((slide) => (
                <SwiperSlide key={slide.id} style={{ position: "relative" }}>
                  {/* 1. Background Image */}
                  <img
                    src={slide.img}
                    alt={slide.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className="rounded-lg"
                  />

                  {/* 2. Content Overlay */}
                  <div
                    className="overlay"
                    style={{
                      position: "absolute",
                      bottom: "40px",
                      left: "40px",
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      padding: "20px",
                      borderRadius: "8px",
                      maxWidth: "300px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>{slide.flag}</span>
                      <h2 className="font-bric text-3xl">{slide.title}</h2>
                    </div>
                    <p className="text-sm">{slide.description}</p>
                    {slide.soundtrack && (
                      <p className="text-sm">Soundtrack: {slide.soundtrack}</p>
                    )}
                    {slide.movie && (
                      <p className="text-sm">Movie: {slide.movie}</p>
                    )}

                    <Button 
                      label="Check local weather" 
                      type="desc" 
                      onClickHandle={() => setLocation(slide.title)}/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {/* main display window */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* left col */}
          <div className="md:col-span-2">
            <MainDisplayWindow
              selectedLocInfo={selectedLocInfo}
              selectedLocLoading={selectedLocLoading}
              selectedLocation={selectedLocation}
            />

            <div className="rounded-lg">
              <InfoSquaresRow
                selectedLocInfo={selectedLocInfo}
                selectedLocLoading={selectedLocLoading}
                selectedLocation={selectedLocation}
              />
              {selectedLocInfo && !selectedLocLoading && (
                   <DailyDisplay
                    dailyVals={selectedLocInfo.daily}
                    dailyUnits={selectedLocInfo.dailyUnits}
              />
              )}
            </div>
          </div>

          {/* right col */}
          <div className="md:col-span-1">
            {selectedLocInfo && !selectedLocLoading && (
              <HourlyDisplay
                hourly={selectedLocInfo.hourly}
                curTime={selectedLocInfo.current.time}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
