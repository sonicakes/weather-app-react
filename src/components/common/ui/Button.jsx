const Button = ({ label = "Search", type = "general", icon = null, iconStyles = null, onClickHandle }) => {
  return (
    <button
      className={`w-full md:w-auto flex gap-1 items-center transition-all rounded-lg px-3 font-semibold cursor-pointer
    ${
      type === "desc"
        ? "bg-orange-500 hover:bg-orange-400 text-sm py-1 text-neutral-900"
        : "bg-blue-600 hover:bg-blue-700 py-2 text-neutral-200"
    }
    `}
      onClick={onClickHandle}
    >
      {icon && ( 
        <img src={icon} className={iconStyles && iconStyles}/>
      )}
     {label}
    </button>
  );
};

export default Button;
