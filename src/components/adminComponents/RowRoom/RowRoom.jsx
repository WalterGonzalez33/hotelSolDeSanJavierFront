import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import style from "./RowRoom.module.css";

const RowRoom = ({ room_name, price, available, broad_description, benefits }) => {
  return (
    <tr className={` ${style.tr_room} `}>
      <td><input type="checkbox" /></td>
      <td>{room_name}</td>
      <td>{price}</td>
      <td>{available ? "Disponible" : "No disponible"}</td>
      <td>{broad_description}</td>
      <td>{benefits.join(", ")}</td>
      <td>
        <FaEdit className={` ${style.icon_edit} `} />
        <FaTrash className={` ${style.icon_delete} `} />
      </td>
    </tr>
  );
};

export default RowRoom;
