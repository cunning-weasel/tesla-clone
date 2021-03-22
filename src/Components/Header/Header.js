import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import "./Header.css";
import React, { Component } from "react";

// class Header extends Component {
//   constructor() {
//     super();
//     this.state = {
//       scrolled: false
//     }

//   }

//   componentDidMount() {

//   };

//   render() {

//     return (
//     <div className={headerClass.join(" ")}>
//       <Link to="/">Weasela</Link>

//       <div className="mainHeaderLinks">
//         <Link to="/models">MODEL S</Link>
//         <Link to="/model3">MODEL 3</Link>
//         <Link to="/modelx">MODEL X</Link>
//         <Link to="/modely">MODEL Y</Link>
//         <Link to="/charging">CHARGING</Link>
//       </div>

//       <Link to="/oauth...">TESLA ACCOUNT</Link>
//       {/* here comes the button to toggle menu open on/ off */}
//       <button>Menu</button>
//       <Menu />
//     </div>
//     )
//   }
// }

// export default Header;

const Header = () => {
  //   // sticky header
  //   const [scrolled, setScrolled] = useState(false);

  //   const handleScroll = () => {
  //     const yOffset = window.scrollY;
  //     if (yOffset) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //   }, []);

  //   let headerClass = ["header"];
  //   if (scrolled) {
  //     headerClass.push("scrolled");
  //   }

  // can refactor this out since we have css :)
  // logic for header

  const [color, setColor] = useState("header");

  const scrollFunc = (e) => {
    if (window.scrollY < 73) {
      setColor("header");
    } else if (window.scrollY > 70) {
      setColor("header2");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => window.removeEventListener("scroll", scrollFunc);
  }, []);

  console.log(color);

  return (
    <div
      className={color}
      
    >
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
      <button className="menuBtn">Menu</button>
      <Menu />
    </div>
  );
};

export default Header;
