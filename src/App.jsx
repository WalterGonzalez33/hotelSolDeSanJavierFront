import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/common/Navbar/NavbarComponent";
import Index from "./components/pages/Index";
import Login from "./components/Login/Login";
Login

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-nosotros" element={<h1>Quines somos</h1>} />
          <Route path="/admin" element={<h1>Administrador</h1>} />
          <Route path="/galeria" element={<h1>galeria</h1>} />
          <Route path="/contacto" element={<h1>Contacto</h1>} />
          <Route path="*" element={<h1>404 Not found</h1>} />
          <Route path="/login" element={<h1>Log in</h1>} />
        </Routes>
        <Login>
          
        </Login>
      </BrowserRouter>
    </>
  );
}

export default App;
