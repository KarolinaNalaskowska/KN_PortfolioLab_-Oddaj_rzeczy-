import Deco from "../../assets/Decoration.svg";
import Nav from "../home/header/navigation/Nav";

export default function Login() {
    return (
        <section>
            <div>
                <Nav />
            </div>
            <div>
                <div>
                    <h2>Zaloguj się</h2>
                    <img src={Deco} alt="Decoration" />
                </div>
                <div>
                    <form>
                        <div>
                            <p>Email</p>
                            <input />
                        </div>
                        <div>
                            <p>Hasło</p>
                            <input />
                        </div>
                        <div>
                            <button>Załóż konto</button>
                            <button>Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
