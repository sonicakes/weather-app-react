const CircleFlag = ({ countryCode, alt, className = "w-7" }) => {
  if (!countryCode) return null;

  return (
    <img
      className={className}
      src={`https://hatscripts.github.io/circle-flags/flags/${countryCode.toLowerCase()}.svg`}
      alt={alt || `${countryCode} flag`}
    />
  );
};

export default CircleFlag;
