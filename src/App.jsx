import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/common/Navbar/NavbarComponent";
import Index from "./components/pages/Index";
import Footer from "./components/common/Footer/Footer";
import QuienesSomos from "./components/pages/quienesSomos";
import ReservationForm from "./components/pages/ReservationForm";





function App() {
  return (
    <main>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/habitaciones" element={<h1>Habitaciones</h1>} />
          <Route path="/sobre-nosotros" element={<QuienesSomos/>} />
          <Route path="/admin" element={<h1>Administrador</h1>} />
          <Route path="/galeria" element={<h1>galeria</h1>} />
          <Route path="/contacto" element={<ReservationForm/>} />
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  );
}

export default App;
