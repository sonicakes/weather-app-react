import HourlyPill from "./HourlyPill";

const HourlyDisplay = ({ hourly, curTime }) => {

return (
    <div className="bg-neutral-800 py-3 px-4 rounded-lg border border-neutral-600">
      <div className="flex items-center justify-between pb-4 ">
        <h5 className="text-neutral-200 font-semibold">Hourly forecast</h5>
        <select name="hours" className="bg-neutral-600 rounded-lg w-[50px]">
          <option>-</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        {hourly.time.map((hr, index) => (
          <HourlyPill 
            key={index} 
            hour={hr} 
            temp={hourly.temperature_2m[index]}
            weather={hourly.weather_code[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default HourlyDisplay;
