const LocationSummary = ({ loc, info }) => {
  return (
    <>
      <div className=" bg-blue-700 p-4 rounded-lg min-h-[200px]">
        <div>
          <h2 className="text-2xl">
            {loc.name}, {loc.country}
          </h2>
          <p>Timezone: {loc.timezone}</p>
          <p>
            Current temp: {info.current.temperature_2m}
            {info.current_units.temperature_2m}
          </p>
          <p>
            Apparent temp:
            {info.current.apparent_temperature}
            {info.current_units.apparent_temperature}
          </p>
          <p>Weather code: {info.current.weather_code}</p>
          <p>
            Relative humidity:
            {info.current.relative_humidity_2m}
            {info.current_units.relative_humidity_2m}
          </p>
          <p>Is it daytime there? {info.current.is_day === 1 ? "yes" : "no"}</p>
        </div>
      </div>
    </>
  );
};

export default LocationSummary;
