import style from "./BtnLogin.module.css";
import { Link } from 'react-router-dom';

const BtnLogin = ({ setUsuarioLogueado, usuarioLogueado }) => {
  const handleAuth = () => {
    setUsuarioLogueado(!usuarioLogueado);
  };

  return (
    <Link to={usuarioLogueado ? "/" : "/login"}>
      <button
        className={`mt-2 ms-lg-3 mt-lg-0 ${style.btn_login}`}
        onClick={handleAuth}
      >
        {usuarioLogueado ? "Log out" : "Log in"}
      </button>
    </Link>
  );
};
export default BtnLogin;