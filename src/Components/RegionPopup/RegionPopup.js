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
        <h4>Europe</h4>
        <Link>European-country</Link>
        <h4>Africa</h4>
        <Link>African-country</Link>
        <h4>South-America</h4>
        <Link>South-American-country</Link>
      </div>
    </div>
  ));
};

export default RegionPopup;

// => create onClick listeners to store region in the state
