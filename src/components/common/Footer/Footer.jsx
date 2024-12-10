import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import {
  BsFacebook,
  BsTwitterX,
  BsInstagram,
  BsGeoAltFill,
  BsFillEnvelopeFill,
  BsWhatsapp,
  BsFillHouseDoorFill,
  BsFillLampFill,
  BsPersonRaisedHand,
  BsFillImageFill,
  BsPersonFill,
} from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-light py-5 footer-background">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={4} className="mb-4">
            <h5 className="fs-3 rounded-5">Navegación</h5>
            <ul className="list-unstyled">
              <li>
                <Link to={"/"} className="text-link fs-5">
                  <BsFillHouseDoorFill className="icon" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link to={"/habitaciones"} className="text-link fs-5">
                  <BsFillLampFill className="icon" />
                  Habitaciones
                </Link>
              </li>
              <li>
                <Link to={"/sobre-nosotros"} className="text-link fs-5">
                  <BsPersonRaisedHand className="icon" />
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to={"/galeria"} className="text-link fs-5">
                  <BsFillImageFill className="icon" />
                  Galeria
                </Link>
              </li>
              <li>
                <Link to={"/contacto"} className="text-link fs-5">
                  <BsPersonFill className="icon" />
                  Contacto
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5 className="fs-3 rounded-5">Síguenos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com" className="text-link">
                  <BsFacebook className="icon" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="text-link">
                  <BsTwitterX className="icon" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="text-link">
                  <BsInstagram className="icon" />
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5 className="fs-3 rounded-5">Contacto</h5>
            <p className="text-link">
              <BsFillEnvelopeFill className="icon" />
              hotelsolsanjavier@gmail.com
            </p>
            <p className="text-link">
              <BsWhatsapp className="icon" />
              (+54 9) (0381) 155-279796
            </p>
            <p className="text-link">
              <BsGeoAltFill className="icon" />
              Ruta 340 - Km 23, San Javier, Tucumán
            </p>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p className="mb-0">
              &copy; 2024 Todos los derechos reservados | Hotel Sol San Javier
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
