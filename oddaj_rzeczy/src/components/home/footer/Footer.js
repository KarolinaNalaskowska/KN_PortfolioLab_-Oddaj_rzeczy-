import Fb from "../../../assets/Facebook.svg";
import Ig from "../../../assets/Instagram.svg";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__text">
                <p>Copyright by Coders Lab</p>
            </div>
            <div className="footer__icons">
                <div className="footer__icons-fb">
                    <Link to="https://www.facebook.com/"><img src={Fb} alt="Facebook icon" /></Link>
                </div>
                <div className="footer__icons-ig">
                    <Link to="https://www.instagram.com/"><img src={Ig} alt="Instagram icon" /></Link>
                </div>
            </div>
        </div>
    )
}