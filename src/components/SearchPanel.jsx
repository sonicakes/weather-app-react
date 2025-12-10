import LocationPill from "./LocationPill";

const SearchPanel = ({ searchResults }) => {
  return (
    <div className="bg-neutral-800 w-full absolute top-[54px] p-3 rounded-lg">
      {searchResults.length > 0 ? (
        searchResults.map((res) => <LocationPill key={res.id} res={res} />)
      ) : (
        <p>Nothing matching your search</p>
      )}
    </div>
  );
};

export default SearchPanel;
