import { WMO_WEATHER_MAP } from "../../../constants/weatherCodes";
import { format } from "date-fns";

const HourlyPill = ({ hour, temp, weather, empty = false }) => {
  return (
    <>
      {!empty && (
        <>
          <div className="flex p-3 items-center justify-between bg-neutral-700 rounded-lg border border-neutral-600 w-full h-10">
            <div className="lg:text-xl">{WMO_WEATHER_MAP[weather].icon}</div>
            <div className="mr-auto ml-2 text-sm lg:text-body">
              {format(hour, "h a")}
            </div>
            <div className="text-xs lg:text-sm text-neutral-200">{temp}</div>
          </div>
        </>
      )}
      {empty && (
        <div className="p-3 bg-neutral-700 rounded-lg border border-neutral-600 w-full h-10"></div>
      )}
    </>
  );
};

export default HourlyPill;
