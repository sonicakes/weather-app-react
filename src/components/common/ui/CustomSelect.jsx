import { formatTime } from "../../../utilities/dateFormat";
import { hoursVals } from "../../../constants/hoursVals";

const CustomSelect = ({ hoursNum, days }) => {
  const currentWeekday = days.time[hoursVals.indexOf(hoursNum)];

  return (
    <>
      <div className="bg-neutral-600 relative text-sm font-medium rounded-lg">
        <div className="flex gap-1 p-2">
          {formatTime(currentWeekday, "weekOnly")}
          {/* arrow icon here */}
          <div> {hoursNum} </div>
        </div>
        <div className="flex gap-2 flex-col rounded-lg p-3 absolute bottom-10 right-0 bg-neutral-800 border border-neutral-600">
          {days.time.map((day, index) => (
            <div key={index}>
              {formatTime(day, "weekOnly")}
              <span>-{index === 0 ? 8 : index * 24 + 8}</span>
            </div>
            // todo: wire on click func that will get hrs required value to pass to state
            // todo: click on arrow to expand on click
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomSelect;
