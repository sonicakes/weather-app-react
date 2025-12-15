import { WMO_WEATHER_MAP } from "../constants/weatherCodes";
import { format } from "date-fns";
import bgToday from "../assets/images/bg-today-large.svg";

const LocationSummary = ({ loc, info }) => {
  const formatTime = (cur, type) => {
    const date = new Date(cur);
    return type === "week"
      ? format(date, "EEEE, MMM d, yyyy")
      : format(date, "h:mm a");
  };
  //TODO- display the flag icon as well, similar to the search res pills
  return (
    <>
      <div className="bg-blue-700 relative p-6 rounded-lg w-full h-[250px] flex items-center">
        {/* country code & timezone info */}
        <div className="absolute top-1 right-5 pt-1 text-xs flex gap-1 text-neutral-200 z-80">
          <span>Timezone: {loc.timezone}</span>
          <span>&#8226;</span>
          <span>{loc.country_code}</span>
        </div>
        <div className="relative z-50 flex justify-between w-full">
          {/* main summary 2 cols banner*/}
          <div className="flex justify-between w-full items-center gap-2">
            <div>
              <h2 className="text-3xl font-semibold pb-1">
                {loc.name}, {loc.country}
              </h2>
              <div className="flex text-sm gap-1 text-neutral-200 items-center">
                <p className="">{loc.admin1 && loc.admin1}</p>
                {loc.admin2 && (
                  <>
                    <span>&#8226;</span>
                    <p>{loc.admin2 && loc.admin2}</p>
                  </>
                )}
              </div>
              <p className="text-body pt-2 text-gray-200 font-semibold">
                {formatTime(info.current.time, "week")}
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center gap-3">
                <p className="flex flex-col items-center">
                  <span className="text-6xl">
                    {WMO_WEATHER_MAP[info.current.weather_code].icon}
                  </span>
                  <span className="text-xs pt-1.5 text-neutral-300">
                    {WMO_WEATHER_MAP[info.current.weather_code].description}
                  </span>
                </p>
                <div className="flex flex-col">
                  <h4 className="relative text-6xl font-semibold italic">
                    <span>{info.current.temperature_2m}</span>
                    <span>&#176;</span>
                    <span className="bottom-0 right-0 non-italic absolute text-xl">
                      {info.current_units.temperature_2m === "°C" ? "C" : ""}
                    </span>
                  </h4>
                  <p className="flex gap-1 text-neutral-300 pt-1 items-center justify-center text-xs">
                    <span>taken at</span>
                    <span>{formatTime(info.current.time, "hour")}</span>
                  </p>
                </div>
              </div>
              {/* <p>{WMO_WEATHER_MAP[info.current.weather_code].style}</p> */}
            </div>
          </div>

          {/* <p>
            Apparent temp:
            {info.current.apparent_temperature}
            {info.current_units.apparent_temperature}
          </p> */}

          {/* <p>
            Relative humidity:
            {info.current.relative_humidity_2m}
            {info.current_units.relative_humidity_2m}
          </p>
          <p>Is it daytime there? {info.current.is_day === 1 ? "yes" : "no"}</p> */}
        </div>
        <img
          src={bgToday}
          className="h-full absolute overflow-hidden top-0 opacity-80 z-10 left-0 w-full object-cover rounded-lg"
        />
      </div>
    </>
  );
};

export default LocationSummary;
