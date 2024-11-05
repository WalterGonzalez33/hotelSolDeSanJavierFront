import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<footer className="text-light py-5 footer-background">
  <Container>
    <Row className="justify-content-center text-center">
      <Col md={4} className="mb-4">
        <h5 className="text-dark fs-3">Navegación</h5>
        <ul className="list-unstyled">
          <li>
            <Link to={"/"} className="text-link fs-5 rounded-1">
              Inicio
            </Link>
          </li>
          <li>
            <Link to={"/habitaciones"} className="text-link fs-5 rounded-1">
              Habitaciones
            </Link>
          </li>
          <li>
            <Link to={"/sobre-nosotros"} className="text-link fs-5 rounded-1">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to={"/galeria"} className="text-link fs-5 rounded-1">
              Galeria
            </Link>
          </li>
          <li>
            <Link to={"/contacto"} className="text-link fs-5 rounded-1">
              Contacto
            </Link>
          </li>
        </ul>
      </Col>
      <Col md={4} className="mb-4">
        <h5 className="text-dark fs-3">Síguenos</h5>
        <ul className="list-unstyled">
          <li>
            <a href="https://www.facebook.com" className="text-link fs-5 rounded-1">
              <BsFacebook className="icon" />Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="text-link fs-5 rounded-1">
              <BsTwitter className="icon" />Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" className="text-link fs-5 rounded-1">
              <BsInstagram className="icon" />Instagram
            </a>
          </li>
        </ul>
      </Col>
      <Col md={4} className="mb-4">
        <h5 className="text-dark fs-3">Contacto</h5>
        <p className="text-link fs-5 rounded-1">
          Dirección: Ruta 340 - Km 23, San Javier, Tucumán
        </p>
        <p className="text-link fs-5 rounded-1">
          Email: reservas@hotelsolsanjavier.com.ar
        </p>
        <p className="text-link fs-5 rounded-1">
          Teléfono: (+54 9) (0381) 155-279796
        </p>
      </Col>
    </Row>
    <Row className="text-center mt-3">
      <Col>
        <p className="mb-0">&copy; 2024 Todos los derechos reservados | Hotel Sol San Javier</p>
      </Col>
    </Row>
  </Container>
</footer>

  );
};

export default Footer;
