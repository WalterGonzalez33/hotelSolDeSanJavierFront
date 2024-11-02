import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Index from "./components/pages/Index";
// import Footer from "./components/common/Footer/Footer";
import QuienesSomos from "./components/pages/quienesSomos";
import ReservationForm from "./components/pages/ReservationForm";
import Login from "./components/pages/Login/Login.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import FilterRoomsContain from "./components/FilterRoomsContainer/FilterRoomsContainer.jsx";
import NavbarComponent from "./components/common/Navbar/NavbarComponent.jsx";
import Footer from "./components/common/Footer/Footer";
import Contactos from "./components/pages/Contactos";





function App() {
  return (
    <main>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-nosotros" element={<h1>Quines somos</h1>} />
          <Route path="/admin" element={<h1>Administrador</h1>} />
          <Route path="/galeria" element={<h1>galeria</h1>} />
          <Route path="/contacto" element={<Contactos/>} />
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
        <Footer/>
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
        <Route path="/habitaciones" element={<h1>Habitaciones</h1>} />
        <Route path="/sobre-nosotros" element={<QuienesSomos />} />
        <Route path="/admin" element={<h1>Administrador</h1>} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
        <Route path="*" element={<h1>404 Not found</h1>} />
        <Route path="/reservacion" element={<ReservationForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
