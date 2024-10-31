import { FaConciergeBell } from "react-icons/fa";
import style from "./BtnReservation.module.css";

const BtnReservation = ({ color }) => {
  return (
    <div
      className={`${style.btnReservationContainer} ${
        color !== "light" && style.color_dark
      }`}
    >
      <button
        className={`${style.btnReservation} ${
          color !== "light" && style.color_dark
        }`}
      >
        <FaConciergeBell /> Reservar
      </button>
    </div>
  );
};
export default BtnReservation;
