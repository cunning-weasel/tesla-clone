import React, { useState } from "react";
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
import { Route } from "react-router-dom";

function App() {
  // popup state
  const [regionPopupVisible, setRegionPopupVisible] = useState(false);

  // call this func below
  const closeRegionPopup = () => {
    setRegionPopupVisible(false);
  }
  
  // login state
  // const [user, setUser] = useState(null);


  return (
    <div className="App">


      
      <button onClick={() => setRegionPopupVisible()}></button>
      {regionPopupVisible && <RegionPopup />}
      

      {/* Nav - can just do in header file? */}
      <Header />
      <Menu />
      <Route path="/models" component={ModelS}>
        <ModelS />
      </Route>
      <Route path="/model3" component={Model3}>
        <Model3 />
      </Route>
      <Route path="/modelx" component={ModelX}>
        <ModelX />
      </Route>
      <Route path="/modely" component={ModelY}>
        <ModelY />
      </Route>
      <Route path="/charging" component={Charging}>
        <Charging />
      </Route>

      {/* Body and sub-pages */}
      <Body />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
