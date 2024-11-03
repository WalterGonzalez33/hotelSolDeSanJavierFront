import { Container } from "react-bootstrap";
import style from "./Admin.module.css";
import NavAdmin from "../../adminComponents/NavAdmin/NavAdmin";
import UserContainer from "../../adminComponents/UsersContainer/UserContainer";

const Admin = () => {
  return (
    <Container fluid>
      <section className={` ${style.admin_container} `}>
        <NavAdmin />
        <article className={` ${style.admin_content_container} `}>
          <UserContainer />
        </article>
      </section>
    </Container>
  );
};
export default Admin;
