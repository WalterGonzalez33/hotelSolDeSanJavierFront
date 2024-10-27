import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-light py-5 footer-background">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="text-dark fs-3">Navegación</h5>
            <ul className="list-unstyled">
              <li>
                <Link to={"/"} className="text-link fs-5">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-link fs-5">
                  Habitaciones
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-link fs-5">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
              <Link to={"/"} className="text-link fs-5">
                  Servicios
                </Link>
              </li>
              <li>
              <Link to={"/"}  className="text-link fs-5">
                  Contacto
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
  <h5 className="text-dark fs-3">Síguenos</h5>
  <ul className="list-unstyled">
    <li>
      <a href="https://www.facebook.com" className="text-link fs-5">
        <BsFacebook className="icon" /> Facebook
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com" className="text-link fs-5">
        <BsTwitter className="icon" /> Twitter
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com" className="text-link fs-5">
        <BsInstagram className="icon" /> Instagram
      </a>
    </li>
  </ul>
</Col>

          <Col md={4}>
            <h5 className="text-dark fs-3">Contacto</h5>
            <p className="text-link fs-5">
              Dirección:Ruta 340 - Km 23, San Javier,Tucuman
            </p>
            <p className="text-link fs-5">
              Email:reservas@hotelsolsanjavier.com.ar
            </p>
            <p className="text-link fs-5">
              Teléfono:(+54 9) (0381) 155-279796.
            </p>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p className="mb-0">&copy; 2024 Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
