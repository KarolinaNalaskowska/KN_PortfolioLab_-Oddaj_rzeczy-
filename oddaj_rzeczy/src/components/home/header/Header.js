import HomeHero from "../../../assets/Home-Hero-Image.jpg";
import Deco from "../../../assets/Decoration.svg";
import Nav from "./navigation/Nav";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__image">
                    <img src={HomeHero} alt="Some stuff in box" />
                </div>
                <div className="header__content">
                    <div className="header__navigation">
                        <Nav />
                    </div>
                    <div className="header__main">
                        <div className="header__title">
                            <h1 className="header__title-h1">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        </div>
                        <div className="header__deco">
                            <img src={Deco} alt="Decoration" />
                        </div>
                        <div className="header__buttons">
                            <Link to="/login" className="btn">Oddaj<br/>rzeczy</Link>
                            <Link to="/login" className="btn">Zorganizuj zbiórkę</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}