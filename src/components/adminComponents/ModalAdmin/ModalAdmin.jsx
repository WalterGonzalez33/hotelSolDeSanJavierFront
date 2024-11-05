import Modal from "react-bootstrap/Modal";
import { useEffect, useRef } from "react";
import style from "./ModalAdmin.module.css";
import FormUser from "../FormUser/FormUser";

function ModalAdmin({ show, handleClose, title, form }) {
  const triggerRef = useRef(null);
  const modalTitleRef = useRef(null);

  useEffect(() => {
    if (show) {
      triggerRef.current = document.activeElement;
      modalTitleRef.current?.focus();

      document.querySelector("#main-content").setAttribute("inert", "");
    } else if (triggerRef.current) {
      triggerRef.current.focus();
      document.querySelector("#main-content").removeAttribute("inert");
    }
  }, [show]);

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
        <Modal.Title ref={modalTitleRef} tabIndex="-1">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${style.modal} ${style.modal_body}`}>
        {form === "user" && <FormUser handleClose={handleClose}/>}
      </Modal.Body>
    </Modal>
  );
}

export default ModalAdmin;
