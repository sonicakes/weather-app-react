import EmptyPill from "./EmptyPill";

const HourlyDisplay = ({}) => {
  return (
    <div className="bg-neutral-800 py-3 px-4 rounded-lg border border-neutral-600">
      <div className="flex items-center justify-between pb-4 ">
        <h5 className="text-neutral-200 font-medium">Hourly forecast</h5>
        <select name="hours" className="bg-neutral-600 rounded-lg w-[50px]">
          <option>-</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <EmptyPill key={index} />
          ))}
      </div>
    </div>
  );
};

export default HourlyDisplay;
