import Deco from "../../../../assets/Decoration.svg";
import {useState} from "react";
import validator from 'validator'

export default function Form() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [visibility, setVisibility] = useState("form__invisible");
    const [error, setError] = useState("form__error-non");
    const [inputErr, setInputErr] = useState("form__input");
    const [textareaErr, setTextareaErr] = useState("form__textarea");

    const handleNameChange = e => {
        setName(e.target.value.replace(/\d/g, '').replace(/\s/g, ""));
    };
    const handleMailChange = e => {
        let email = e.target.value;
        setMail(e.target.value.replace(/\s/g, ""));
        if (validator.isEmail(email)) {
            console.log("Mail ok");
        } else {
            console.log("Popraw mail");
        }
    };
    const handleMessageChange = e => {
        setMessage(e.target.value);
    };
    let handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: mail,
                    message: message,
                }),
            });
            if (res.status === 200) {
                setName("");
                setMail("");
                setMessage("");
                setError("form__error-non");
                setInputErr("form__input");
                setTextareaErr("form__textarea");
                setVisibility("form__visible");
            } else {
                setError("form__error");
                setInputErr("form__input-error");
                setTextareaErr("form__textarea-error");
                setVisibility("form__invisible");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="form">
                <div className="form__title">
                    <h2 className="form__title-h2">Skontaktuj si?? z nami!</h2>
                </div>
                <div className="form__deco">
                    <img src={Deco} alt="Decoration" />
                </div>
                <div className={visibility}>Wiadomo???? zosta??a wys??ana!<br/>Wkr??tce si?? skontaktujemy.</div>
                <div className="form__container">
                    <form>
                        <div className="form__data">
                            <div className="form__inputContainer">
                                <p className="form__title-p">Wpisz swoje imi??</p>
                                <input  value={name}
                                        onChange={handleNameChange}
                                        placeholder="Krzysztof"
                                        className={inputErr} />
                                <p className={error}>Podane imi?? jest nieprawid??owe!</p>
                            </div>
                            <div className="form__inputContainer">
                                <p className="form__title-p">Wpisz sw??j email</p>
                                <input value={mail}
                                       onChange={(e) => handleMailChange(e)}
                                       placeholder="abc@xyz.pl"
                                       className={inputErr} />
                                <p className={error}>Podany e-mail jest nieprawid??owy!</p>
                            </div>

                        </div>
                        <div className="form__message">
                            <p className="form__title-p">Wpisz swoj?? wiadomo????</p>
                            <textarea
                                value={message}
                                onChange={handleMessageChange}
                                minLength="120"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                className={textareaErr} />
                            <p className={error}>Wiadomo???? powinna mie?? conajmniej 120 znak??w!</p>
                        </div>
                        <div className="form__button">
                            <input
                                onClick={handleSubmit}
                                type="submit"
                                className="form__btn"
                                value="Wy??lij"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}