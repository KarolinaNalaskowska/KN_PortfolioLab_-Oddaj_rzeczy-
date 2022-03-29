import "./_help.scss";
import PageOne from "./organizations pages/PageOne";
import PageTwo from "./organizations pages/PageTwo";
import {useState} from "react";

export default function Organizations() {
    const [page, setPage] = useState(<PageOne />);
    function handleClickOne() {
        setPage(<PageOne />);
    }
    function handleClickTwo() {
        setPage(<PageTwo />);
    }
    return (
        <div className="help__content">
            <p className="help__text">
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                quis nostrud exercitation.
            </p>
            {page}
            <div  className="buttons__bottom buttons__bottom-organizations">
                <button className="buttons__bottom-btn buttons__bottom-closer" onClick={handleClickOne}>1</button>
                <button className="buttons__bottom-btn buttons__bottom-closer" onClick={handleClickTwo}>2</button>
            </div>
        </div>
    )
}