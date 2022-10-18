import XIcon from "../../Assets/XIcon";
import OIcon from "../../Assets/OIcon";
import "./MarkSelector.scss";

const MarkSelector = () => {
  return (
    <div className="mark-selector">
      <h3 className="mark-selector__heading">Pick Player 1's Mark</h3>
      <div className="mark-selector__toggle">
        {/* FIXME: CHANGE TO BUTTONS AND USE SVG IN ASSETS FOLDER */}
        <div className="mark-selector__option">
          <XIcon />
        </div>
        <div className="mark-selector__option selected">
          <OIcon />
        </div>
      </div>
      <p className="mark-selector__text">Remember : X goes first</p>
    </div>
  );
};

export default MarkSelector;
