import style from "./NavAdmin.module.css";
import { Link, useLocation } from "react-router-dom";
import { FaUserAlt, FaCalendarWeek, FaHotel, FaBars } from "react-icons/fa";
import { Button } from "react-bootstrap";

const NavAdmin = () => {
  const location = useLocation();

  return (
    <article className={`p-3 m-2  ${style.admin_nav_container} `}>
      <div className={` ${style.nav_bar_icon_container} `}>
        <FaBars />
      </div>
      <Link to={"users"}>
        <Button
          className={` ${style.admin_tabLink} ${
            location.pathname === "/admin/users" && style.active
          } `}
        >
          <FaUserAlt />
        </Button>
      </Link>

      <Link to={"reservations"}>
        <Button
          className={` ${style.admin_tabLink} ${
            location.pathname === "/admin/reservations" && style.active
          }`}
        >
          <FaCalendarWeek />
        </Button>
      </Link>

      <Link to={"rooms"}>
        <Button
          className={` ${style.admin_tabLink} ${
            location.pathname === "/admin/rooms" && style.active
          }`}
        >
          <FaHotel />
        </Button>
      </Link>
    </article>
  );
};
export default NavAdmin;
