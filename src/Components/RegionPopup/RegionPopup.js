import { Link } from "react-router-dom";
import "./RegionPopup.css";

const RegionPopup = (props) => {

    // event for click outside of popup so it can close
    // const hidePopupClick = (e) => {
    //   if (!e.target.className === region) {
    //     props.setPrompt(false);
    //   }        
    // }
    
    // => create onClick listeners to store region in the state
    // const storeRegion = (e) => {
    
    // }
    
  return ((props.prompt) && (
    <div className="regionOverlay">
      <div className="regionPopup">
        <button onClick={() => props.setPrompt(false)}>
          X
          </button>
        <h1>Select your region</h1>
        <h4>Europe</h4>
        {/* {props.storeRegion} if user chose region, add link URL to end of URL*/}
        <Link to="european-country" onClick={() => props.setPrompt(false)}>European-country</Link>
        <h4>Africa</h4>
        <Link to="african-country" onClick={() => props.setPrompt(false)}>African-country</Link>
        <h4>South-America</h4>
        <Link to="South-American-country" onClick={() => props.setPrompt(false)}>South-American-country</Link>
      </div>
    </div>
  ));
};

export default RegionPopup;
