import "../_pages.scss";

export default function PageThree() {
    return (
        <>
            <div className="page">
                <div className="page__container">
                    <h3 className="page__title">Fundacja “Nie jesteś sam“</h3>
                    <p className="page__needs">ubrania, jedzenie, sprzęt
                        AGD, meble, zabawki</p>
                </div>
                <p className="page__text">
                    Cel i misja:
                    Pomoc osobom znajdującym się
                    w trudnej sytuacji życiowej.
                </p>
            </div>
            <div className="page">
                <div className="page__container">
                    <h3 className="page__title">Fundacja “Dla dzieci”</h3>
                    <p className="page__needs">ubrania, meble, zabawki</p>
                </div>
                <p className="page__text">
                    Cel i misja:
                    Pomoc dzieciom z ubogich rodzin.
                </p>
            </div>
            <div className="page page-last">
                <div className="page__container">
                    <h3 className="page__title">Fundacja “Bez domu”</h3>
                    <p className="page__needs">ubrania, jedzenie, ciepłe koce</p>
                </div>
                <p className="page__text">
                    Cel i misja:
                    Pomoc dla osób nie
                    posiadających miejsca zamieszkania.
                </p>
            </div>
        </>
    )
}