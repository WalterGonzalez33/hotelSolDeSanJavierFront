import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import style from "../FormUser/FormUser.module.css";
import { validationDate } from "../../../utils/validateDate";

const apiUrl = import.meta.env.VITE_API_URL;

const FormReservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = `${apiUrl}/users`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los usuarios");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(`Error al obtener los usuarios: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    const fetchRooms = async () => {
      try {
        const url = `${apiUrl}/rooms`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener las habitaciones");
        }
        const data = await response.json();
        setRooms(data);
      } catch (err) {
        setError(`Error al obtener las habitaciones: ${err.message}`);
      }
    };

    fetchUsers();
    fetchRooms();
  }, []);

  const onSubmit = (data) => {
    const validateresult = validationDate(data.check_in, data.check_out);
    if (validateresult.valid) {
      console.log("Las fechas son correctas");
    } else {
      console.log(validateresult.msj);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={`p-4 ${style.form}`}>
      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>Seleccionar usuario</Form.Label>
        {loading ? (
          <Form.Text>Cargando usuarios...</Form.Text>
        ) : error ? (
          <Form.Text className="text-danger">{error}</Form.Text>
        ) : (
          <Form.Select
            className={`d-inline-flex focus-ring focus-ring-success ${style.input}`}
            {...register("username", {
              required: "El nombre de usuario es un campo requerido",
            })}
            isInvalid={!!errors.username}
          >
            <option value="">Seleccione un usuario</option>
            {users.length > 0 ? (
              users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))
            ) : (
              <option value="" disabled>No hay usuarios disponibles</option>
            )}
          </Form.Select>
        )}
        <Form.Control.Feedback type="invalid">
          {errors.username?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCheckIn">
        <Form.Label>Check-in</Form.Label>
        <Form.Control
          className={`d-inline-flex focus-ring focus-ring-success ${style.input}`}
          type="date"
          {...register("check_in", {
            required: "La fecha de Check-in es un campo requerido",
          })}
          isInvalid={!!errors.check_in}
        />
        <Form.Control.Feedback type="invalid">
          {errors.check_in?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCheckOut">
        <Form.Label>Check-out</Form.Label>
        <Form.Control
          className={`d-inline-flex focus-ring focus-ring-success ${style.input}`}
          type="date"
          {...register("check_out", {
            required: "La fecha de Check-out es un campo requerido",
          })}
          isInvalid={!!errors.check_out}
        />
        <Form.Control.Feedback type="invalid">
          {errors.check_out?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRoom">
        <Form.Label>Seleccionar habitación</Form.Label>
        {loading ? (
          <Form.Text>Cargando habitaciones...</Form.Text>
        ) : error ? (
          <Form.Text className="text-danger">{error}</Form.Text>
        ) : (
          <Form.Select
            className={`d-inline-flex focus-ring focus-ring-success ${style.input}`}
            {...register("room", {
              required: "Seleccionar una habitación es un campo requerido",
            })}
            isInvalid={!!errors.room}
          >
            <option value="">Seleccione una habitación</option>
            {rooms.length > 0 ? (
              rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.room_name}
                </option>
              ))
            ) : (
              <option value="" disabled>No hay habitaciones disponibles</option>
            )}
          </Form.Select>
        )}
        <Form.Control.Feedback type="invalid">
          {errors.room?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPersons">
        <Form.Label>Cantidad de personas</Form.Label>
        <Form.Select
          className={`d-inline-flex focus-ring focus-ring-success ${style.input} ${style.select}`}
          {...register("persons", {
            required: "La cantidad de personas es un campo requerido",
          })}
          isInvalid={!!errors.persons}
        >
          <option value="1">1 persona</option>
          <option value="2">2 personas</option>
          <option value="3">3 personas</option>
          <option value="4">4 personas</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.persons?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="success" type="submit">
        Crear
      </Button>
    </Form>
  );
};

export default FormReservation;
