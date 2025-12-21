import { WMO_WEATHER_MAP } from "../../../constants/weatherCodes";
import { formatTime } from "../../../utilities/dateFormat";

const DailyCard = ({ day, tempMin, tempMax, weather, empty = false }) => {
  return (
    <div className="flex flex-col py-2 px-3 md:px-1.5 lg:px-2 bg-neutral-700 rounded-lg border border-neutral-600 gap-2 min-h-[100px]">
      {!empty && (
        <>
          <div className="text-base md:text-sm lg:text-body flex justify-center">
            {formatTime(day, "weekShortened")}
          </div>
          <div className="text-2xl md:text-lg lg:text-xl flex justify-center">
            {WMO_WEATHER_MAP[weather].icon}
          </div>
          <div className="flex justify-between">
            <div className="text-sm md:text-xs lg:text-sm text-neutral-200">{tempMax}</div>
            <div className="text-sm md:text-xs lg:text-sm text-neutral-300">{tempMin}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default DailyCard;
