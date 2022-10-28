import imagenJuego from "./imagen/Arkanoid.jpg";
import "./index.css";
import "./App.css";
import { Link } from "react-router-dom";



export default function Home() {
    return (
        <><div className="principal">
            <h1>Arkanoid</h1>

        </div><div className="imagen">

                <img src={imagenJuego} alt="Juego" />

            </div><nav>
                <ul>
                    
                    <li>
                        <Link to="Juego" className="botonJugar">Nivel 1</Link>
                    </li>
                    <li>
                        <Link to="Juego2" className="botonJugar">Nivel 2</Link>
                    </li>
                    <li>
                        <Link to="Colaboradores" className="botonJugar">Colaboradores</Link>
                    </li>
                </ul>
            </nav></>

    );
}

