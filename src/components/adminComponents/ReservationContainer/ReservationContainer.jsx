import { Button, Spinner, Table } from "react-bootstrap";
import useFetch from "../../../hooks/useFetch.jsx";
import style from "../UsersContainer/UserContainer.module.css";
import { FaCog } from "react-icons/fa";
import ReservationRow from "../ReservationRow/ReservationRow.jsx";
import AdminSearch from "../AdminSearch/AdminSearch.jsx";
import { useEffect, useState } from "react";
import ModalAdmin from "../ModalAdmin/ModalAdmin.jsx";
import { BiPlus } from "react-icons/bi";
import { useParams } from "react-router-dom";

const HandleLoading = () => {
  return (
    <div className={` ${style.loading_search} `}>
      <Spinner animation="border" variant="success" />
      <h3 className="text-success m-0">Cargando...</h3>
    </div>
  );
};

const ReservationContainer = () => {
  const { data, loading } = useFetch({ endPoint: "reservation/list" });
  const [currentData, setCurrentData] = useState(data);
  const [currentReservationUser, setCurrentReservationUser] = useState(null);
  const [show, setShow] = useState(false);

  const { user } = useParams();
  console.log(useParams());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fillReservationUser = () => {
    if (!data) {
      throw new Error("[ERROR] reservation not find");
    }
    const filterReservationUser = data.filter(
      (reservation) => reservation.user_id === user
    );
    setCurrentReservationUser(filterReservationUser);
  };
  useEffect(() => {
    setCurrentData(data);
    if (data && user) {
      fillReservationUser();
    }
  }, [data]);
  return (
    <div className={` ${style.users_container} `}>
      {loading && <HandleLoading />}
      {currentData && (
        <div className={` ${style.tabs_admin_container} `}>
          <AdminSearch data={data} setData={setCurrentData} />
          <Button
            variant="success"
            className="button-custom"
            onClick={handleShow}
          >
            Crear <BiPlus />
          </Button>

          <ModalAdmin
            show={show}
            handleClose={handleClose}
            title={"Crea una reserva"}
            form={"reservation"}
          />
        </div>
      )}
      {currentData && (
        <Table striped responsive="lg" className={` ${style.table} `}>
          <thead className={` ${style.thead_table} `}>
            <tr className={` ${style.tr_user} `}>
              <th></th>
              <th>Email</th>
              <th>Habitación</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Personas</th>
              <th>
                <FaCog />
              </th>
            </tr>
          </thead>
          <tbody>
            {user &&
              currentReservationUser.map((reservation) => {
                return (
                  <ReservationRow key={reservation._id} {...reservation} />
                );
              })}
            {!user &&
              currentData.map((reservation) => {
                return (
                  <ReservationRow key={reservation._id} {...reservation} />
                );
              })}
          </tbody>
        </Table>
      )}
    </div>
  );
};
export default ReservationContainer;
