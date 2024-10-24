import style from "./BtnLogin.module.css";
const BtnLogin = () => {
  return (
    <>
      <button className={`mt-2 ms-lg-3 mt-lg-0 ${style.btn_login} `}>
        Log in
      </button>
    </>
  );
};
export default BtnLogin;