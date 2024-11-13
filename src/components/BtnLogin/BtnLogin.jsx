import style from "./BtnLogin.module.css";
import { Link } from "react-router-dom";

const BtnLogin = () => {
  const tokenUser = JSON.parse(
    sessionStorage.getItem("usuariosHotel") || "null"
  );
  const handleAuth = () => {
    if (tokenUser) {
      sessionStorage.removeItem("usuariosHotel");
    }
  };

  return (
    <Link to={tokenUser ? "/" : "/login"}>
      <button
        className={`mt-2 ms-lg-3 mt-lg-0 ${style.btn_login}`}
        onClick={handleAuth}
      >
        {tokenUser ? "Salir" : "Iniciar Sesión"}
      </button>
    </Link>
  );
};
export default BtnLogin;
