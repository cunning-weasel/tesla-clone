import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <NavLink to="/about">Weasel un-© 2021</NavLink>
            <NavLink to="/about/legal">Privacy & Legal</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/updates">Get Newsletter</NavLink>
            <NavLink to="/blog">News</NavLink>
            <NavLink to="/list">Locations</NavLink>
        </div>
    )
}

export default Footer;
