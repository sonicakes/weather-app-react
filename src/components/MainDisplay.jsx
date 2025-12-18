import MainHeading from "../components/typography/MainHeading";
import TextInput from "../components/ui/TextInput";
import Button from "../components/ui/Button";
import SearchPanel from "../components/SearchPanel";
import MainDisplayWindow from "../components/MainDisplayWindow";
import InfoSquaresRow from "../components/InfoSquaresRow";
import HourlyDisplay from "../components/HourlyDisplay";
import DailyDisplay from "../components/DailyDisplay";
import HomeGallery from "../components/HomeGallery";

const MainDisplay = ({
    location, 
    handleSearchUpdate, 
    searchResults, 
    locationsLoading, 
    handleLocationSelection, 
    showEmptyMsg,
    selectedLocation,
    selectedLocInfo,
    error,
    selectedLocLoading,
    setLocation

}) => {
  return (
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
      {!selectedLocation && !locationsLoading && (
        <HomeGallery setLocation={setLocation} />
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
  );
};

export default MainDisplay;
