import { Button, Spinner, Table } from "react-bootstrap";
import { FaCog } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import RowRoom from "../RowRoom/RowRoom.jsx";
import useFetch from "../../../hooks/useFetch.jsx";
import ModalAdmin from "../ModalAdmin/ModalAdmin.jsx"
import AdminSearch from "../AdminSearch/AdminSearch.jsx"
import style from "../CardAdminRoom/CardAdminRoom.module.css";

const HandleLoading = () => {
  return (
    <div className={` ${style.loading_search} `}>
      <Spinner animation="border" variant="success" />
      <h3 className="text-success m-0">Cargando...</h3>
    </div>
  );
};

const CardAdminRoom = () => {
  const { data, loading, error } = useFetch({ endPoint: "rooms" });
  const [currentData, setCurrentData] = useState(data);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  return (
    <div className={` ${style.rooms_container} `}>
      {loading && <HandleLoading />}
      {currentData && (
        <div className={` ${style.tabs_admin_container}`}>
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
            title={"Crea una habitación"}
            form={"room"}
          />
        </div>
      )}
      {currentData && (
        <div className={` ${style.table_container} `}>
          <Table striped responsive="lg" className={` ${style.table} `}>
          <thead className={` ${style.thead_table} `}>
            <tr className={` ${style.tr_room} `}>
              <th></th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>
                <FaCog />
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((room) => {
              return <RowRoom key={room._id} {...room} />;
            })}
          </tbody>
        </Table>
        </div>
      )}
    </div>
  );
};

export default CardAdminRoom;
