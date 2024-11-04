import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { create } from "../../utils/requests";

const apiUrl = import.meta.env.VITE_API_URL;
if (!apiUrl) {
  console.warn(
    "Warning: `VITE_API_URL` is not defined in the environment variables."
  );
}

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    create(data);
  };

  return (
    <Container className="d-flex justify-content-center vh-80 bg-light rounded-4 mt-1 mb-1">
      <Row className="register-container">
        <Col md={12} xs={12}>
          <Form
            className=" mb-4 letter-spacing"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h4 className="mt-4  mb-4 mx-5">Registrate</h4>
            <Form.Group
              className="mb-3 mt-4"
              controlId="exampleForm.ControlInputName"
            >
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control
                className=" rounded-5 border-3 "
                type="text"
                placeholder="Ej: Juan paez"
                {...register("username", {
                  required: "El nombre y apellido es obligatorio",
                  minLength: {
                    value: 10,
                    message:
                      "Nombre y apellido debe que tener minimo 10  caracteres",
                  },
                  maxLength: {
                    value: 25,
                    message:
                      "Nombre y apellido debe tener como maximo 25 caracteres",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger">
              {errors.username?.message}
            </Form.Text>

            <Form.Group
              className="mb-3  mt-3"
              controlId="exampleForm.ControlInputPassword"
            >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                className=" rounded-5 border-3 "
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "La contraseña es obligatorio",
                  minLength: {
                    value: 5,
                    message:
                      "La contraseña debe tener un minimo de 5 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "La contraseña debe tener un maximo de 15 caracteres",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                  },
                })}
              />

              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3 "
              controlId="exampleForm.ControlInputEmail"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                className=" rounded-5 border-3 "
                type="email"
                placeholder="Juan@gmail.com"
                {...register("email", {
                  required: "El email es obligatorio",
                  minLength: {
                    value: 10,
                    message: "El mail debe que tener minimo 10  caracteres",
                  },
                  maxLength: {
                    value: 60,
                    message:
                      "Nombre y apellido debe tener como maximo 20caracteres",
                  },
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "Formato de email incorrecto",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Button
              className="text-center rounded-5 border-3  mx-5 "
              variant="success"
              type="submit"
            >
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;
