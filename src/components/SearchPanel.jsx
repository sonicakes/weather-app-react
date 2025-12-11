import LocationPill from "./LocationPill";

const SearchPanel = ({ searchResults, locationsLoading, onClickSelection }) => {
  const searchTxt = { name: "Search in progress" };

  return (
    <>
      {locationsLoading && (
        <div className="bg-neutral-800 w-full absolute top-[54px] p-3 rounded-lg">
          <LocationPill res={searchTxt} isLoading={true} />
        </div>
      )}

      {!locationsLoading && searchResults.length > 0 && (
        <div className="bg-neutral-800 w-full absolute top-[54px] p-3 rounded-lg">
          {searchResults.map((res) => (
            <LocationPill key={res.id} res={res} onClickSelection={onClickSelection} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchPanel;
