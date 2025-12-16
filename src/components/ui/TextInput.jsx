import iconSearch from "../../assets/images/icon-search.svg";
const TextInput = ({ name, value, placeholder, onInputChange }) => {
  return (
    <div className="relative w-full md:w-100">
      <img
        src={iconSearch}
        alt="search icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none"
      />

      <input
        type="search"
        placeholder={placeholder}
        className="bg-neutral-800 w-full md:w-100 placeholder:font-medium placeholder:text-neutral-300 pr-3 pl-12 py-2 rounded-lg text-neutral-200 font-medium"
        aria-label="Search"
        name={name}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

export default TextInput;
