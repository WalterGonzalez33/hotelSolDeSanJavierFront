import { FaConciergeBell } from "react-icons/fa";
import style from "./BtnReservation.module.css";
import  { Link } from "react-router-dom";


const BtnReservation = ({ color }) => {
  return (
    <div
      className={`${style.btnReservationContainer} ${
        color !== "light" && style.color_dark
      }`}
    >
      <Link to="/reservacion"
        className={`${style.btnReservation} ${
          color !== "light" && style.color_dark
        }`}
      >
        <FaConciergeBell /> Reservar
      </Link>
    </div>
  );
};
export default BtnReservation;
