import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin/Admin";
import UserContainer from "../adminComponents/UsersContainer/UserContainer";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="users" element={<UserContainer />}>
          <Route path="edit/:id" element={<h1>edit user</h1>} />
        </Route>
        <Route path="reservations" element={<h1>reservas</h1>}>
          <Route path="edit/:id" element={<h1>edit reserva</h1>} />
        </Route>
        <Route path="rooms" element={<h1>habitaciones</h1>}>
          <Route path="edit/:id" element={<h1>edit habitaciones</h1>} />
        </Route>
      </Route>
    </Routes>
  );
};
export default AdminRoute;
