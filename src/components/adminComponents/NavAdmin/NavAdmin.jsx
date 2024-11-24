import style from "./NavAdmin.module.css";
import { Link, useLocation } from "react-router-dom";
import { FaUserAlt, FaCalendarWeek, FaHotel } from "react-icons/fa";
import { Button } from "react-bootstrap";

const NavAdmin = () => {
  const location = useLocation();

  return (
    <article className={`p-3 m-2  ${style.admin_nav_container} `}>
      <Link to={"users"}>
        <Button
          className={` ${style.admin_tabLink} ${
            location.pathname === "/admin/users" && style.active
          } `}
        >
          <FaUserAlt />
          <span className="ms-md-2">Usuarios</span>
        </Button>
      </Link>

      <Link to={"reservations"}>
        <Button
          className={` ${style.admin_tabLink} ${
            location.pathname.includes("/admin/reservations") && style.active
          }`}
        >
          <FaCalendarWeek />
          <span className="ms-md-2">Reservaciones</span>
        </Button>
      </Link>

      <Link to={"rooms"}>
        <Button
          className={` ${style.admin_tabLink} ${
            location.pathname === "/admin/rooms" && style.active
          }`}
        >
          <FaHotel />
          <span className="ms-md-2">Habitaciones</span>
        </Button>
      </Link>
    </article>
  );
};
export default NavAdmin;
