import { Link } from "react-router-dom";

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
                    <li className="navigation__menu-element"><a href="/">O co chodzi?</a></li>
                    <li className="navigation__menu-element"><a href="/">O nas</a></li>
                    <li className="navigation__menu-element"><a href="/">Fundacja i organizacje</a></li>
                    <li className="navigation__menu-element"><a href="/">Kontakt</a></li>
                </ul>
            </div>
        </nav>
    )
}