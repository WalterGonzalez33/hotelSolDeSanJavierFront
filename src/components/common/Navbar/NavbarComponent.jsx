import Container from "react-bootstrap/Container";
import style from "./NavbarComponent.module.css";
import BtnReservation from "../../BtnReservation/BtnReservation";
import logo from "../../../assets/logo.png";
import { useEffect, useState, useRef } from "react";
import BtnLogin from "../../BtnLogin/BtnLogin";
import NavLink from "../NavLink/NavLink";

const NavbarComponent = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [widthWindowState, setWidthWindowState] = useState(window.innerWidth);
  const [currentLink, setCurrentLink] = useState(
    sessionStorage.getItem("currentLink") || "inicio"
  );
  const navbarRef = useRef(null);

  const routesList = [
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
    {
      pathToLink: "/admin",
      routeName: "Administrador",
    },
  ];

  const handleResizeWindow = () => {
    let newWidth = window.innerWidth;
    setWidthWindowState(newWidth);
  };
  const handleLink = (currentLinkParam) => {
    sessionStorage.setItem("currentLink", currentLinkParam);
    setCurrentLink(sessionStorage.getItem("currentLink"));
    setMenuIsActive(!menuIsActive);
  };
  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive);
  };

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
            <a className="navbar-brand" href="">
              <img src={logo} alt="" className="img-fluid" />
            </a>
          </div>

          {widthWindowState < 992 && <BtnReservation />}

          <div
            className={` ${style.collapse_navbar} ${
              menuIsActive ? style.navbar_collapse_active : ""
            } `}
          >
            <ul className="navbar-nav text-center">
              {routesList.map((route, index) => {
                return (
                  <NavLink
                    key={index}
                    handleLink={handleLink}
                    pathToLink={route.pathToLink}
                    routeName={route.routeName}
                    currentLink={currentLink}
                  />
                );
              })}

              <BtnLogin />
            </ul>
          </div>
          {widthWindowState >= 992 && <BtnReservation />}
        </Container>
      </nav>
    </header>
  );
};
export default NavbarComponent;
