import TextInput from "./components/ui/TextInput";
import Button from "./components/ui/Button";
import MainHeading from "./components/typography/MainHeading";
import SearchPanel from "./components/SearchPanel";
import { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import LocationSummary from "./components/LocationSummary";

const API_URL = import.meta.env.VITE_GEOCODE_API;
const METEO_URL = import.meta.env.VITE_METEO_API;

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
    if (selectedLocation === "") {
      setSelectedLocLoading(false);
      return;
    }
    setSelectedLocLoading(true);
    const delayDebounceFn = setTimeout(() => {
      const fetchLocationDetails = async () => {
        try {
          const res = await fetch(
            `${METEO_URL}?latitude=${selectedLocation.latitude}&longitude=${selectedLocation.longitude}&current=temperature_2m`
          );
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

          const data = await res.json();
          console.log("meteo data", data);

          setSelectedLocInfo(data);
          // setSearchResults(resultsArray);
          // setError(null);
          // setShowEmptyMsg(true);
        } catch (err) {
          // setError(err.message);
          // setSearchResults([]);
          // setShowEmptyMsg(false);
        } finally {
          setSelectedLocLoading(false);
          // setShowEmptyMsg(true);
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
    console.log("handle loc", el);
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
        <div className="flex justify-center flex-col items-center gap-3">
          <MainHeading title="How's the sky looking today?" />
          <div className="relative search-panel flex gap-3 items-center mt-6">
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
      </main>
      <div>
        {/* {selectedLocation && (
          <LocationSummary loc={selectedLocation} />
        ) } */}
        
          selected location info: <br></br>
          {selectedLocInfo && (
              <LocationSummary loc={selectedLocation} info={selectedLocInfo} />
          )}
        
      </div>
    </div>
  );
};

export default App;
