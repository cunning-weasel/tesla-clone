import { Link } from "react-router-dom";
import { useContext } from "react";
import { MessengerPegion } from "../../App"
import "./RegionPopup.css";

const RegionPopup = () => {

  const { showPopup, dispatch } = useContext(MessengerPegion);
  
    // => create localStorage so that on refresh pop-up doesn't trigger - store in state???
    // const storeRegion = (e) => {
    
    // }
    
  return ((showPopup) && (
    <div className="regionOverlay">
      <div className="regionPopup">
        <button onClick={() => dispatch()}>
          X
          </button>
        <h1>Select your region</h1>
        <h4>Europe</h4>
        <Link to="european-country" onClick={() => dispatch()}>
          European-country
          </Link>
        <h4>Africa</h4>
        <Link to="african-country" onClick={() => dispatch()}>
          African-country
          </Link>
        <h4>South-America</h4>
        <Link to="South-American-country" onClick={() => dispatch()}>
          South-American-country
          </Link>
      </div>
    </div>
  ));
};

export default RegionPopup;
