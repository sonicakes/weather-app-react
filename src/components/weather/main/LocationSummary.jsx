import { WMO_WEATHER_MAP } from "../../../constants/weatherCodes";
import { format } from "date-fns";
import bgToday from "../../../assets/images/bg-today-large.svg";

const LocationSummary = ({ loc, info }) => {
  const formatTime = (cur, type) => {
    const date = new Date(cur);
    return type === "week"
      ? format(date, "EEEE, MMM d, yyyy")
      : format(date, "h:mm a");
  };
  return (
    <>
      <div className="bg-blue-700 relative p-4 lg:p-6 rounded-lg w-full h-[250px] flex items-center">
        {/* country code & timezone info */}
        <div className="absolute top-2 right-5 pt-1 text-xs flex gap-1 text-neutral-200 z-80">
          <span>Timezone: {loc.timezone}</span>
          <span>&#8226;</span>
          <span>{loc.country_code}</span>
        </div>
        <p className="absolute bottom-3 z-80 right-5 text-neutral-200 flex gap-1 pt-1 items-center text-xs">
          <span>taken at</span>
          <span>{formatTime(info.current.time, "hour")}</span>
          <span>&#8226;</span>
          <span>{info.timezone_abbreviation}</span>
        </p>
        <div className="relative z-50 flex justify-between w-full">
          {/* main summary 2 cols banner*/}
          <div className="flex flex-wrap lg:flex-nowrap justify-center md:justify-around w-full items-center gap-2">
            <div className="w-full md:w-auto flex justify-center items-center md:items-start lg:items-center flex-col lg:block">
              <h2 className="text-2xl lg:text-3xl font-semibold lg:pb-1">
                {loc.name}, {loc.country}
              </h2>
              <div className="flex gap-1 text-neutral-200 items-center">
                <p className="text-xs lg:text-sm">{loc.admin1 && loc.admin1}</p>
                {loc.admin2 && (
                  <>
                    <span>&#8226;</span>
                    <p className="text-xs lg:text-sm">{loc.admin2 && loc.admin2}</p>
                  </>
                )}
              </div>
              <p className="text-sm lg:text-body pt-2 text-gray-200 font-semibold">
                {formatTime(info.current.time, "week")}
              </p>
            </div>
            <div className="w-full md:w-auto flex justify-center items-center flex-col lg:block">
              <div className="flex md:justify-between items-center gap-2">
                <p className="flex flex-col items-center">
                  <span className="text-5xl lg:text-6xl">
                    {WMO_WEATHER_MAP[info.current.weather_code].icon}
                  </span>
                  <span className="text-xs pt-0.5 text-neutral-300">
                    {WMO_WEATHER_MAP[info.current.weather_code].description}
                  </span>
                </p>
                <div className="flex flex-col">
                  <h4 className=" text-5xl lg:text-6xl font-semibold italic self-end">
                    <span>{info.current.temperature_2m}</span>
                    <span>&#176;</span>
                    <span className="text-xl">
                      {info.current_units.temperature_2m === "°C" ? "C" : ""}
                    </span>
                  </h4>
                </div>
              </div>
              {/* <p>{WMO_WEATHER_MAP[info.current.weather_code].style}</p> */}
            </div>
          </div>

          {/*
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

//todos
//1. display as well in main screen:
// Map: Use the Google Maps Embed API to show an interactive map of the selected city. (Easiest and requires no key).

// 2. Summary: Use the Wikipedia REST API to grab a short introductory summary. (Requires no key, just simple URL fetching).
// fetch api to https://en.wikipedia.org/api/rest_v1/page/summary/paris

// 3. Local Time: You are already doing this, but prominently displaying the current local time in the city is extremely useful for a weather app.
//current ticking clock?

//4. when selection is set, collapse the gallery - set its state to closed
//5. to practice react router, clicking on the item 'details' btn will go to the detail page with wiki summary

//6. TODO- display the flag icon as well, similar to the search res pills
