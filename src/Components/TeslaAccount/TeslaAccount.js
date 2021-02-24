import { Link } from "react-router-dom";

const TeslaAccount = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <div>Email Adress</div>
      <input />
      <div>Password</div>
      <input />
      <button>SIGN IN</button>
      <div>Forgot email? | Forgot password?</div>
      <div>OR</div>
      <button>CREATE ACCOUNT</button>
      <footer>
        <Link>Tesla 2021</Link>
        <Link>Privacy & Legal</Link>
        <Link>Contact</Link>
      </footer>
    </div>
  );
};

export default TeslaAccount;
