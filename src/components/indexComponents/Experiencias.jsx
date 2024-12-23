import { Container, Row, Col, Card, Button } from "react-bootstrap";
import trabajar from "../../assets/imgInicio/trabajar.jpg";
import descansar from "../../assets/imgInicio/descansar.jpg";
import divertirse from "../../assets/imgInicio/divertirse.jpg";
import "../../styles/index.css";
import { Link } from "react-router-dom";

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
              <Link to={"/error404"}>
                <Button variant="success">Ver más...</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="4" className="my-2">
          <Card>
            <Card.Img variant="top" src={descansar} />
            <Card.Body>
              <Card.Title>Descansar</Card.Title>
              <Link to={"/error404"}>
                <Button variant="success">Ver más...</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="4" className="my-2">
          <Card>
            <Card.Img variant="top" src={divertirse} />
            <Card.Body>
              <Card.Title>Divertirse</Card.Title>
              <Link to={"/error404"}>
                <Button variant="success">Ver más...</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Experiencias;
