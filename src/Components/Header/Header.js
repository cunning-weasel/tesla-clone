import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import "./Header.css";

const Header = () => {

  // // sticky header
  // let prevPos = window.pageYOffset;
  // window.onscroll = function () {
  //   let currentPos = window.pageYOffset;
  //   // console.log(prevPos + " previous Pos");
  //   if (prevPos > currentPos) {
  //     document.getElementsByClassName("header").style.top = "0";
  //   } else {
  //     document.getElementsByClassName("header").style.top = "-50px";
  //   }
  //   prevPos = currentPos;
  // };
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const yOffset = window.scrollY;
    if (yOffset) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  let headerClass = ["header"];
  if (scrolled) {
    headerClass.push("scrolled");
  }

  return (
    <div className={headerClass.join(" ")}>
      <Link to="/">Weasela</Link>

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
