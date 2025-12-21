const InfoSquare = ({ title, value }) => {
  return (
    <div className="bg-neutral-800 py-3 px-4 rounded-lg border border-neutral-600">
      <h5 className="text-neutral-300 pb-2 text-sm font-medium">{title}</h5>
      <div className="text-2xl md:text-lg lg:text-[26px]">{value}</div>
    </div>
  );
};

export default InfoSquare;
