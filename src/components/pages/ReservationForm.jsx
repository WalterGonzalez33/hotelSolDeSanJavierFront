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
    <section className="container my-4">
      <h1>Solicitud de reserva</h1>
      <p>Complete el formulario para realizar una reserva</p>
      <Form className="my-4" onSubmit={handleSubmit(reservaRealizada)}>
        <Form.Group className="mb-3">
          <h3>Datos personales</h3>
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
            placeholder="Ej: hotelsanjavier@mail.com"
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
        <Form.Group>
          <h3>Datos de la estadía</h3>
          <Form.Label>Check-In</Form.Label>
          <Form.Control
            type="date"
            {...register("checkIn", {
              required: "La fecha de Check-In es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.checkIn?.message}
          </Form.Text>
          <Form.Label>Check-Out</Form.Label>
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
          <Form.Label>Cantidad de personas</Form.Label>
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
        </Form.Group>
      </Form>
    </section>
  );
};

export default ReservationForm;
