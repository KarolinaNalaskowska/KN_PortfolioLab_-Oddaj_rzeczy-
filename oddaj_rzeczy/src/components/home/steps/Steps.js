import Deco from "../../../assets/Decoration.svg";
import icon1 from "../../../assets/Icon-1.svg";
import icon2 from "../../../assets/Icon-2.svg";
import icon3 from "../../../assets/Icon-3.svg";
import icon4 from "../../../assets/Icon-4.svg";

export default function FourSteps() {
    return (
        <main className="steps">
            <div className="steps__header">
                <div className="steps__title">
                    <h2 className="steps__title-h2">Wystarczą 4 proste kroki</h2>
                </div>
                <div className="steps__image">
                    <img src={Deco} alt="Decoration" />
                </div>
            </div>
            <div className="steps__background">
                <div className="steps__container">
                    <div className="steps__step">
                        <img src={icon1} alt="Icon" className="steps__icon"/>
                        <h3 className="steps__title-h3">Wybierz rzeczy</h3>
                        <p className="steps__text">ubrania, zabawki,<br/>sprzęt i inne</p>
                    </div>
                    <div className="steps__step">
                        <img src={icon2} alt="Icon" className="steps__icon"/>
                        <h3 className="steps__title-h3">Spakuj je</h3>
                        <p className="steps__text">skorzystaj z<br/>worków na śmieci</p>
                    </div>
                    <div className="steps__step">
                        <img src={icon3} alt="Icon" className="steps__icon-3"/>
                        <h3 className="steps__title-h3">Zdecyduj komu<br/>chcesz pomóc</h3>
                        <p className="steps__text">wybierz zaufane<br/>miejsce</p>
                    </div>
                    <div className="steps__step">
                        <img src={icon4} alt="Icon" className="steps__icon"/>
                        <h3 className="steps__title-h3">Zamów kuriera</h3>
                        <p className="steps__text">kurier przyjedzie<br/>w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div className="steps__button">
                <a href="/" className="btn">oddaj<br/>rzeczy</a>
            </div>
        </main>
    )
}