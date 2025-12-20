import { formatTime } from "../../../utilities/dateFormat";
import { hoursVals } from "../../../constants/hoursVals";
import iconDropdown from "../../../assets/images/icon-dropdown.svg";
import { useState } from "react";

const CustomSelect = ({ hoursNum, days }) => {
  const currentWeekday = days.time[hoursVals.indexOf(hoursNum)];
  const [selectOpen, setSelectOpen] = useState(false);
  return (
    <>
      <div className="relative text-sm font-medium">
        <div
          onClick={() => setSelectOpen(!selectOpen)}
          className="flex gap-2 py-2 px-3 cursor-pointer bg-neutral-600 hover:bg-neutral-hover rounded-lg"
        >
          {formatTime(currentWeekday, "weekOnly")}
          <img src={iconDropdown} className={selectOpen ? "rotate-180" : "*:"}/>
        </div>
        {selectOpen && (
          <div className="flex gap-1.5 flex-col rounded-lg py-3 absolute top-10 right-0 bg-neutral-800 border border-neutral-600">
            {days.time.map((day, index) => (
              <div 
              key={index}
              data-hrs={index === 0 ? 8 : index * 24 + 8}
              className="hover:bg-neutral-700 py-1 px-3 cursor-pointer">
                {formatTime(day, "weekOnly")}
              </div>
              // todo: wire on click func that will get hrs required value to pass to state
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CustomSelect;
