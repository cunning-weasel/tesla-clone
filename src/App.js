import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
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
import "./App.css";
// export const MessengerPegion = React.createContext(null);   // use for storing user region in state

function App() {
  // regionPopup logic
  const [showPopup, setShowPopup] = useState(true);
  
  // API call for photos
  const [setPhotos, setPhotosResponse] = useState([]);

  useEffect(async() => {
    const response = await fetch("https://api.unsplash.com/search/photos/?client_id=n_3d4law7R4NmUNNpOlljbmleTNXMSxykAH1j2lzM_s&query=tesla");
    let data = await response.json();
    setPhotosResponse(data);
    // console.log(data);
  }, []);
  
  // still need to store user region in state - useContext
  // still need to do TeslaAccount logic 

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

      <Body
        setPhotos={setPhotos}
        setPhotosResponse={setPhotosResponse}
      />
        
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
