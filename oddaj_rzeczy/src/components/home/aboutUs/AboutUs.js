import Deco from "../../../assets/Decoration.svg";
import People from "../../../assets/People.jpg";
import Signature from "../../../assets/Signature.svg";

export default function AboutUs() {
    return (
        <section className="aboutUs" id="about">
            <div className="aboutUs__content">
                <h2 className="aboutUs__title">O nas</h2>
                <img src={Deco} alt="Decoration" />
                <p className="aboutUs__text">Nori grape silver beet broccoli
                    kombu beet<br/>greens fava bean
                    potato quandong celery.<br/>
                    Bunya nuts black-eyed pea
                    prairie turnip leek<br/>lentil
                    turnip greens parsnip.</p>
                <div className="aboutUs__signature">
                    <img src={Signature} alt="Signature" />
                </div>
            </div>
            <div className="aboutUs__image">
                <img src={People} alt="People" className="aboutUs__img"/>
            </div>
        </section>
    )
}