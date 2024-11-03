import { Table } from "react-bootstrap";
import useFetch from "../../../hooks/useFetch.jsx";
import style from "./UserContainer.module.css";
import RowUser from "../RowUser/RowUser.jsx";
import { FaCog } from "react-icons/fa";

const UserContainer = () => {
  const { data, loading, error } = useFetch({ endPoint: "users" });

  return (
    <div className={` ${style.users_container} `}>
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
          {data &&
            data.map((user) => {
              return <RowUser key={user._id} {...user} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};
export default UserContainer;
