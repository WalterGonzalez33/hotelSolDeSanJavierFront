import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./components/pages/Index";
// import Footer from "./components/common/Footer/Footer";
import QuienesSomos from "./components/pages/quienesSomos";
import ReservationForm from "./components/pages/ReservationForm";
import Login from "./components/pages/Login/Login.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import FilterRoomsContain from "./components/FilterRoomsContainer/FilterRoomsContainer.jsx";
import useFetch from "./hooks/useFetch.jsx";
import CardRoom from "./components/common/CardRoom/CardRoom.jsx";
import { Container } from "react-bootstrap";

const RoomsContainer = () => {
  const { data, loading, error } = useFetch({ endPoint: `/rooms` });

  return (
    <Container>
      {data !== null &&
        data.length > 0 &&
        data.map((room) => (
          <CardRoom
            key={room.id}
            room_name={room.room_name}
            price={room.price}
            image={room.image}
            broad_description={room.broad_description}
            benefits={room.benefits}
          />
        ))}
    </Container>
  );
};
import NavbarComponent from "./components/common/Navbar/NavbarComponent.jsx";

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
