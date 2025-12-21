import logo from "../../assets/images/logo.svg";
import Button from "../common/ui/Button";
import units from "../../assets/images/icon-units.svg";

const TopNav = ({ switchUnits, unitSetting }) => {
  return (
    <nav className="flex justify-between items-center py-2">
      <div>
        <img src={logo} alt="weather app logo" className="w-[150px]" />
      </div>
      <Button
        label={
          unitSetting === "metric" ? "Switch to Imperial" : "Switch to Metric"
        }
        type="desc"
        icon={units}
        iconStyles="invert"
        onClickHandle={switchUnits}
      />
    </nav>
  );
};

export default TopNav;
