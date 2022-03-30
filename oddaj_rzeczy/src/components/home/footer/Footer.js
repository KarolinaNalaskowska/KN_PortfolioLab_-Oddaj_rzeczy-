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
                    <a href="https://www.facebook.com/"><img src={Fb} alt="Facebook icon" /></a>
                </div>
                <div className="footer__icons-ig">
                    <a href="https://www.instagram.com/"><img src={Ig} alt="Instagram icon" /></a>
                </div>
            </div>
        </div>
    )
}