import { FaPen, FaTrash } from "react-icons/fa";
import style from "../RowRoom/RowRoom.module.css";
import { Button } from "react-bootstrap";
import { showCustomAlert } from "../../../utils/customAlert";
import { deleteItem } from "../../../utils/requests";

const RowRoom = ({
  image,
  room_name,
  price,
  broad_description,
  brief_description,
  number_rooms,
  benefits,
  handleShowEdit,
  setDataRoom,
  setReload,
  reload,
  _id,
}) => {
  const handleClickEdit = () => {
    setDataRoom({
      image,
      room_name,
      price,
      broad_description,
      brief_description,
      number_rooms,
      benefits,
      _id,
    });
    handleShowEdit();
  };

  const deleteRoom = async () => {
    try {
      const deleteRoomResponse = await deleteItem(`/rooms/${_id}`);
      if (!deleteRoomResponse.ok) {
        const resultDeleteRoom = await deleteRoomResponse.json();
        showCustomAlert({
          alertTitle: "¡No se pudo eliminar la habitación!",
          alertText: "",
          icon: "danger",
        });
        throw new Error(resultDeleteRoom.message);
      }

      showCustomAlert({
        alertTitle: "¡La habitación fue eliminada correctamente!",
        alertText: "",
        icon: "success",
      });
      setReload(!reload);
    } catch (err) {
      console.error("Error al eliminar la habitación:", err.message);
    }
  };

  const handleDeleteRoom = () => {
    showCustomAlert({
      alertTitle: `¿Quieres eliminar la habitación?`,
      alertText: "¡Luego de esta acción no podrás volver atrás!",
      icon: "warning",
      showCancel: true,
      continueConfirm: true,
      callback: deleteRoom,
    });
  };

  return (
    <tr className={` ${style.room_row_container} `}>
      <td>
        <img
          src={image}
          alt={`Imagen de ${room_name}`}
          className={style.room_image}
        />
      </td>
      <td>{room_name}</td>
      <td>${price}</td>
      <td className={`${style.description_text}`}>{broad_description}</td>
      <td>
        <div className={`${style.buttons_container}`}>
          <Button
            className={` ${style.action_button} `}
            onClick={handleClickEdit}
          >
            <FaPen />
          </Button>
          <Button
            className={` ${style.action_button} `}
            onClick={handleDeleteRoom}
          >
            <FaTrash />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default RowRoom;
