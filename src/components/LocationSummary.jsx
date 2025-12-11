const LocationSummary = ({ loc, info }) => {
  return (
    <div className="rounded-lg bg-blue-700 mt-10">
      <div>
        <h2>
          {loc.name}, {loc.country}
        </h2>
        <p>{loc.timezone}</p>
        <h4>Info temperature current:</h4>
        {info.current.temperature_2m}
        {info.current_units.temperature_2m}
      </div>
    </div>
  );
};

export default LocationSummary;
