import { Container, Row, Col, Card, Button } from "react-bootstrap";
import trabajar from "../../assets/imgInicio/trabajar.jpg"
import descansar from "../../assets/imgInicio/descansar.jpg"
import divertirse from "../../assets/imgInicio/divertirse.jpg"
import "../css/index.css"

const Experiencias = () => {
  return (
    <Container className="my-3 text-center">
      <Row>
        <h2 className="colorVerdeLetra">Elegí tu experiencia!</h2>
        <Col xs="12" md="4" className="my-2">
          <Card>
            <Card.Img variant="top" src={trabajar} />
            <Card.Body>
              <Card.Title>Trabajar</Card.Title>
              <Button variant="success">Ver más...</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="4" className="my-2">
          <Card>
            <Card.Img variant="top" src={descansar} />
            <Card.Body>
              <Card.Title>Descansar</Card.Title>
              <Button variant="success">Ver más...</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="4" className="my-2">
          <Card>
            <Card.Img variant="top" src={divertirse} />
            <Card.Body>
              <Card.Title>Divertirse</Card.Title>
              <Button variant="success">Ver más...</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Experiencias;
