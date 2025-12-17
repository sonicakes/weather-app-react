import DailyCard from "./DailyCard";

const DailyDisplay = ({ dailyVals, dailyUnits }) => {
  return (
    <div className="py-3 rounded-lg">
      <h5 className="text-neutral-200 pb-3  font-semibold">Daily forecast</h5>
      <div className="grid grid-cols-7 gap-3">
        {dailyVals.time.map((day, index) => (
          <DailyCard
            key={index}
            day={day}
            tempMax={dailyVals.temperature_2m_max[index]}
            tempMin={dailyVals.temperature_2m_min[index]}
            weather={dailyVals.weather_code[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyDisplay;

