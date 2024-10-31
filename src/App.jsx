import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/pages/Index";
import QuienesSomos from "./components/pages/quienesSomos";
import Login from "../src/components/pages/Login/Login";





function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/habitaciones" element={<h1>Habitaciones</h1>} />
          <Route path="/sobre-nosotros" element={<QuienesSomos/>} />
          <Route path="/admin" element={<h1>Administrador</h1>} />
          <Route path="/galeria" element={<h1>galeria</h1>} />
          <Route path="/contacto" element={<h1>Contacto</h1>} />
          <Route path="*" element={<h1>404 Not found</h1>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
