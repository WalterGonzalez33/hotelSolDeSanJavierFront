import { useForm } from "react-hook-form";
import "../../styles/global.css";
import { Button, Col, Form, Row } from "react-bootstrap";

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const reservaRealizada = (data) => {
    console.log(data);
  };

  return (
    <section className="container my-4">
      <h1>Solicitud de reserva</h1>
      <p>
        Complete el formulario para realizar una reserva.<br></br> Luego de enviar la
        solicitud de reserva sera contactado por personal del Departamento de
        Reservas del Hotel Sol San Javier. Por favor envie la mayor cantidad de
        informacion posible a fin que podamos cotizarle adecuadamente.
      </p>
      <Form
        className="my-4 form-container"
        onSubmit={handleSubmit(reservaRealizada)}
      >
        <Form.Group>
          <h3>Datos personales</h3>
          <hr />
          <Row>
            <Col md={6} xs={12}>
              <Form.Label className="mt-2">Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Juan Perez"
                {...register("nombreReserva", {
                  required: "El nombre y apellido es un campo obligatorio",
                  minLength: {
                    value: 5,
                    message: "Debe tener al menos 5 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-z]+ [A-Za-z]+$/,
                    message:
                      "Debe incluir nombre y apellido separados por un espacio",
                  },
                })}
              />
              <Form.Label className="mt-2">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: hotelsanjavier@mail.com"
                {...register("email", {
                  required: "El email es un campo obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Ingrese un correo válido",
                  },
                })}
              />
              <Form.Label className="mt-2">Teléfono</Form.Label>
              <Form.Control
                type="tel"
                {...register("telefono", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Ingrese un telefóno válido",
                  },
                })}
              />
            </Col>
            <Col md={6} xs={12}>
              <Form.Label className="mt-2">País</Form.Label>
              <Form.Control></Form.Control>
              <Form.Label className="mt-2">
                Provincia / Estado / Región
              </Form.Label>
              <Form.Control></Form.Control>
              <Form.Label className="mt-2">Empresa</Form.Label>
              <Form.Control></Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <h3 className="my-3">Datos de la estadía</h3>
          <hr />
          <Row>
            <Col md={6} xs={12}>
              <Form.Label className="mt-2">Check-In</Form.Label>
              <Form.Control
                type="date"
                {...register("checkIn", {
                  required: "La fecha de Check-In es obligatoria",
                })}
              />
              <Form.Text className="text-danger">
                {errors.checkIn?.message}
              </Form.Text>
              <Form.Label className="mt-2">Check-Out</Form.Label>
              <Form.Control
                type="date"
                {...register("checkOut", {
                  required: "La fecha de Check-Out es obligatoria",
                  validate: (value) => {
                    if (value < register("checkIn").value) {
                      return "La fecha de Check-Out debe ser posterior a la de Check-In";
                    }
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.checkOut?.message}
              </Form.Text>
              <Form.Label className="mt-2">Comentarios</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Col>
            <Col md={6} xs={12}>
              <Form.Label className="mt-2">Cantidad de personas</Form.Label>
              <Form.Select
                {...register("personas", {
                  required: "La cantidad de personas es obligatoria",
                })}
              >
                <option>Seleccione...</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i + 1 === 1 ? "persona" : "personas"}
                  </option>
                ))}
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.personas?.message}
              </Form.Text>
              <Form.Label className="mt-2">Tipo de habitación</Form.Label>
              <Form.Select>
                <option>Seleccione...</option>
                <option>Dobles superiores</option>
                <option>Departamentos</option>
                <option>Dobles de lujo</option>
                <option>Suite superior</option>
              </Form.Select>
              <Form.Label>Hora estimada de llegada</Form.Label>
              <Form.Control type="time" />
            </Col>
          </Row>
        </Form.Group>
        <Button type="submit" className="my-2" variant="success">
          Reservar
        </Button>
      </Form>
    </section>
  );
};

export default ReservationForm;
