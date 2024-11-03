import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="d-flex justify-content-center vh-80 bg-light rounded-4 mt-1 mb-1">
      <Row>
        <Col md={12} xs={12}>
          <Form
            className=" mb-4 letter-spacing"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h4 className="mt-4  mb-4 mx-5">Registrate</h4>
            <Form.Group
              className="mb-3 mt-4"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control
                className=" rounded-5 border-3 "
                type="text"
                placeholder="Ej: Juan paez"
                {...register("nombreyapellido", {
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
              {errors.nombreyapellido?.message}
            </Form.Text>

            <Form.Group
              className="mb-3  mt-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                className=" rounded-5 border-3 "
                type="password"
                placeholder="Password"
                {...register("contraseña", {
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
                })}
              />

              <Form.Text className="text-danger">
                {errors.contraseña?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
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
                    value: 20,
                    message:
                      "Nombre y apellido debe tener como maximo 20caracteres",
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