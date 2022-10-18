import XIcon from "../../Assets/XIcon";
import OIcon from "../../Assets/OIcon";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <XIcon />
      {/* &nbsp; */}
      <OIcon />
    </div>
  );
};

export default Logo;
