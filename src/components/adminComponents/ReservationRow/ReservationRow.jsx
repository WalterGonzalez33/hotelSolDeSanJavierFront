import { Button } from "react-bootstrap";
import style from "../RowUser/RowUser.module.css";
import { FaRegCalendarCheck, FaPen, FaTrash } from "react-icons/fa";

const ReservationRow = ({
  user_reservation,
  room_reservation,
  check_in,
  check_out,
  persons,
}) => {
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
          <Button className={` ${style.action_button} `}>
            <FaPen />
          </Button>
          <Button className={` ${style.action_button} `}>
            <FaTrash />
          </Button>
        </div>
      </td>
    </tr>
  );
};
export default ReservationRow;
