import { Container, Row } from "react-bootstrap";
import restaurante from "../../assets/imgInicio/restaurante2.jpg";
import spa from "../../assets/imgInicio/spa2.jpg";
import piscina from "../../assets/imgInicio/piscina2.jpg";
import salaDeJuegos from "../../assets/imgInicio/sala2.jpg";
import canchas from "../../assets/imgInicio/canchas.jpg";
import gym from "../../assets/imgInicio/gym2.jpg";
import "../../styles/servicios.css";

const Servicios = () => {
  return (
    <Container className="section-services">
      <Row>
        <h2 className="colorVerdeLetra py-3 text-center mb-3">
          Comodidades y Servicios
        </h2>

        <div className="slider">
          <div className="slider-track">
            <div className="slide">
              <img
                src={restaurante}
                alt="restaurante"
                className=" rounded-circle"
              />
              <h4 className="colorVerdeLetra py-2">Restaurante</h4>
            </div>
            <div className="slide">
              <img src={spa} alt="spa" className=" rounded-circle" />
              <h4 className="colorVerdeLetra py-2">Spa</h4>
            </div>
            <div className="slide">
              <img src={piscina} alt="piscina" className=" rounded-circle" />
              <h4 className="colorVerdeLetra py-2">Piscina</h4>
            </div>
            <div className="slide">
              <img
                src={salaDeJuegos}
                alt="sala de juegos"
                className=" rounded-circle"
              />
              <h4 className="colorVerdeLetra py-2">Sala de Juegos</h4>
            </div>
            <div className="slide">
              <img src={canchas} alt="spa" className=" rounded-circle" />
              <h4 className="colorVerdeLetra py-2">Canchas Deportivas</h4>
            </div>
            <div className="slide">
              <img src={gym} alt="gym" className=" rounded-circle" />
              <h4 className="colorVerdeLetra py-2">Gym</h4>
            </div>
            <div className="slide">
              <img
                src={restaurante}
                alt="restaurante"
                className=" rounded-circle"
              />
              <h4 className="colorVerdeLetra py-2">Restaurante</h4>
            </div>
            <div className="slide">
              <img src={spa} alt="spa" className=" rounded-circle" />
              <h4 className="colorVerdeLetra py-2">Spa</h4>
            </div>
            <div className="slide">
              <img src={piscina} alt="piscina" className=" rounded-circle" />
              <h4 className="colorVerdeLetra py-2">Piscina</h4>
            </div>
            <div className="slide">
              <img
                src={salaDeJuegos}
                alt="sala de juegos"
                className=" rounded-circle"
              />
              <h4 className="colorVerdeLetra py-2">Sala de Juegos</h4>
            </div>
            <div className="slide">
              <img src={canchas} alt="spa" className=" rounded-circle" />
              <h4 className="colorVerdeLetra py-2">Canchas Deportivas</h4>
            </div>
            <div className="slide">
              <img src={gym} alt="gym" className=" rounded-circle" />
              <h4 className="colorVerdeLetra py-2">Gym</h4>
            </div>
            <div className="slide">
              <img
                src={restaurante}
                alt="restaurante"
                className=" rounded-circle"
              />
              <h4 className="colorVerdeLetra py-2">Restaurante</h4>
            </div>
            <div className="slide">
              <img src={spa} alt="spa" className=" rounded-circle" />
              <h4 className="colorVerdeLetra py-2">Spa</h4>
            </div>
            <div className="slide">
              <img src={piscina} alt="piscina" className=" rounded-circle" />
              <h4 className="colorVerdeLetra py-2">Piscina</h4>
            </div>
            <div className="slide">
              <img
                src={salaDeJuegos}
                alt="sala de juegos"
                className=" rounded-circle"
              />
              <h4 className="colorVerdeLetra py-2">Sala de Juegos</h4>
            </div>
            <div className="slide">
              <img src={canchas} alt="spa" className=" rounded-circle" />
              <h4 className="colorVerdeLetra py-2">Canchas Deportivas</h4>
            </div>
            <div className="slide">
              <img src={gym} alt="gym" className=" rounded-circle" />
              <h4 className="colorVerdeLetra py-2">Gym</h4>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Servicios;
