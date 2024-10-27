import { Container, Row, Col } from "react-bootstrap";
import "../css/index.css"
import restaurante from "../../assets/imgInicio/restaurante2.jpg"
import spa from "../../assets/imgInicio/spa2.jpg"
import piscina from "../../assets/imgInicio/piscina2.jpg"
import salaDeJuegos from "../../assets/imgInicio/sala2.jpg"
import canchas from "../../assets/imgInicio/canchas.jpg"
import gym from "../../assets/imgInicio/gym2.jpg"

const Servicios = () => {
    return (
        <Container className="seccion3">
            <Row>
                <h2 className="colorVerdeLetra py-3 text-decoration-underline">Comodidades y Servicios</h2>
                <Col xs="6" md="4" lg className="text-center">
                <img src={restaurante} alt="restaurante" className=" rounded-circle w-100 imagenHotel" />
                <h4 className="colorVerdeLetra py-2">Restaurante</h4>
                </Col>
                <Col xs="6" md="4" lg className="text-center">
                <img src={spa} alt="spa" className=" rounded-circle w-100 imagenHotel"/>
                <h4 className="colorVerdeLetra py-2">Spa</h4>
                </Col>
                <Col xs="6" md="4" lg className="text-center">
                <img src={piscina} alt="piscina" className=" rounded-circle w-100 imagenHotel"/>
                <h4 className="colorVerdeLetra py-2">Piscina</h4>
                </Col>
                <Col xs="6" md="4" lg className="text-center">
                <img src={salaDeJuegos} alt="sala de juegos" className=" rounded-circle w-100 imagenHotel"/>
                <h4 className="colorVerdeLetra py-2">Sala de Juegos</h4>
                </Col>
                <Col xs="6" md="4" lg className="text-center">
                <img src={canchas} alt="spa" className=" rounded-circle w-100 imagenHotel"/>
                <h4 className="colorVerdeLetra py-2">Canchas Deportivas</h4>
                </Col>
                <Col xs="6" md="4" lg className="text-center">
                <img src={gym} alt="gym" className=" rounded-circle w-100 imagenHotel"/>
                <h4 className="colorVerdeLetra py-2">Gym</h4>
                </Col>
            </Row>
        </Container>
    );
};

export default Servicios;