import Modal from "react-bootstrap/Modal";
import style from "./ModalAdmin.module.css";

function ModalAdmin({ show, handleClose }) {
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
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${style.modal} ${style.modal_body} `}>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAdmin;
