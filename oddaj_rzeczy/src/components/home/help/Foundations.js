import PageOne from "./foundations pages/PageOne";
import PageTwo from "./foundations pages/PageTwo";
import PageThree from "./foundations pages/PageThree";
import {useState} from "react";

export default function Foundations() {
    const [page, setPage] = useState(<PageOne />);
    function handleClickOne() {
        setPage(<PageOne />);
    }
    function handleClickTwo() {
        setPage(<PageTwo />);
    }
    function handleClickThree() {
        setPage(<PageThree />)
    }

    return (
        <div className="help__content">
            <p className="help__text">
                W naszej bazie znajdziesz listę
                zweryfikowanych Fundacji,
                z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują,
                komu pomagają i czego potrzebują.
            </p>
            {page}
            <div className="buttons__bottom buttons__bottom-foundations">
                <button className="buttons__bottom-btn" onClick={handleClickOne}>1</button>
                <button className="buttons__bottom-btn" onClick={handleClickTwo}>2</button>
                <button className="buttons__bottom-btn" onClick={handleClickThree}>3</button>
            </div>
        </div>
    )
}