import { Container } from "react-bootstrap";
import style from "./Admin.module.css";
import NavAdmin from "../../adminComponents/NavAdmin/NavAdmin";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Admin = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const body = document.querySelector("body");
    if (width >= 992) {
      body.style.overflow = "hidden";
    }
    return () => {
      body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <Container fluid id="main-content">
      <section className={` ${style.admin_container} `}>
        <NavAdmin />
        <article className={` ${style.admin_content_container} `}>
          <Outlet />
        </article>
      </section>
    </Container>
  );
};
export default Admin;
