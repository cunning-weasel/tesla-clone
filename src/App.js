import './App.css';
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
// importing react router dom
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Body />
      <Route />
      {/* <Footer /> */}
      <Footer />
    </div>
  );
}

export default App;
