import { FaConciergeBell } from "react-icons/fa";
import style from "./BtnReservation.module.css";
import  { Link } from "react-router-dom";


const BtnReservation = () => {
  return (
    <div className={`${style.btnReservationContainer}`}>
      <Link to="/reservacion" className={`${style.btnReservation}`}>
        <FaConciergeBell /> Reservar
      </Link>
    </div>
  );
};
export default BtnReservation;
