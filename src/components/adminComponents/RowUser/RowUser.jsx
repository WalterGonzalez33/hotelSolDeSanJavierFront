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
import { showCustomAlert } from "../../../utils/customAlert";
import { deleteItem } from "../../../utils/requests";
import { useNavigate } from "react-router-dom";

const RowUser = ({
  _id,
  username,
  email,
  status,
  roll,
  handleShowEdit,
  setDataUser,
  setReload,
  reload,
}) => {
  const navigate = useNavigate();

  const handleClickEdit = () => {
    handleShowEdit();
    setDataUser({
      username,
      email,
      status,
      roll,
      _id,
    });
  };

  const redirectionReservation = () => {
    navigate(`/admin/reservations/${_id}`);
  };
  const handleReservationsClick = () => {
    showCustomAlert({
      alertTitle: `Quieres ver las reservas del usuario (${username})`,
      alertText: "",
      icon: "warning",
      confirmText: "CONTINUAR",
      cancelText: "VOLVER",
      showCancel: true,
      continueConfirm: true,
      callback: redirectionReservation,
    });
  };
  const handleDelete = async () => {
    try {
      const deleteUserResponse = await deleteItem(`users/${_id}`);
      if (!deleteUserResponse.ok) {
        const resultDeleteUser = await deleteUserResponse.json();
        showCustomAlert({
          alertTitle: "No se pudo eliminar el usuario!!",
          alertText: "",
          icon: "danger",
        });
        throw new Error(resultDeleteUser.message);
      }
      showCustomAlert({
        alertTitle: "El usuario fue eliminado correctamente!!",
        alertText: "",
      });
      setReload(!reload);
    } catch (err) {
      console.error(err, err.message);
    }
  };

  const handleClickDelete = () => {
    showCustomAlert({
      alertTitle: `Quieres eliminar el usuario (${username})`,
      alertText: "Luego de esta acción no podrás volver atrás!!",
      icon: "warning",
      showCancel: true,
      continueConfirm: true,
      callback: handleDelete,
    });
  };

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
          <Button
            className={` ${style.action_button} `}
            onClick={handleReservationsClick}
          >
            <FaCalendarDay />
          </Button>
          <Button
            className={` ${style.action_button} `}
            onClick={handleClickEdit}
          >
            <FaPen />
          </Button>
          <Button
            className={` ${style.action_button} `}
            onClick={handleClickDelete}
          >
            <FaTrash />
          </Button>
        </div>
      </td>
    </tr>
  );
};
export default RowUser;
