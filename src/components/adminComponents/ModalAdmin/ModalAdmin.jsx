import Modal from "react-bootstrap/Modal";
import style from "./ModalAdmin.module.css";
import FormUser from "../FormUser/FormUser";
import FormUserEdit from "../FormUserEdit/FormUserEdit";
import FormReservation from "../FormReservation/FormReservation";
import FormRoom from "../FormrRoom/FormRoom";
import FormReservationEdit from "../FormReservationEdit/FormReservationEdit";

function ModalAdmin({
  show,
  handleClose,
  title,
  form,
  setReload,
  reload,
  dataUser,
  dataReservation,
  userValue,
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
        {form === "reservation" && (
          <FormReservation
            handleClose={handleClose}
            setReload={setReload}
            reload={reload}
            userValue={userValue}
          />
        )}
        {form === "reservationEdit" && (
          <FormReservationEdit
            handleClose={handleClose}
            setReload={setReload}
            reload={reload}
            dataReservation={dataReservation}
          />
        )}
        {form === "room" && <FormRoom />}
      </Modal.Body>
    </Modal>
  );
}

export default ModalAdmin;
