import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { LoginContext } from "../../App";
import "./TeslaAccount.css";

const TeslaAccount = () => {

  const { Login, throwErr } = useContext(LoginContext);
  const [info, setInfo] = useState({
    email: "",
    password: ""
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yelllow");
    Login(info);
    
  }

  return (
    <form className="teslaaccount" onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <div>Email Address</div>
      <input type="email" />
      <div>Password</div>
      <input type="password" />
      <button type="button">SIGN IN</button>
      <a>Forgot email?</a> 
      <span>|</span>
      <a>Forgot password?</a>
      <div>OR</div>
      <button type="button">CREATE ACCOUNT</button>
      <footer>
        <Link>Tesla 2021</Link>
        <Link>Privacy & Legal</Link>
        <Link>Contact</Link>
      </footer>
    </form>
  );
};

export default TeslaAccount;
