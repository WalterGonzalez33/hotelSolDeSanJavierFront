import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./NavLink.module.css";
import { useEffect, useState } from "react";

const NavLink = ({ handleLink, pathToLink, routeName }) => {
  const [currentLink, setCurrentLink] = useState(null);
  const [newPath, setNewPath] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setNewPath(pathToLink.substring(1));
  }, [pathToLink]);

  useEffect(() => {
    setCurrentLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {currentLink && (
        <li
          className="nav-item"
          onClick={() => {
            handleLink(routeName);
          }}
        >
          <Link
            to={pathToLink}
            className={`nav-link ${style.navbar_link} ${
              currentLink === pathToLink && style.active
            } ${
              currentLink.includes("admin") &&
              pathToLink.includes("admin") &&
              style.active
            }`}
          >
            {routeName}
          </Link>
        </li>
      )}
    </>
  );
};

NavLink.propTypes = {
  handleLink: PropTypes.func.isRequired,
  pathToLink: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};
export default NavLink;
