import Deco from "../../assets/Decoration.svg";
import Nav from "../home/header/navigation/Nav";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <section className="login">
            <div className="login__container">
                <div className="navigation__login">
                    <Nav />
                </div>
                <div className="login__content">
                    <div className="login__title">
                        <h2 className="login__title-h2">Zaloguj się</h2>
                        <img src={Deco} alt="Decoration" />
                    </div>
                    <div className="formLogin">
                        <form className="formLogin__form">
                            <div className="formLogin__container">
                                <div className="formLogin__inputs">
                                    <p className="formLogin__p">Email</p>
                                    <input className="formLogin__input" />
                                </div>
                                <div className="formLogin__inputs">
                                    <p className="formLogin__p">Hasło</p>
                                    <input className="formLogin__input" type="password" />
                                </div>
                            </div>
                            <div className="formLogin__buttons">
                                <Link to="/register" className="login__btn">Załóż konto</Link>
                                <Link to="/" className="login__btn">Zaloguj się</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
