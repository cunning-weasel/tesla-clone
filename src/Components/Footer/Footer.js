import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <Link to="about">Weasel un-© 2021</Link>
            <Link to="about/ legal ">Privacy & Legal</Link>
            <Link to="contact">Contact</Link>
            <Link to="careers">Careers</Link>
            <Link to="updates">Get Newsletter</Link>
            <Link to="blog">News</Link>
            <Link to="list">Locations</Link>
        </div>
    )
}

export default Footer;
