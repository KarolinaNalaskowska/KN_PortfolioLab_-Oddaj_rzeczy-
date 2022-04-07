import GiveStuff_Form from "./GiveStuff_Form";
import HeaderBackground from "../../assets/Header-Form-Background.png"
import Deco from "../../assets/Decoration.svg";
import Nav from "../home/navigation/Nav";
import Contact from "../home/contact/Contact";

export default function GiveStuff() {
    return (
        <>
            <header className="stuffHeader">
                <div className="stuffHeader__container">
                    <div className="stuffHeader__image">
                        <img src={HeaderBackground} alt="Background Header" />
                    </div>
                    <div className="stuffHeader__right">
                        <div>
                            <Nav />
                        </div>
                        <div className="stuffHeader__content">
                            <div className="stuffHeader__title">
                                <h2 className="stuffHeader__title-h2">Oddaj rzeczy, których już nie chcesz<br/>
                                    <span>potrzebującym</span>
                                </h2>
                            </div>
                            <div className="stuffHeader__deco">
                                <img src={Deco} alt="Decoration" />
                            </div>
                            <div className="stuffHeader__title">
                                <h3 className="stuffHeader__title-h3">Wystarczą 4 proste kroki:</h3>
                            </div>
                            <div className="stuffHeader__rhombuses">
                                <div className="stuffHeader__rhombus stuffHeader__rhombus-1">
                                    <p className="stuffHeader__rhombus-content stuffHeader__rhombus-number">1</p>
                                    <p className="stuffHeader__rhombus-content stuffHeader__rhombus-text">Wybierz<br/>rzeczy</p>
                                </div>
                                <div className="stuffHeader__rhombus stuffHeader__rhombus-2">
                                    <p className="stuffHeader__rhombus-content stuffHeader__rhombus-number">2</p>
                                    <p className="stuffHeader__rhombus-content stuffHeader__rhombus-text">Spakuj je<br/>w worki</p>
                                </div>
                                <div className="stuffHeader__rhombus stuffHeader__rhombus-3">
                                    <p className="stuffHeader__rhombus-content stuffHeader__rhombus-number">3</p>
                                    <p className="stuffHeader__rhombus-content stuffHeader__rhombus-text">Wybierz<br/>fundację</p>
                                </div>
                                <div className="stuffHeader__rhombus stuffHeader__rhombus-4">
                                    <p className="stuffHeader__rhombus-content stuffHeader__rhombus-number">4</p>
                                    <p className="stuffHeader__rhombus-content stuffHeader__rhombus-text">Zamów<br/>kuriera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div>
                    <h2>Ważne!</h2>
                    <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                </div>
            </section>
            <main>
                <section>
                    <GiveStuff_Form />
                </section>
            </main>
            <>
                <Contact />
            </>
        </>
    )
}