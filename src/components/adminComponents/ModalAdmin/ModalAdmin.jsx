import Modal from "react-bootstrap/Modal";
import style from "./ModalAdmin.module.css";
import FormUser from "../FormUser/FormUser";
import FormReservation from "../FormReservation/FormReservation";

function ModalAdmin({ show, handleClose, title, form }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={` ${style.modal_container} `}
      >
        <Modal.Header
          closeButton
          className={`${style.modal} ${style.modal_header} `}
        >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${style.modal} ${style.modal_body} `}>
          {form === "user" && <FormUser />}
          {form === "reservation" && <FormReservation />}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAdmin;
