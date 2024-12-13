import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import style from "../FormUser/FormUser.module.css";
import { validationDate } from "../../../utils/validateDate";
import { showCustomAlert } from "../../../utils/customAlert";
import { editItem, getItem } from "../../../utils/requests";

const apiUrl = import.meta.env.VITE_API_URL;

const FormReservationEdit = ({
  handleClose,
  reload,
  setReload,
  dataReservation,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingRooms, setLoadingRooms] = useState(false);
  const [currentUserData, setCurrentUserData] = useState({});
  const [error, setError] = useState(null);

  const checkIn = watch("check_in");
  const checkOut = watch("check_out");

  useEffect(() => {
    const getCurrentUser = async () => {
      const getUser = await getItem(`users/${dataReservation.user_id}`);
      setCurrentUserData(getUser);
    };
    getCurrentUser();
  }, [dataReservation]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = `users`;
        const getUsers = await getItem(url);
        setUsers(getUsers);
      } catch (err) {
        setError(`Error al obtener los usuarios: ${err.message}`);
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (checkIn && checkOut) {
      const fetchRooms = async () => {
        try {
          setLoadingRooms(true);
          const url = `rooms/${checkIn}/${checkOut}`;
          const getRooms = await getItem(url);
          setRooms(getRooms);
        } catch (err) {
          console.error(err);
        } finally {
          setLoadingRooms(false);
        }
      };

      fetchRooms();
    }
  }, [checkIn, checkOut]);

  useEffect(() => {
    const getCurrentRoom = async () => {
      const currentRoom = await getItem(`rooms/${dataReservation.room_id}`);
      setRooms([...rooms, currentRoom[0]]);
    };
    getCurrentRoom();
  }, [dataReservation]);

  const editReservation = async (data) => {
    try {
      const responseEditReservation = await editItem(
        data,
        `reservation/${dataReservation._id}`
      );
      const dataEditResponse = await responseEditReservation.json();
      if (responseEditReservation.status === 400) {
        return showCustomAlert({
          alertTitle: "Cuidado!",
          alertText: `${
            dataEditResponse.message
              ? dataEditResponse.message
              : dataEditResponse.mensaje
          }`,
          icon: "warning",
        });
      }
      showCustomAlert({
        alertTitle: "Éxito",
        alertText: "La reserva fue editada correctamente",
        confirmText: "CONFIRMAR",
      });
      reset();
      setReload(!reload);
      handleClose();
    } catch (err) {
      console.error("Error al crear la reserva:", err);
    }
  };

  const onSubmit = async (data) => {
    const validateResult = validationDate(data.check_in, data.check_out, false);
    const reservationData = {
      user_id: data.username,
      room_id: data.room,
      check_in: data.check_in,
      check_out: data.check_out,
      persons: data.persons,
    };
    if (validateResult.valid) {
      showCustomAlert({
        alertTitle: "Quieres editar la reserva?",
        alertText: "",
        icon: "warning",
        showCancel: true,
        continueConfirm: true,
        callback: () => editReservation(reservationData),
      });
    } else {
      console.error(validateResult.msj);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={`p-4 ${style.form}`}>
      <Form.Group className="mb-3" controlId="formUserNameEdit">
        <Form.Label>usuario</Form.Label>
        {loadingUsers ? (
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
            {currentUserData ? (
              <option value={currentUserData._id}>
                {currentUserData.username}
              </option>
            ) : users.length > 0 ? (
              <>
                <option value="">Seleccione un usuario</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.username}
                  </option>
                ))}
              </>
            ) : (
              <option value="" disabled>
                No hay usuarios disponibles
              </option>
            )}
          </Form.Select>
        )}
        <Form.Control.Feedback type="invalid">
          {errors.username?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCheckInEdit">
        <Form.Label>Check-in</Form.Label>
        <Form.Control
          className={`d-inline-flex focus-ring focus-ring-success ${style.input}`}
          type="date"
          defaultValue={dataReservation.check_in}
          {...register("check_in", {
            required: "La fecha de Check-in es un campo requerido",
          })}
          isInvalid={!!errors.check_in}
        />
        <Form.Control.Feedback type="invalid">
          {errors.check_in?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCheckOutEdit">
        <Form.Label>Check-out</Form.Label>
        <Form.Control
          className={`d-inline-flex focus-ring focus-ring-success ${style.input}`}
          type="date"
          defaultValue={dataReservation.check_out}
          {...register("check_out", {
            required: "La fecha de Check-out es un campo requerido",
          })}
          isInvalid={!!errors.check_out}
        />
        <Form.Control.Feedback type="invalid">
          {errors.check_out?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRoomEdit">
        <Form.Label>Seleccionar habitación</Form.Label>
        {loadingRooms ? (
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
                <option key={room._id} value={room._id}>
                  {room.room_name}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No hay habitaciones disponibles
              </option>
            )}
          </Form.Select>
        )}
        <Form.Control.Feedback type="invalid">
          {errors.room?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPersonsEdit">
        <Form.Label>Cantidad de personas</Form.Label>
        <Form.Select
          className={`d-inline-flex focus-ring focus-ring-success ${style.input} ${style.select}`}
          defaultValue={dataReservation.persons}
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

export default FormReservationEdit;
