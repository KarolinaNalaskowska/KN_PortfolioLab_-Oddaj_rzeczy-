import Deco from "../../assets/Decoration.svg";
import Nav from "../home/header/navigation/Nav";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <section className="logReg">
            <div className="logReg__container">
                <div className="navigation__login">
                    <Nav />
                </div>
                <div className="logReg__content">
                    <div className="logReg__title">
                        <h2 className="logReg__title-h2">Zaloguj się</h2>
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
                                    <input className="formLogReg__input" type="password" />
                                </div>
                            </div>
                            <div className="formLogReg__buttons">
                                <Link to="/register" className="logReg__btn">Załóż konto</Link>
                                <Link to="/" className="logReg__btn">Zaloguj się</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
