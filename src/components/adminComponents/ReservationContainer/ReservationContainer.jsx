import { Button, Spinner, Table } from "react-bootstrap";
import useFetch from "../../../hooks/useFetch.jsx";
import style from "../UsersContainer/UserContainer.module.css";
import { FaCog } from "react-icons/fa";
import ReservationRow from "../ReservationRow/ReservationRow.jsx";
import AdminSearch from "../AdminSearch/AdminSearch.jsx";
import { useEffect, useState } from "react";
import ModalAdmin from "../ModalAdmin/ModalAdmin.jsx";
import { BiPlus, BiSolidXCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { getItem } from "../../../utils/requests.js";

const HandleLoading = () => {
  return (
    <div className={` ${style.loading_search} `}>
      <Spinner animation="border" variant="success" />
      <h3 className="text-success m-0">Cargando...</h3>
    </div>
  );
};
const HandleNotReservation = () => {
  return (
    <div className="text-center m-auto mt-4 not-reservation-container">
      <span className="fs-1 text-danger">
        <BiSolidXCircle />
      </span>
      <h3 className="m-0">El usuario no tiene reservas!!</h3>
    </div>
  );
};

const ReservationContainer = () => {
  const [reload, setReload] = useState(false);
  const { data, loading } = useFetch({ endPoint: "reservation/list", reload });
  const [currentData, setCurrentData] = useState(data);
  const [currentReservationUser, setCurrentReservationUser] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [dataReservation, setDataReservation] = useState(null);
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const { user } = useParams();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit = () => setEditShow(false);
  const handleShowEdit = () => setEditShow(true);

  useEffect(() => {
    const fillReservationUser = () => {
      if (!data) {
        throw new Error("[ERROR] reservation not find");
      }
      const filterReservationUser = data.filter(
        (reservation) => reservation.user_id === user
      );

      setCurrentReservationUser(filterReservationUser);
    };
    setCurrentData(data);
    if (data && user) {
      fillReservationUser();
    }
  }, [data, user]);

  useEffect(() => {
    const getUser = async () => {
      const response = await getItem(`users/${user}`);
      setCurrentUser(response);
    };
    if (user) {
      getUser();
    }
  }, [user]);
  return (
    <div className={` ${style.users_container} `}>
      {loading && <HandleLoading />}
      {currentData && (
        <div className={` ${style.tabs_admin_container} `}>
          {!user && (
            <AdminSearch
              data={data}
              setData={setCurrentData}
              reservation={true}
            />
          )}
          {currentUser && user && (
            <div className={` ${style.user_data_container} `}>
              <h3 className={` ${style.user_data} `}>{currentUser.username}</h3>
              <h3 className={` ${style.user_data} ${style.user_data_email}`}>
                {currentUser.email}
              </h3>
            </div>
          )}
          <Button
            variant="success"
            className="button-custom"
            onClick={handleShow}
          >
            Crear <BiPlus />
          </Button>

          {user ? (
            <ModalAdmin
              show={show}
              handleClose={handleClose}
              title={"Crea una reserva"}
              form={"reservation"}
              setReload={setReload}
              reload={reload}
              userValue={currentUser}
            />
          ) : (
            <ModalAdmin
              show={show}
              handleClose={handleClose}
              title={"Crea una reserva"}
              form={"reservation"}
              setReload={setReload}
              reload={reload}
            />
          )}

          <ModalAdmin
            show={editShow}
            handleClose={handleCloseEdit}
            title={"Edita la reserva"}
            form={"reservationEdit"}
            dataReservation={dataReservation}
            setReload={setReload}
            reload={reload}
          />
        </div>
      )}
      {currentData && (
        <div className={` ${style.table_container} `}>
          <Table striped responsive="lg" className={` ${style.table} `}>
            <thead className={` ${style.thead_table} `}>
              <tr className={` ${style.tr_user} `}>
                <th></th>
                <th>Email</th>
                <th>Habitación</th>
                <th>Ingreso</th>
                <th>Salida</th>
                <th>Personas</th>
                <th>
                  <FaCog />
                </th>
              </tr>
            </thead>
            <tbody>
              {user &&
                currentReservationUser.length > 0 &&
                currentReservationUser.map((reservation) => {
                  return (
                    <ReservationRow
                      key={reservation._id}
                      {...reservation}
                      setDataReservation={setDataReservation}
                      handleShowEdit={handleShowEdit}
                    />
                  );
                })}
              {user && currentReservationUser.length === 0 && (
                <HandleNotReservation />
              )}
              {!user &&
                currentData.map((reservation) => {
                  return (
                    <ReservationRow
                      key={reservation._id}
                      {...reservation}
                      setDataReservation={setDataReservation}
                      handleShowEdit={handleShowEdit}
                    />
                  );
                })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};
export default ReservationContainer;
