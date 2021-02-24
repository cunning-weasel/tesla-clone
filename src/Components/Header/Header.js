import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Header.css";

const Header = () => {

  return (
    <div className="header">
      <Link to="/">LOGO</Link>

      <div className="mainHeaderLinks">
        <Link to="/models">MODEL S</Link>
        <Link to="/model3">MODEL 3</Link>
        <Link to="/modelx">MODEL X</Link>
        <Link to="/modely">MODEL Y</Link>
        <Link to="/charging">CHARGING</Link>
      </div>

      <Link to="/oauth...">TESLA ACCOUNT</Link>
      {/* here comes the button to toggle menu open on/ off */}
      <button>Menu</button>
      <Menu />
    </div>
  );
};

export default Header;

