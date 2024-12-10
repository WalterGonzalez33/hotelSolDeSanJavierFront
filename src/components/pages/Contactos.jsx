import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsFillTelephoneFill, BsGeoAltFill } from "react-icons/bs";

const Contactos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 rounded-4 mt-1 mb-1 pb-5">
      <Row>
        <Col md={12} xs={12}>
          <Form
            className=" mb-1 letter-spacing "
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="mt-4 mb-4 mx-5 text-success letter-spacing">
              CONTACTO
            </h1>
            <h6 className="text-center">
              <BsFillTelephoneFill /> (+54 9) (0381) 155-279796
            </h6>
            <h6 className="text-center">
              <BsGeoAltFill /> Ruta 340 - Km 23, San Javier
            </h6>
            <h6 className="text-center">Tucuman, Argentina</h6>
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

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                className=" rounded-5 border-3 "
                type="email"
                placeholder="Ej: Juan@gmail.com"
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

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                className=" rounded-5 border-3 "
                type="email"
                placeholder="Ej: 3813321783"
                {...register("telefono", {
                  required: "El telefono es obligatorio",
                  minLength: {
                    value: 2,
                    message: "El telefono debe tener como minimo 2 numeros",
                  },
                  maxLength: {
                    value: 10,
                    message: "El telefono debe tener como maximo 10 numeros",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.telefono?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese su consulta"
                {...register("consulta", {
                  required: "ingrese su consulta",
                  minLength: {
                    value: 25,
                    message: "La consulta debe tener minimo de 25 caracteres",
                  },
                  maxLength: {
                    value: 300,
                    message: "La consulta debe tener minimo de 300 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.consulta?.message}
              </Form.Text>
            </Form.Group>
            <div className="d-flex justify-content-center text-center rounded-5 border-4 ">
              <Button variant="success" type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactos;
