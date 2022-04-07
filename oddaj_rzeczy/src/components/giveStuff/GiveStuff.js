import GiveStuff_Form from "./GiveStuff_Form";
import HeaderBackground from "../../assets/Header-Form-Background.png"
import Deco from "../../assets/Decoration.svg";
import Nav from "../home/navigation/Nav";
import Contact from "../home/contact/Contact";

export default function GiveStuff() {
    return (
        <>
            <header>
                <div>
                    <div>
                        <img src={HeaderBackground} alt="Background Header" />
                    </div>
                    <div>
                        <div>
                            <Nav />
                        </div>
                        <div>
                            <div>
                                <h2>Oddaj/</h2>
                            </div>
                            <div>
                                <img src={Deco} alt="Decoration" />
                            </div>
                            <div>
                                <h3>wystarcza</h3>
                            </div>
                            <div>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
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