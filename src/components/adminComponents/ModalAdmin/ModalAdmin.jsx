import Modal from "react-bootstrap/Modal";
import style from "./ModalAdmin.module.css";
import FormUser from "../FormUser/FormUser";
import FormUserEdit from "../FormUserEdit/FormUserEdit";
import FormReservation from "../FormReservation/FormReservation";

function ModalAdmin({
  show,
  handleClose,
  title,
  form,
  setReload,
  reload,
  dataUser,
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className={`${style.modal_container}`}
    >
      <Modal.Header
        closeButton
        className={`${style.modal} ${style.modal_header}`}
      >
        <Modal.Title tabIndex="-1">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${style.modal} ${style.modal_body}`}>
        {form === "user" && (
          <FormUser
            handleClose={handleClose}
            setReload={setReload}
            reload={reload}
          />
        )}
        {form === "userEdit" && (
          <FormUserEdit
            handleClose={handleClose}
            setReload={setReload}
            reload={reload}
            dataUser={dataUser}
          />
        )}
        {form === "reservation" && <FormReservation />}
      </Modal.Body>
    </Modal>
  );
}

export default ModalAdmin;
