import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Juego from "./Juego.js";
import "./App.css";
import "./index.css";
import Juego2 from "../components/Juego2";
import Colaboradores from "./Colaboradores.js";
import PaginaPrincipal from "./Paginaprincipal";

function App() {
    return (
        <Container>

            <div>
                <Routes>
                    <Route path="/" element={<PaginaPrincipal />} className='Inicio' />;
                    <Route path="Juego" element={<Juego />} className='Inicio' />;
                    <Route path="Juego2" element={<Juego2 />} className='Inicio' />;
                    <Route path="Colaboradores" element={<Colaboradores />} className='Inicio' />;
                </Routes>
            </div>
        </Container>
    );
}
export default App;
