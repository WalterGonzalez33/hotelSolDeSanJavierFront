import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./components/pages/Index";
import Footer from "./components/common/Footer/Footer";
import QuienesSomos from "./components/pages/quienesSomos";
import ReservationForm from "./components/pages/ReservationForm";
import Login from "./components/pages/Login/Login.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import FilterRoomsContain from "./components/FilterRoomsContainer/FilterRoomsContainer.jsx";
import NavbarComponent from "./components/common/Navbar/NavbarComponent.jsx";
import Admin from "./components/pages/Admin/Admin.jsx";
import RoomsContainer from "./components/pages/Rooms.jsx";
import Contactos from "./components/pages/Contactos.jsx";
import Registro from "./components/pages/Registro.jsx";

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

  return (
    <>
      {location.pathname !== "/login" && <NavbarComponent />}

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
        <Route path="/reservar" element={<ReservationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="users" component={<h1>users</h1>}>
            <Route path="edit/:id" component={<h1>edit user</h1>} />
          </Route>

          <Route path="reservations" component={<h1>reservas</h1>}>
            <Route path="edit/:id" component={<h1>edit reserva</h1>} />
          </Route>
          <Route path="rooms" component={<h1>users</h1>}>
            ~
            <Route path="edit/:id" component={<h1>edit habitaciones</h1>} />
          </Route>
        </Route>
        <Route path="/registro" element={<Registro />} />
      </Routes>
      {location.pathname !== "/login" && <Footer />}
    </>
  );
};

export default App;
