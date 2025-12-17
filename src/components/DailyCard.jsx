import { WMO_WEATHER_MAP } from "../constants/weatherCodes";
import { format } from "date-fns";

const DailyCard = ({ day, tempMin, tempMax, weather }) => {
  return (
    <div className="flex flex-col py-2 px-1.5 lg:px-2 bg-neutral-700 rounded-lg border border-neutral-600 gap-2">
      <div className="text-sm lg:text-body flex justify-center">
        {format(day, "EEE")}
      </div>
      <div className="lg:text-xl flex justify-center">
        {WMO_WEATHER_MAP[weather].icon}
        </div>
      <div className="flex justify-between">
        <div className="text-xs lg:text-sm text-neutral-200">{tempMax}</div>
        <div className="text-xs lg:text-sm text-neutral-300">{tempMin}</div>
      </div>
    </div>
  );
};

export default DailyCard;
