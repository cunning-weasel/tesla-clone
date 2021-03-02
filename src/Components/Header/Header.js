import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Header.css";

const Header = () => {
  // sticky header
  // let prevPos = window.pageYOffset;
  // window.onscroll = function () {
  //   let currentPos = window.pageYOffset;
  //   // console.log(prevPos + " previous Pos");
  //   if (prevPos > currentPos) {
  //     document.getElementById("navbar").style.top = "0";
  //   } else {
  //     document.getElementById("navbar").style.top = "-50px";
  //   }
  //   prevPos = currentPos;
  // };

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
