import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin/Admin";
import UserContainer from "../adminComponents/UsersContainer/UserContainer";
import ReservationContainer from "../adminComponents/ReservationContainer/ReservationContainer";
import CardAdminRoom from "../adminComponents/CardAdminRoom/CardAdminRoom";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="users" element={<UserContainer />}>
          <Route path="edit/:id" element={<h1>edit user</h1>} />
        </Route>
        <Route path="reservations" element={<ReservationContainer/>}>
          <Route path="edit/:id" element={<h1>edit reserva</h1>} />
        </Route>
        <Route path="rooms" element={<CardAdminRoom/>}>
          <Route path="edit/:id" element={<h1>edit habitaciones</h1>} />
        </Route>
      </Route>
    </Routes>
  );
};
export default AdminRoute;
