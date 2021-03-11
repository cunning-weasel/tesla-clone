import React, { useState, useEffect, useRef, useReducer } from "react";
import { Route } from "react-router-dom";
// pull in axios
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Body from "./Components/Body/Body";
import ModelS from "./Components/ModelS/ModelS";
import Model3 from "./Components/Model3/Model3";
import ModelX from "./Components/ModelX/ModelX";
import ModelY from "./Components/ModelY/ModelY";
import Charging from "./Components/Charging/Charging";
import RegionPopup from "./Components/RegionPopup/RegionPopup";
import TeslaAccount from "./Components/TeslaAccount/TeslaAccount";
import "./App.css";
export const MessengerPegion = React.createContext(null); // use for storing user region in state

function App() {

  // menu logic
  

  // regionPopup logic
  const popUpRef = useRef();

  const reducer = (state, action) => {
    return { 
      ...state, 
      showPopup: !state.showPopup 
    };
  };

  // refactoring popupop useState for useReducer
  const initialState = {
    showPopup: true,
  };

  // read local storage with useEffect, then updates state with what I find in localStorage
  // store region selected in local storage. on next load, can hide the popup

  const [state, dispatch] = useReducer(reducer, initialState);

  // click to close outside popup
  useEffect(() => {
    if (state.showPopup) {
      document.addEventListener("click", handleOutsideClick);
    }
  }, [state.showPopup]);

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".regionOverlay")) {
      dispatch();
      document.removeEventListener("click", handleOutsideClick);
    }
  };

  // API call for photos
  const [setPhotos, setPhotosResponse] = useState(null);

  useEffect(async () => {
    // refactor for axios to pull data in
    const response = await fetch(
      "https://api.unsplash.com/search/photos/?client_id=n_3d4law7R4NmUNNpOlljbmleTNXMSxykAH1j2lzM_s&query=tesla&orientation=landscape&per_page=20"
    );
    let data = await response.json();
    setPhotosResponse(data);
    console.log(data);
  }, []);

  // still need to store user region in state - useContext
  // still need to do TeslaAccount logic

  return (
    <div className="App">
      <MessengerPegion.Provider
        value={{ showPopup: state.showPopup, dispatch }}
      >
        <RegionPopup />
      </MessengerPegion.Provider>

      {/* Nav */}
      <Header />
      <Menu />
      <Route path="/models">
        <ModelS />
      </Route>
      <Route path="/model3">
        <Model3 />
      </Route>
      <Route path="/modelx">
        <ModelX />
      </Route>
      <Route path="/modely">
        <ModelY />
      </Route>
      <Route path="/charging">
        <Charging />
      </Route>

      <Route path="/oauth...">
        <TeslaAccount />
      </Route>

      {/* Homepage Body */}
      <Route exact path="/">
        <Body 
          setPhotos={setPhotos} 
          setPhotosResponse={setPhotosResponse} 
        />
      </Route>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
