import { Button } from "react-bootstrap";
import errorImage from "../../assets/error404.png";
import { Link } from "react-router-dom";
import Style from "../../styles/global.css";

const Error404 = () => {
  return (
    <div className="d-flex flex-column align-items-center text-center mt-2">
      <img
        src={errorImage}
        alt="Error 404"
        className={`${Style.errorImage} mb-4`}
      />
      <div>
        <Link to="/">
          <Button variant="success">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
