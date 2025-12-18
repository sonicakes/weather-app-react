import logo from "../../assets/images/logo.svg";
import Button from "../common/ui/Button";

const TopNav = ({ switchUnits, unitSetting }) => {
  return (
    <nav className="flex justify-between items-center py-2">
      <div>
        <img src={logo} alt="weather app logo" />
      </div>
      <Button 
        label={unitSetting === "metric" ? "Switch to Imperial" : "Switch to Metric" }
        type="desc" 
        onClickHandle={switchUnits}
      />
    </nav>
  );
};

export default TopNav;
