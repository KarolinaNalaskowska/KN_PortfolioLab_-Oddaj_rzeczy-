import Deco from "../../../../assets/Decoration.svg";

export default function Form() {
    return (
        <>
            <div className="form">
                <div className="form__title">
                    <h2 className="form__title-h2">Skontaktuj się z nami!</h2>
                </div>
                <div className="form__deco">
                    <img src={Deco} alt="Decoration" />
                </div>
                <div className="form__container">
                    <form>
                        <div className="form__data">
                            <div className="form__inputContainer">
                                <p className="form__title-p">Wpisz swoje imię</p>
                                <input placeholder="Krzysztof" className="form__input" />
                            </div>
                            <div className="form__inputContainer">
                                <p className="form__title-p">Wpisz swój email</p>
                                <input placeholder="abc@xyz.pl" className="form__input" />
                            </div>

                        </div>
                        <div className="form__message">
                            <p className="form__title-p">Wpisz swoją wiadomość</p>
                            <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                      className="form__textarea" />
                        </div>
                        <div className="form__button">
                            <button className="form__btn">Wyślij</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}