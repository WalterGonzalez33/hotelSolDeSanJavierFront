import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from "./components/common/Navbar/NavbarComponent";
import Index from "./components/pages/Index";
import Footer from "./components/common/Footer/Footer";
import QuienesSomos from "./components/pages/quienesSomos";
import Login from "./components/pages/Login/Login.jsx";
Login;

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
        <Route path="/" element={<Index />} />
        <Route path="/habitaciones" element={<h1>Habitaciones</h1>} />
        <Route path="/sobre-nosotros" element={<QuienesSomos />} />
        <Route path="/admin" element={<h1>Administrador</h1>} />
        <Route path="/galeria" element={<h1>Galería</h1>} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
        <Route path="*" element={<h1>404 Not found</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {location.pathname !== "/login" && <Footer />}
    </>
  );
};

export default App;
