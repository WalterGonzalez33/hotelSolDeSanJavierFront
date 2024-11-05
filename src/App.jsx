import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./components/pages/Index";
import Footer from "./components/common/Footer/Footer";
import QuienesSomos from "./components/pages/QuienesSomos.jsx";
import ReservationForm from "./components/pages/ReservationForm";
import Login from "./components/pages/Login/Login.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import FilterRoomsContain from "./components/FilterRoomsContainer/FilterRoomsContainer.jsx";
import NavbarComponent from "./components/common/Navbar/NavbarComponent.jsx";
import RoomsContainer from "./components/pages/Rooms.jsx";
import Contactos from "./components/pages/Contactos.jsx";
import Registro from "./components/pages/Registro.jsx";
import AdminRoute from "./components/routes/AdminRoute.jsx";
import RouteProtectAdmin from "./components/adminComponents/routeProtectAdmin/RouteProtectAdmin.jsx";
import { useState } from "react";

function App() {
  return (
    <main>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </main>
  );
}

const AppContent = () => {
  const location = useLocation();
  const usuario = JSON.parse(sessionStorage.getItem("usuariosHotel") || "null");
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/registro" && (
        <NavbarComponent />
      )}

      <Routes>
        <Route path="/" element={<Index />}>
          <Route
            path="filter/:check_in/:check_out"
            element={<FilterRoomsContain />}
          />
        </Route>
        <Route path="/habitaciones" element={<RoomsContainer />} />
        <Route path="/sobre-nosotros" element={<QuienesSomos />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<Contactos />} />
        <Route path="*" element={<h1>404 Not found</h1>} />
        <Route path="/reservacion" element={<ReservationForm />} />
        <Route path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} usuarioLogueado={usuarioLogueado}/>} />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/admin/*"
          element={
            <RouteProtectAdmin>
              <AdminRoute />
            </RouteProtectAdmin>
          }
        />
      </Routes>
      {location.pathname !== "/login" &&
        location.pathname !== "/registro" &&
        !location.pathname.includes("admin") && <Footer />}
    </>
  );
};

export default App;
