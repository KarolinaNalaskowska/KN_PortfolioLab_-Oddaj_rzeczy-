import Nav from "../home/navigation/Nav";
import Deco from "../../assets/Decoration.svg";
import { Link as RouterLink } from "react-router-dom";

export default function Register() {
    return (
        <section className="logReg">
            <div className="logReg__container">
                <div className="navigation__login">
                    <Nav />
                </div>
                <div className="logReg__content">
                    <div className="logReg__title">
                        <h2 className="logReg__title-h2">Załóż konto</h2>
                        <img src={Deco} alt="Decoration" />
                    </div>
                    <div className="formLogReg">
                        <form className="formLogReg__form">
                            <div className="formLogReg__container">
                                <div className="formLogReg__inputs">
                                    <p className="formLogReg__p">Email</p>
                                    <input className="formLogReg__input" />
                                </div>
                                <div className="formLogReg__inputs">
                                    <p className="formLogReg__p">Hasło</p>
                                    <input
                                        className="formLogReg__input"
                                        type="password"
                                        minLength="6" />
                                </div>
                                <div className="formLogReg__inputs">
                                    <p className="formLogReg__p">Powtórz hasło</p>
                                    <input
                                        className="formLogReg__input"
                                        type="password"
                                        minLength="6"
                                        />
                                </div>
                            </div>
                            <div className="formLogReg__buttons">
                                <RouterLink to="/login" className="logReg__btn">Zaloguj się</RouterLink>
                                <RouterLink to="/" className="logReg__btn">Załóż konto</RouterLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}