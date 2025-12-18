import logo from "../assets/images/logo.svg";

const TopNav = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <img src={logo} alt="weather app logo" />
      </div>
      <div>unit selector</div>
    </nav>
  );
};

export default TopNav;
