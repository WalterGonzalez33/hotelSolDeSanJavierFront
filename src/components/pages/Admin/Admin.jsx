import { Container } from "react-bootstrap";
import style from "./Admin.module.css";
import NavAdmin from "../../adminComponents/NavAdmin/NavAdmin";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Admin = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
