import { Button, Spinner, Table } from "react-bootstrap";
import useFetch from "../../../hooks/useFetch.jsx";
import style from "./UserContainer.module.css";
import RowUser from "../RowUser/RowUser.jsx";
import { FaCog } from "react-icons/fa";
import AdminSearch from "../AdminSearch/AdminSearch.jsx";
import { useEffect, useState } from "react";
import ModalAdmin from "../ModalAdmin/ModalAdmin.jsx";
import { BiPlus } from "react-icons/bi";

const HandleLoading = () => {
  return (
    <div className={` ${style.loading_search} `}>
      <Spinner animation="border" variant="success" />
      <h3 className="text-success m-0">Cargando...</h3>
    </div>
  );
};

const UserContainer = () => {
  const { data, loading, error } = useFetch({ endPoint: "users" });
  const [currentData, setCurrentData] = useState(data);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setCurrentData(data);
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
            title={"Crea un usuario"}
            form={"user"}
          />
        </div>
      )}
      {currentData && (
        <div className={` ${style.table_container} `}>
          <Table striped responsive="lg" className={` ${style.table} `}>
            <thead className={` ${style.thead_table} `}>
              <tr className={` ${style.tr_user} `}>
                <th></th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Permisos</th>
                <th>
                  <FaCog />
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((user) => {
                return <RowUser key={user._id} {...user} />;
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};
export default UserContainer;