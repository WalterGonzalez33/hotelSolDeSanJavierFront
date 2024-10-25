import style from "./BtnLogin.module.css";
import { Link } from 'react-router-dom';
const BtnLogin = () => {
  return (
    <Link to="/src/components/Login/Login.jsx">
      <button className={`mt-2 ms-lg-3 mt-lg-0 ${style.btn_login} `}>
        Log in
      </button>
      </Link>
  );
};
export default BtnLogin;