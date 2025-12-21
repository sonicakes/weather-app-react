import { WMO_WEATHER_MAP } from "../../../constants/weatherCodes";
import { format } from "date-fns";

const HourlyPill = ({ hour, temp, weather, empty = false }) => {
  return (
    <>
      {!empty && (
        <>
          <div className="flex p-2.5 items-center justify-between bg-neutral-700 rounded-lg border border-neutral-600 w-full">
            <div className="lg:text-xl">{WMO_WEATHER_MAP[weather].icon}</div>
            <div className="mr-auto ml-2 text-sm lg:text-body">
              {format(hour, "h a")}
            </div>
            <div className="text-xs lg:text-sm text-neutral-200">{temp}</div>
          </div>
        </>
      )}
      {empty && (
        <div className="bg-neutral-700 rounded-lg border border-neutral-600 w-full min-h-[50px]"></div>
      )}
    </>
  );
};

export default HourlyPill;
