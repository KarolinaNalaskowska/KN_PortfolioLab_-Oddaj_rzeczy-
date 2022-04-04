import Nav from "../home/header/navigation/Nav";
import Deco from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";

export default function Logout() {
    return (
        <section className="logout">
            <div className="logout__container">
                <div className="navigation__login">
                    <Nav />
                </div>
                <div className="logout__content">
                    <div className="logout__title">
                        <h2 className="logout__title-h2">Wylogowanie nastąpiło<br/>pomyślnie!</h2>
                        <img src={Deco} alt="Decoration" className="logout__deco"/>
                    </div>
                    <Link to="/" className="logout__button">Strona główna</Link>
                </div>
            </div>
        </section>
    )
}