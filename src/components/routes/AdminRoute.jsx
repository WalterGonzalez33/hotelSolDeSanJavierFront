import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin/Admin";
import UserContainer from "../adminComponents/UsersContainer/UserContainer";
import ReservationContainer from "../adminComponents/ReservationContainer/ReservationContainer";
import CardAdminRoom from "../adminComponents/CardAdminRoom/CardAdminRoom";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="users" element={<UserContainer />}></Route>
        <Route path="reservations" element={<ReservationContainer />} />
        <Route path="reservations/:user" element={<ReservationContainer />} />
        <Route path="rooms" element={<CardAdminRoom />}>
          <Route path="rooms/:id" element={<CardAdminRoom/>} />
        </Route>
      </Route>
    </Routes>
  );
};
export default AdminRoute;
