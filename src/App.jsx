import TextInput from "./components/ui/TextInput";
import Button from "./components/ui/Button";
import MainHeading from "./components/typography/MainHeading";
import SearchPanel from "./components/SearchPanel";
import { useState, useEffect } from "react";
import logo from './assets/images/logo.svg';

const API_URL = import.meta.env.VITE_GEOCODE_API;

const App = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (location === "") {
      setLoading(false);
      return;
    }
    setLoading(true);
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
        } catch (err) {
          setError(err.message);
          setSearchResults([]);
        } finally {
          setLoading(false);
        }
      };

      fetchSearchResults();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [location]);

  const handleSearchUpdate = (e) => {
    setLocation(e.target.value);
  };
  return (
    <div className="mx-auto max-w-screen-lg px-6 lg:px-8">
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
            {!loading && !error && location != "" && (
              <SearchPanel searchResults={searchResults} />
            )}
          </div>
        </div>
        {loading && <p>Loading...</p>}
        {error && <div className="error">error: {error}</div>}
      </main>
    </div>
  );
};

export default App;
