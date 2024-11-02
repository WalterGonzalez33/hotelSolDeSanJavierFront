import { Container } from "react-bootstrap";
import style from "./Admin.module.css";
import NavAdmin from "../../adminComponents/NavAdmin/NavAdmin";

const Admin = () => {
  return (
    <Container>
      <section className={` ${style.admin_container} `}>
        <NavAdmin />
      </section>
    </Container>
  );
};
export default Admin;
