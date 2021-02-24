import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import ModelS from "./Components/ModelS/ModelS";
import Model3 from "./Components/Model3/Model3";
import ModelX from "./Components/ModelX/ModelX";
import ModelY from "./Components/ModelY/ModelY";
import Charging from "./Components/Charging/Charging";
import RegionPopup from "./Components/RegionPopup/RegionPopup";
import TeslaAccount from "./Components/TeslaAccount/TeslaAccount";
import { Route } from "react-router-dom";

function App() {
  // regionPopup logic
  const [showPopup, setShowPopup] = useState(true);

  
  // TeslaAccount logic
  // const [login, setLogin] = useState(false);

  return (
    <div className="App">
      {/* RegionPopup */}
      <RegionPopup
        prompt={showPopup}
        setPrompt={setShowPopup}
      />

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

      {/* Body and sub-pages */}
      <Body />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
