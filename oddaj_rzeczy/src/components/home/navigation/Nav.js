import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navigation">
            <div className="navigation__login">
                <ul className="navigation__login-buttons">
                    <li className="navigation__login-element">
                        <RouterLink to="/login">Zaloguj</RouterLink>
                    </li>
                    <li className="navigation__login-element">
                        <RouterLink to="/register">Załóż konto</RouterLink>
                    </li>
                </ul>
            </div>
            <div className="navigation__menu">
                <ul className="navigation__menu-main">
                    <li className="navigation__menu-element">
                        <RouterLink to="/">Start</RouterLink>
                    </li>
                    <li className="navigation__menu-element">
                        <Link
                            to="fourColumns"
                            smooth={true}
                            offset={50}
                            duration={500}>
                            <RouterLink to="/">O co chodzi?</RouterLink>
                        </Link>
                    </li>
                    <li className="navigation__menu-element">
                        <Link
                            to="about"
                            smooth={true}
                            offset={50}
                            duration={500}>
                            <RouterLink to="/">O nas</RouterLink>
                        </Link>
                    </li>
                    <li className="navigation__menu-element">
                        <Link
                            to="helpEl"
                            smooth={true}
                            offset={50}
                            duration={500}>
                            <RouterLink to="/">Fundacja i organizacje</RouterLink>
                        </Link>
                    </li>
                    <li className="navigation__menu-element">
                        <Link
                            to="contactUs"
                            smooth={true}
                            offset={50}
                            duration={500}>
                            <RouterLink to="/">Kontakt</RouterLink>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}