import { useForm } from "react-hook-form";
import { BsFacebook, BsEnvelopeFill } from "react-icons/bs";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Login.css";
import { showCustomAlert } from "../../../utils/customAlert";
import { login } from "../../../utils/requests";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    try {
      const respuesta = await login(usuario);
      if (respuesta.status === 200) {
        showCustomAlert({
          alertTitle: "Listo!",
          alertText: "Has iniciado sesión correctamente.",
          icon: "success",
          confirmText: "Aceptar",
        });
        const datos = await respuesta.json();
        sessionStorage.setItem(
          "userToken",
          JSON.stringify({ id: datos.id, token: datos.token })
        );
        setUsuarioLogueado(datos);
        navegacion("/");
      } else {
        showCustomAlert({
          alertTitle: "Error",
          alertText: "No se pudo iniciar sesión. Verifica tus credenciales.",
          icon: "warning",
          confirmText: "Aceptar",
        });
      }
    } catch (error) {
      if (error) {
        Swal.fire(
          "Ocurrió un error",
          "Ocurrió un error,inténtalo en unos minutos",
          "error"
        );
      }
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center vh-100 rounded-4"
      style={{ maxWidth: "500px", maxHeight: "640px", margin: "auto" }}
    >
      <Row className="login-container mt-4">
        <Col md={12}>
          <div className="text-center mb-4">
            <img src={logo} alt="Logo" className="img-fluid" />
          </div>
          <h2 className="text-center mb-4 letter-spacing">Iniciar Sesión</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="fs-5">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                {...register("email", {
                  required: "El email es requerido.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "El email no tiene un formato válido.",
                  },
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email && errors.email.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label className="fs-5">Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                {...register("password", {
                  required: "La contraseña es requerida.",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres.",
                  },
                })}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password && errors.password.message}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-center gap-3 mt-4 ">
              <Button
                className="buttonLogin rounded-5 btn-success"
                type="submit"
              >
                Iniciar Sesión
              </Button>
              <Link to="/registro">
                <Button className=" buttonLogin rounded-5" type="button">
                  Registrarse
                </Button>
              </Link>
            </div>
          </Form>

          <div className="text-center my-4">
            <Link to="/">
              <Button className="rounded-5 btn-dark">Volver al inicio</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
