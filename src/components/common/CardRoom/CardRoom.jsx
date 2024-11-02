import { Image } from "react-bootstrap";
import BtnReservation from "../../BtnReservation/BtnReservation";
import style from "./CardRoom.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaShower, FaTv } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";

const CardRoom = ({
  room_name,
  price,
  image,
  broad_description,
  benefits,
  available = true,
}) => {
  const formatNumberWithDots = (number) => {
    return number.toLocaleString("de-DE");
  };
  return (
    <article className={` ${style.card_container} `}>
      {/* {available && <span className={` ${style.card_available} `}>Disponible</span>} */}
      <div className={` ${style.card_img_container} `}>
        <Image src={image} className={` ${style.card_img} `} />
      </div>
      <div className={` ${style.card_info_container} `}>
        <h3 className={` ${style.card_title} `}>{room_name}</h3>
        <div className={` ${style.card_description_container} `}>
          <p>{broad_description}</p>
        </div>
        <div className={` ${style.card_benefits_container} `}>
          <ul className={`${style.card_benefits_list}`}>
            {benefits &&
              benefits.map((benefit, i) => {
                switch (benefit) {
                  case "WIFI":
                    return (
                      <li key={i}>
                        <FaWifi /> WIFI
                      </li>
                    );
                  case "TV":
                    return (
                      <li key={i}>
                        <FaTv /> TV
                      </li>
                    );
                  case "Telefono":
                    return (
                      <li key={i}>
                        <BsFillTelephoneFill /> Teléfono
                      </li>
                    );
                  case "Teléfono":
                    return (
                      <li key={i}>
                        <BsFillTelephoneFill /> Teléfono
                      </li>
                    );
                  case "Baño privado":
                    return (
                      <li key={i}>
                        <FaShower /> Baño privado
                      </li>
                    );
                  default:
                    break;
                }
              })}
          </ul>
        </div>
        <div className={` ${style.card_reservation_container} `}>
          <span className={` ${style.card_price_container} `}>
            <span className={` ${style.card_price} `}>
              ${formatNumberWithDots(price)}/
            </span>
            dia
          </span>
          <BtnReservation color={"dark"} />
        </div>
      </div>
    </article>
  );
};
export default CardRoom;
