import ClaseColaboradores from "../components/ClaseColaboradores";
import Listacolaboradores from "../components/Json/Listacolaboradores.json";
import Row from "react-bootstrap/Row";
import Conteiner  from "react-bootstrap/Container";

function Colaboradores() {
    return (
        <Conteiner>
            <Row>
            {Listacolaboradores.map(listaC=>
            <ClaseColaboradores
            img={listaC.img}Nombre={listaC.Nombre}Descripcion={listaC.Descripcion}></ClaseColaboradores>)}
            </Row>
        </Conteiner>
        
        
        
    );
} export default Colaboradores;