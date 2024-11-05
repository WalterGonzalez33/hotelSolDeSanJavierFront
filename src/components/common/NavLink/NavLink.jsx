import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./NavLink.module.css";

const NavLink = ({ handleLink, pathToLink, routeName, currentLink }) => {
  return (
    <>
      <li
        className="nav-item"
        onClick={() => {
          handleLink(routeName);
        }}
      >
        <Link
          to={pathToLink}
          className={`nav-link ${style.navbar_link} ${
            currentLink === routeName && style.active
          }`}
        >
          {routeName}
        </Link>
      </li>
    </>
  );
};

NavLink.propTypes = {
  handleLink: PropTypes.func.isRequired,
  pathToLink: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  currentLink: PropTypes.string.isRequired,
};
export default NavLink;
