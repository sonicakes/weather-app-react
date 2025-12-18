const Button = ({ label = "Search", type = "general", onClickHandle }) => {
  return (
    <button
      className={`w-full md:w-auto transition-all rounded-lg px-3 font-semibold cursor-pointer
    ${
      type === "desc"
        ? "bg-orange-500 hover:bg-orange-400 text-sm py-1 text-neutral-900"
        : "bg-blue-600 hover:bg-blue-700 py-2 text-neutral-200"
    }
    `}
      onClick={onClickHandle}
    >
      {label}
    </button>
  );
};

export default Button;
