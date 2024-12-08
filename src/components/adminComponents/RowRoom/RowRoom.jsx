import { FaPen, FaTrash, FaCalendarDay } from "react-icons/fa";
import style from "../RowRoom/RowRoom.module.css";
import { Button } from "react-bootstrap";


const RowRoom = ({  image, room_name, price, broad_description }) => {
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
        
            <Button className={` ${style.action_button} `}>
            <FaPen/>
            </Button>
            <Button className={` ${style.action_button} `}>
            <FaTrash />
            </Button>
        </div>
      </td>
    </tr>
  );
};

export default RowRoom;

