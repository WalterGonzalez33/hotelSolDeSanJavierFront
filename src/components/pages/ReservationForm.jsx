import { useForm } from "react-hook-form";
import "../../styles/global.css";
import { Form } from "react-bootstrap";

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
    <section className="container">
      <h1>Solicitud de reserva</h1>
      <p>Complete el formulario para realizar una reserva</p>
      <Form className="my-4" onSubmit={handleSubmit(reservaRealizada)}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre y Apellido</Form.Label>
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
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email", {
              required: "El email es un campo obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Ingrese un correo válido",
              },
            })}
          />
          <Form.Label>Teléfono</Form.Label>
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
        </Form.Group>
      </Form>
    </section>
  );
};

export default ReservationForm;
