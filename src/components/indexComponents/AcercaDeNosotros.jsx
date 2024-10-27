import { Container, Row, Col, Button } from "react-bootstrap";
import salones from "../../assets/imgInicio/hotel.jpg";
const AcercaDeNosotros = () => {
  return (
    <Container className="my-3">
      <Row>
        <Col>
          <h3 className="colorVerdeLetra border-bottom border-5 border-dark-subtle">Acerca de Nosotros</h3>
          <p>
            Sol de San Javier es un hotel 4 estrellas ubicado en la cima del cerro
            San Javier, rodeado por la majestuosa yunga tucumana y con vistas
            excepcionales de la ciudad de San Miguel de Tucumán.
          </p>
          <p className="d-none d-md-block">
            El hotel cuenta con un extenso parque de 8 hectáreas, repleto de
            vegetación autóctona y panorámicas impresionantes, que ofrece el
            escenario ideal para descansar, disfrutar en familia y convertir
            cualquier evento en un momento único e inolvidable.
          </p>
          <Button type="button" variant="success">
            Ver más...
          </Button>
        </Col>
        <Col className="d-none d-md-block">
          <img src={salones} alt="fachada del hotel" className="imagenHotel w-100 h-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default AcercaDeNosotros;
