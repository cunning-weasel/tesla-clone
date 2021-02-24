import { Link } from "react-router-dom";
import "./RegionPopup.css";

const RegionPopup = (props) => {  
  return ((props.prompt) && (
    <div className="regionOverlay">
      <div className="regionPopup">
        <button onClick={() => props.setPrompt(false)}>
          X
          </button>
        <h1>Select your region</h1>
        <h4>Europes</h4>
        <Link>...</Link>
        <h4>Africa</h4>
        <Link>...</Link>
      </div>
    </div>
  ));
};

export default RegionPopup;

// => create onClick listeners to store region in the state
