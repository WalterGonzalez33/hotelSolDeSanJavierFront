import Container from "react-bootstrap/Container";
import style from "./NavbarComponent.module.css";
import BtnReservation from "../../BtnReservation/BtnReservation";
import logo from "../../../assets/logo.png";
import { useEffect, useState, useRef } from "react";
import BtnLogin from "../../BtnLogin/BtnLogin";
import NavLink from "../NavLink/NavLink";
import { Link, useLocation } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { getItem } from "../../../utils/requests";

const NavbarComponent = ({ setUsuarioLogueado, usuarioLogueado }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [widthWindowState, setWidthWindowState] = useState(window.innerWidth);
  const [routesList, setRoutesList] = useState([]);
  const navbarRef = useRef(null);
  const userId = JSON.parse(sessionStorage.getItem("userToken"))?.id ?? false;

  const location = useLocation();

  const getUserRoll = async () => {
    if (!userId) {
      return;
    }
    const getUser = await getItem(`get-roll-user/${userId}`);
    return getUser ?? false;
  };

  const handleResizeWindow = () => {
    let newWidth = window.innerWidth;
    setWidthWindowState(newWidth);
  };
  const handleLink = () => {
    setMenuIsActive(!menuIsActive);
  };
  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive);
  };

  useEffect(() => {
    const fillRoutesList = async () => {
      const rollUser = await getUserRoll();
      const listRoutes = [
        {
          pathToLink: "/",
          routeName: "Inicio",
        },
        {
          pathToLink: "/habitaciones",
          routeName: "Habitaciones",
        },
        {
          pathToLink: "/sobre-nosotros",
          routeName: "Sobre nosotros",
        },
        {
          pathToLink: "/contacto",
          routeName: "Contacto",
        },
        {
          pathToLink: "/galeria",
          routeName: "Galería",
        },
        rollUser === "Admin" && {
          pathToLink: "/admin",
          routeName: "Administrador",
        },
      ];

      if (listRoutes[listRoutes.length - 1]) {
        setRoutesList(listRoutes);
        return;
      } else {
        listRoutes.pop();
        setRoutesList(listRoutes);
      }
    };

    fillRoutesList();
  }, [location.pathname]);

  useEffect(() => {
    if (menuIsActive) {
      if (widthWindowState < 992) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuIsActive, widthWindowState]);

  useEffect(() => {
    const toggleNavbar = () => {
      if (menuIsActive) {
        toggleMenu();
      }
      if (window.scrollY === 0) {
        navbarRef.current.classList.remove(`${style.scroll_active}`);
      } else {
        navbarRef.current.classList.add(`${style.scroll_active}`);
      }
    };
    window.addEventListener("scroll", toggleNavbar);

    return () => {
      window.removeEventListener("scroll", toggleNavbar);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [widthWindowState]);
  return (
    <header className={` ${style.header} `}>
      <nav
        ref={navbarRef}
        className={`navbar navbar-expand-lg ${style.navbar} }`}
      >
        <Container fluid>
          {/* botón aburguesa personalizado */}
          <button
            className={` ${style.btn_toggle} ${
              menuIsActive ? style.btn_toggle_active : style.btn_toggle_disabled
            } `}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>

          <div className={` ${style.navbar_brand} `}>
            <a className="navbar-brand" href="/">
              <img src={logo} alt="" className="img-fluid" />
            </a>
          </div>

          {widthWindowState < 992 && <BtnReservation color={"light"} />}

          <div
            className={` ${style.collapse_navbar} ${
              menuIsActive ? style.navbar_collapse_active : ""
            } `}
          >
            <ul className="navbar-nav text-center">
              {routesList.length > 0 &&
                routesList.map((route, index) => {
                  return (
                    <NavLink
                      key={index}
                      handleLink={handleLink}
                      pathToLink={route.pathToLink}
                      routeName={route.routeName}
                    />
                  );
                })}
              <BtnLogin
                setUsuarioLogueado={setUsuarioLogueado}
                usuarioLogueado={usuarioLogueado}
              />
              {!userId && (
                <li className="nav-item">
                  {" "}
                  <Link to="/registro" className={style.register_link}>
                    <BsFillPersonPlusFill />
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {widthWindowState >= 992 && <BtnReservation color={"light"} />}
        </Container>
      </nav>
    </header>
  );
};
export default NavbarComponent;
