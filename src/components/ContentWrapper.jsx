const API_URL = import.meta.env.VITE_GEOCODE_API;
const METEO_URL = import.meta.env.VITE_METEO_API;
import MainDisplay from "../components/MainDisplay";
import TopNav from "../components/TopNav";
import { useState, useEffect } from "react";

const ContentWrapper = () => {
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
    <>
      <TopNav />
      <MainDisplay 
        location={location}
        handleSearchUpdate={handleSearchUpdate}
        searchResults={searchResults}
        locationsLoading={locationsLoading}
        handleLocationSelection={handleLocationSelection}
        showEmptyMsg={showEmptyMsg}
        selectedLocation={selectedLocation}
        setLocation={setLocation}
        selectedLocInfo={selectedLocInfo}
        error={error}
        selectedLocLoading={selectedLocLoading}
      />
    </>
  );
};

export default ContentWrapper;
