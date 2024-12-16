import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Index from "./components/pages/Index";
import Footer from "./components/common/Footer/Footer";
import QuienesSomos from "./components/pages/QuienesSomos.jsx";
import ReservationForm from "./components/pages/ReservationForm";
import Login from "./components/pages/Login/Login.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import FilterRoomsContain from "./components/FilterRoomsContainer/FilterRoomsContainer.jsx";
import NavbarComponent from "./components/common/Navbar/NavbarComponent.jsx";
import RoomsContainer from "./components/pages/Rooms/Rooms.jsx";
import Contactos from "./components/pages/Contactos.jsx";
import AdminRoute from "./components/routes/AdminRoute.jsx";
import RouteProtectAdmin from "./components/adminComponents/RouteProtectAdmin/RouteProtectAdmin.jsx";
import { useEffect, useState } from "react";
import { checkValidateToken, getItem, getToken } from "./utils/requests.js";
import Register from "./components/pages/Register/Register.jsx";
import { showCustomAlert } from "./utils/customAlert.js";

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
  const usuario = JSON.parse(sessionStorage.getItem("userToken") || "null");
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  const [rollUser, setRollUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!location.pathname.includes("/filter/")) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const getUserRoll = async () => {
      const userLog = await getItem(`get-roll-user/${usuario.id}`);
      if (userLog) {
        setRollUser(userLog);
      }
    };
    if (usuario) {
      getUserRoll();
    }
  }, [usuario]);

  useEffect(() => {
    const checkCurrentToken = getToken();

    const redirectionLogin = () => {
      sessionStorage.removeItem("userToken");
      navigate("/login");
    };

    const redirectionInvalidToken = async () => {
      const token = await checkValidateToken();

      if (!token) {
        await showCustomAlert({
          alertTitle: "Lo siento",
          alertText: "Tu sesión a expirado, ingrese nuevamente",
          icon: "warning",
          confirmText: "IR",
          continueConfirm: true,
          controlDismissed: true,
          callback: () => redirectionLogin(),
          callbackDismissed: () => redirectionLogin(),
        });
      }
    };

    if (checkCurrentToken) {
      redirectionInvalidToken();
    }
  }, [navigate, usuario]);
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/registro" && (
        <NavbarComponent
          setUsuarioLogueado={setUsuarioLogueado}
          rollUsuario={rollUser}
        />
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
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/reservacion" element={<ReservationForm />} />
        <Route
          path="/login"
          element={
            <Login
              setUsuarioLogueado={setUsuarioLogueado}
              usuarioLogueado={usuarioLogueado}
            />
          }
        />
        <Route path="/registro" element={<Register />} />
        <Route
          path="/admin/*"
          element={
            <RouteProtectAdmin rollUser={rollUser}>
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
