import HomeHero from "../../../assets/Home-Hero-Image.jpg";
import Deco from "../../../assets/Decoration.svg";
import Nav from "./navigation/Nav";

export default function Header() {
    return (
        <header className="header">
            <img src={HomeHero} alt="Some stuff in box" className="header__image"/>
            <div className="header__content">
                <Nav />
                <div className="header__title">
                    <h1 className="header__title-h1">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                </div>
                <div className="header__deco">
                    <img src={Deco} alt="Decoration" />
                </div>
                <div className="header__buttons">
                    <a href="/" className="btn">Oddaj<br/>rzeczy</a>
                    <a href="/" className="btn">Zorganizuj zbiórkę</a>
                </div>
            </div>
        </header>
    )
}