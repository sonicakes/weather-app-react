import CustomSelect from "../../common/ui/CustomSelect";
import HourlyPill from "./HourlyPill";

const HourlyDisplay = ({ hourly, providedHours, dailyVals }) => {
  const slicedDates = hourly.time.slice(providedHours - 8, providedHours);
  const slicedTemps = hourly.temperature_2m.slice(providedHours - 8, providedHours);
  const slicedWeather = hourly.weather_code.slice(providedHours - 8, providedHours);
  return (
    <div className="bg-neutral-800 py-3 px-4 rounded-lg border border-neutral-600">
      <div className="flex items-center justify-between pb-4 ">
        <h5 className="text-neutral-200 font-semibold text-base">Hourly forecast</h5>
        <CustomSelect 
          hoursNum={providedHours}
          days={dailyVals}
        />
      </div>
      <div className="flex flex-col gap-2">
        {slicedDates.map((hr, index) => (
          <HourlyPill 
            key={index} 
            hour={hr} 
            temp={slicedTemps[index]}
            weather={slicedWeather[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default HourlyDisplay;
