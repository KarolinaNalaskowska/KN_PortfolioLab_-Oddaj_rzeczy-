import Deco from "../../../assets/Decoration.svg";
import Foundations from "./Foundations";
import Organizations from "./Organizations";
import Local from "./Local";
import {useState} from "react";

export default function Help() {
    const [display, setDisplay] = useState(<Foundations />);
    function handleClickFoundation() {
        setDisplay(<Foundations />);
    }
    function handleClickOrganization() {
        setDisplay(<Organizations />);
    }
    function handleClickLocal() {
        setDisplay(<Local />);
    }

    return (
        <section className="help" id="helpEl">
            <div className="help__container">
                <div className="help__header">
                    <div className="help__title">
                        <h2 className="help__title-h2">Komu pomagamy?</h2>
                    </div>
                    <div className="help__deco">
                        <img src={Deco} alt="Decoration" />
                    </div>
                </div>
            <div className="help__buttons">
                <button className="help__button" onClick={handleClickFoundation}>Fundacjom</button>
                <button className="help__button" onClick={handleClickOrganization}>Organizacjom<br/>pozarządowym</button>
                <button className="help__button" onClick={handleClickLocal}>Lokalnym<br/>zbiórkom</button>
            </div>
            <>
                {display}
            </>
            </div>
        </section>
    )
}