import { Col, Image, Row } from "react-bootstrap";
import BtnReservation from "../../BtnReservation/BtnReservation";
import style from "./CardRoom.module.css";

const CardRoom = () => {
  return (
    <Row className={` ${style.card_container} `}>
      <Col lg={6}>
        <Image
          src="http://hotelsolsanjavier.com.ar/public/images/secciones/suite-junior-hotel-sol-san-javier-tucuman.jpg"
          className={` ${style.card_img} `}
        />
      </Col>
      <Col lg={6}>
        <h3 className={` ${style.card_title} `}>Habitaciones Dobles Deluxe</h3>
        <div>
          <p>
            Se diferencia de habitaciones superiores por su amplio ventanal con
            vista a la ciudad, TV 29 LCD y bañera con hidromasaje. La habitación
            está equipada con: sommier king, teléfono, aire acondicionado
            frio-calor, Caja de Seguridad, Calefacción, Minibar, TV, Baño
            privado con bañera de hidromasaje y Wi-Fi.
          </p>
        </div>
        <BtnReservation />
      </Col>
    </Row>
  );
};
export default CardRoom;
