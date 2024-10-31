import { Container, Row, Col } from "react-bootstrap";
import sanJavier from "../../assets/imgInicio/sanJavier.png";
import "../css/index.css";
import logo from "../../assets/logo.png";
import FormularioIndex from "../indexComponents/FormularioIndex";
import AcercaDeNosotros from "../indexComponents/AcercaDeNosotros";
import Servicios from "../indexComponents/Servicios";
import Experiencias from "../indexComponents/Experiencias";
import Promociones from "../indexComponents/Promociones";
import FilterRoomsContainer from "../filterRoomsContainer/FilterRoomsContainer.jsx";

const Index = () => {
  return (
    <Container>
      <section className="seccion1 pb-3">
        <div className="contenedorDeLogo">
          <img src={sanJavier} alt="" className="img-fluid" />
          <img src={logo} className="logo" />
          <div className="transparent-rectangle"></div>
        </div>
        <div className="contenedor">
          <Row className="mt-3">
            <Col lg="3" className="ms-5">
              <h3 className="colorVerdeLetra">Buscar Habitaciones</h3>
              <h6 className="colorVerdeClaro">Tarifas y disponibilidad</h6>
            </Col>
            <Col>
              <FormularioIndex></FormularioIndex>
            </Col>
            <Col>
              <FilterRoomsContainer />
            </Col>
          </Row>
        </div>
      </section>
      <AcercaDeNosotros></AcercaDeNosotros>
      <Servicios></Servicios>
      <Experiencias></Experiencias>
      <Promociones></Promociones>
    </Container>
  );
};

export default Index;
