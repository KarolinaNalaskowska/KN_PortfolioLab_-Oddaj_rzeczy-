import { Link, Element } from "react-scroll";

export default function Nav() {
    return (
        <nav className="navigation">
            <div className="navigation__login">
                <ul className="navigation__login-buttons">
                    <li className="navigation__login-element"><Link to="/login">Zaloguj</Link></li>
                    <li className="navigation__login-element"><Link to="/register">Załóż konto</Link></li>
                </ul>
            </div>
            <div className="navigation__menu">
                <ul className="navigation__menu-main">
                    <li className="navigation__menu-element"><Link to="/">Start</Link></li>
                    <li className="navigation__menu-element"><Link to="fourColumns" smooth={true} offset={50} duration={500}>O co chodzi?</Link></li>
                    <li className="navigation__menu-element"><Link to="about" smooth={true} offset={50} duration={500}>O nas</Link></li>
                    <li className="navigation__menu-element"><Link to="helpEl" smooth={true} offset={50} duration={500}>Fundacja i organizacje</Link></li>
                    <li className="navigation__menu-element"><Link to="contactUs" smooth={true} offset={50} duration={500}>Kontakt</Link></li>
                </ul>
            </div>
        </nav>
    )
}