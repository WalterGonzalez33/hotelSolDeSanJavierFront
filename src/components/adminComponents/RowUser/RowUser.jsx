import { Button } from "react-bootstrap";
import style from "./RowUser.module.css";
import {
  FaUserCircle,
  FaPen,
  FaTrash,
  FaCalendarDay,
  FaWrench,
} from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";

const RowUser = ({ username, email, status, roll }) => {
  return (
    <tr className={` ${style.user_row_container} `}>
      <td className={` ${style.user_icon} `}>
        <FaUserCircle />
      </td>
      <td>
        <div>
          <span>{username}</span>
        </div>
      </td>
      <td>
        <div>
          <span>{email}</span>
        </div>
      </td>
      <td>
        <div>
          {status === "Activo" && (
            <span className={` ${style.user_active} `}>Activo</span>
          )}
          {status === "Suspendido" && (
            <span className={` ${style.user_inactive} `}>Suspendido</span>
          )}
        </div>
      </td>
      <td>
        <div>
          {roll === "Admin" && (
            <span className={` ${style.user_roll} `}>
              Admin
              <FaWrench />
            </span>
          )}
          {roll === "Usuario" && (
            <span className={` ${style.user_roll} `}>
              Usuario
              <BiSolidUserRectangle />
            </span>
          )}
        </div>
      </td>
      <td>
        <div className={` ${style.buttons_container} `}>
          <Button className={` ${style.action_button} `}>
            <FaCalendarDay />
          </Button>
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
export default RowUser;
