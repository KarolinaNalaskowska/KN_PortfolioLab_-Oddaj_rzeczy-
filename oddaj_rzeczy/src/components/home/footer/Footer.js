import Fb from "../../../assets/Facebook.svg";
import Ig from "../../../assets/Instagram.svg";
import {FALSE} from "node-sass";

export default function Footer() {
    return (
        <div>
            <div>
                <p>Copyright by Coders Lab</p>
            </div>
            <div>
                <div>
                    <img src={Fb} alt "Facebook icon" />
                </div>
                <div>
                    <img src={Ig} alt="Instagram icon" />
                </div>
            </div>
        </div>
    )
}