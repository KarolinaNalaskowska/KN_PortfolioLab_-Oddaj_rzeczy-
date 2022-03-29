import "./_pages.scss";
import PageOne from "./local pages/PageOne";
import {useState} from "react";

export default function Local() {
    const [page, setPage] = useState(<PageOne />);
    function handleClickOne() {
        setPage(<PageOne />);
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
            <div  className="buttons__bottom buttons__bottom-local">
                <button className="buttons__bottom-btn buttons__bottom-hidden" onClick={handleClickOne}>1</button>
            </div>
        </div>
    )
}