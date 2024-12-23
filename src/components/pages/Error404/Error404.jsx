import img404 from "../../../assets/error404.svg";
import style from "./Error404.module.css";

const Error404 = () => {
  return (
    <section className={` ${style.error_container} text-center`}>
      <article className={` ${style.img_container} `}>
        <img src={img404} className="img-fluid" alt="imagen error 404" />
      </article>
      <article>
        <span className={` ${style.oops} `}>Oops!</span>
        <h3 className={` ${style.text_error} `}>
          Parece que algo salio mal !!!
        </h3>
        <button
          className={`button-custom ${style.btn} `}
          onClick={() => window.history.back()}
        >
          VOLVER
        </button>
      </article>
    </section>
  );
};
export default Error404;
