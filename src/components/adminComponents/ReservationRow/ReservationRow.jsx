import { Button } from "react-bootstrap";
import style from "../RowUser/RowUser.module.css";
import { FaRegCalendarCheck, FaPen, FaTrash } from "react-icons/fa";
import { showCustomAlert } from "../../../utils/customAlert";
import { deleteItem } from "../../../utils/requests";


const ReservationRow = ({
  _id,
  user_reservation,
  room_reservation,
  check_in,
  check_out,
  persons,
  setDataReservation,
  handleShowEdit,
  reload,
  setReload
}) => {
  const handleEditReservation = () => {
    setDataReservation({
      _id: _id,
      check_in,
      check_out,
      user_id: user_reservation._id,
      room_id: room_reservation._id,
      reload,
      persons,
    });
    handleShowEdit();
  };

  const deleteReservation = async () => {
    try {
      const deleteReservationResponse = await deleteItem(`reservation/${_id}`);
      if (!deleteReservationResponse.ok) {
        const resultDeleteReservation = await deleteReservationResponse.json();
        showCustomAlert({
          alertTitle: "¡No se pudo eliminar la reserva!",
          alertText: "",
          icon: "danger",
        });
        throw new Error(resultDeleteReservation.message);
      }
      showCustomAlert({
        alertTitle: "¡La Reserva fue eliminada correctamente!",
        alertText: "",
        icon: "success",
      });
      setReload(!reload);
    } catch (err) {
      console.error("Error al eliminar la Reserva:", err.message);
    }
  };

  const handleDeleteReservation = () => {
    showCustomAlert({
      alertTitle: `¿Quieres eliminar la Reserva??`,
      alertText: "¡Luego de esta acción no podrás volver atrás!",
      icon: "warning",
      showCancel: true,
      continueConfirm: true,
      callback: deleteReservation,
    });
  };

  return (
    <tr className={` ${style.user_row_container} `}>
      <td className={` ${style.user_icon} `}>
        <FaRegCalendarCheck />
      </td>
      <td>
        <div>
          <span>{user_reservation.email}</span>
        </div>
      </td>
      <td>
        <div>
          <span>{room_reservation.room_name}</span>
        </div>
      </td>
      <td>
        <div>
          <span>{check_in}</span>
        </div>
      </td>
      <td>
        <div>
          <span>{check_out}</span>
        </div>
      </td>
      <td>
        <div>
          <span>{persons}</span>
        </div>
      </td>

      <td>
        <div className={` ${style.buttons_container} `}>
          <Button
            className={` ${style.action_button} `}
            onClick={handleEditReservation}
          >
            <FaPen />
          </Button>
          <Button className={` ${style.action_button} `}
          onClick={handleDeleteReservation}
          >
            <FaTrash />
          </Button>
        </div>
      </td>
    </tr>
  );
};
export default ReservationRow;
