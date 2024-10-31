import { Container, Row, Col } from "react-bootstrap";
import "../../styles/index.css";
import logo from "../../assets/logoCompleto.png";
import FormularioIndex from "../indexComponents/FormularioIndex";
import AcercaDeNosotros from "../indexComponents/AcercaDeNosotros";
import Servicios from "../indexComponents/Servicios";
import Experiencias from "../indexComponents/Experiencias";
import Promociones from "../indexComponents/Promociones";
import { Outlet } from "react-router-dom";
import { useRef, useState } from "react";

const Index = () => {
  const filterContainer = useRef(null);
  const [scrollCounter, setScrollCounter] = useState(0);

  const handleScroll = () => {
    if (scrollCounter === 0) {
      filterContainer.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const offset = -70;
        window.scrollBy({ top: offset, behavior: "smooth" });
      }, 400);
    }
    setScrollCounter(scrollCounter + 1);
  };
  return (
    <Container fluid>
      <section className="seccion1">
        <div className="contenedorDeLogo">
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
            <Col lg={6} className="m-auto">
              <FormularioIndex
                scroll={handleScroll}
                setScrollCounter={setScrollCounter}
              ></FormularioIndex>
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
