import { Link, Route } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">TESLA LOGO</Link>

      <Link to="model s">MODEL S</Link>
      <Link to="/model 3">MODEL 3</Link>
      <Link to="model x">MODEL X</Link>
      <Link to="model y">MODEL Y</Link>
      <Link to="charging">CHARGING</Link>

      <Link>TESLA ACCOUNT</Link>
      {/* here comes the button to toggle menu open on/ off */}
      <button>Menu</button>
      <Menu />
    </div>
  );
};

export default Header;
