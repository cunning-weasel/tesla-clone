// import "./RegionPopup.css";

const RegionPopup = (props) => {

  // const closePopup = () => {
  //   setShowPopup(false);
  // }

  
  return ((props.trigger) ? (
    <div className="regionOverlay">
      <div className="regionPopup">
        <button onClick={() => props.setTrigger(false)}>
          X
          </button>
        <h1>Select your region</h1>
        {/* {props.trigger} */}
        <div>...</div>
        <div>...</div>
        <div>...</div>
      </div>
    </div>
  ) : "" ) ;
};

export default RegionPopup;
