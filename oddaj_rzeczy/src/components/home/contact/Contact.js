import Background from "../../../assets/Background-Contact-Form.jpg";
import Form from "./form/Form";

export default function Contact() {
    return (
        <section className="contact" id="contactUs">
            <div className="contact__container">
                <div className="contact__cover">
                    <img src={Background} alt="Clothes" className="contact__background"/>
                </div>
                <div className="contact__form">
                    <Form />
                </div>
            </div>
        </section>
    )
}