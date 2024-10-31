import { Container, Row, Col } from "react-bootstrap";
import sanJavier from "../../assets/imgInicio/sanJavier.png";
import "../../styles/index.css";
import logo from "../../assets/logo.png";
import FormularioIndex from "../indexComponents/FormularioIndex";
import AcercaDeNosotros from "../indexComponents/AcercaDeNosotros";
import Servicios from "../indexComponents/Servicios";
import Experiencias from "../indexComponents/Experiencias";
import Promociones from "../indexComponents/Promociones";
import { Outlet } from "react-router-dom";
import { useRef } from "react";

const Index = () => {
  const filterContainer = useRef(null);

  const handleScroll = () => {
    filterContainer.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const offset = -80;
      window.scrollBy({ top: offset, behavior: "smooth" });
    }, 400);
  };
  return (
    <Container>
      <section className="seccion1">
        <div className="contenedorDeLogo">
          <img src={sanJavier} alt="" className="img-fluid" />
          <img src={logo} className="logo" />
          <div className="transparent-rectangle"></div>
        </div>
        <div className="contenedor">
          <Row className="mt-3 row-index">
            <Col
              xs={12}
              className="text-center  mb-3 mt-3 mt-md-4 mb-md-4 ms-md-3"
            >
              <h3 className="colorVerdeLetra">Buscar Habitaciones</h3>
              <h6 className="colorVerdeClaro">Tarifas y disponibilidad</h6>
            </Col>
            <Col lg={7} className="m-auto">
              <FormularioIndex scroll={handleScroll}></FormularioIndex>
            </Col>
            <Col ref={filterContainer} className="col-12">
              <Outlet />
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
