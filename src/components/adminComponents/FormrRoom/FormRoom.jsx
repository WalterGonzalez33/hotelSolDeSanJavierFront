import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import style from "./FormRoom.module.css";
import { create } from "../../../utils/requests";
import { showCustomAlert } from "../../../utils/customAlert";

const FormRoom = ({
  handleClose,
  setReload,
  reload,
  edit = true,
  dataRoom,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createRoom = async (data) => {
    const request = await create(data, "rooms");
    if (request.status === 201) {
      showCustomAlert({
        alertTitle: "Éxito",
        alertText: "La habitación fue creada correctamente",
        confirmText: "CONFIRMAR",
      });
      handleClose();
      setReload(!reload);
    }
    if (request === 400) {
      const res = await request.json();
      showCustomAlert({
        alertTitle: "Cuidado!",
        alertText: `${res.message ? res.message : res.message}`,
        icon: "warning",
      });
    }
  };

  const onSubmit = async (data) => {
    const benefitsArray = [];
    if (data.tv) benefitsArray.push("TV");
    if (data.wifi) benefitsArray.push("WIFI");
    if (data.bathroom) benefitsArray.push("Baño privado");
    if (data.phone) benefitsArray.push("Teléfono");

    const roomData = {
      ...data,
      benefits: benefitsArray,
    };
    createRoom(roomData);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={`p-4 ${style.form}`}>
      <Form.Group className="mb-3" controlId="formRoomName">
        <Form.Label>Nombre de la habitación</Form.Label>
        <Form.Select
          className={` d-inline-flex focus-ring focus-ring-success ${style.input}`}
          {...register("room_name", {
            required: "El nombre de la habitación es obligatorio",
            validate: {
              enum: (value) =>
                [
                  "Dobles Superiores",
                  "Departamentos",
                  "Doble de Lujo",
                  "Suites Superiores",
                  "Suite Junior",
                  "Habitaciones Dobles Deluxe",
                ].includes(value) || "Nombre no válido.",
            },
          })}
          isInvalid={!!errors.room_name}
        >
          <option value="">Seleccione una habitación...</option>
          <option value="Dobles Superiores">Dobles Superiores</option>
          <option value="Departamentos">Departamentos</option>
          <option value="Doble de Lujo">Doble de Lujo</option>
          <option value="Suites Superiores">Suites Superiores</option>
          <option value="Suite Junior">Suite Junior</option>
          <option value="Habitaciones Dobles Deluxe">
            Habitaciones Dobles Deluxe
          </option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.room_name?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          className={` d-inline-flex focus-ring focus-ring-success ${style.input}`}
          type="number"
          {...register("price", {
            required: "El precio es obligatorio",
            minLength: { value: 3, message: "El precio mínimo es 500" },
            maxLength: { value: 7, message: "El precio máximo es 1000000" },
          })}
          isInvalid={!!errors.price}
        />
        <Form.Control.Feedback type="invalid">
          {errors.price?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNumberRooms">
        <Form.Label>Número de habitaciones</Form.Label>
        <Form.Control
          className={` d-inline-flex focus-ring focus-ring-success ${style.input}`}
          type="number"
          {...register("number_rooms", {
            required: "El número de habitaciones es obligatorio",
            validate: (value) =>
              (value >= 1 && value <= 20) ||
              "Debes ingresar un número entre 1 y 20.",
          })}
          isInvalid={!!errors.number_rooms}
        />
        <Form.Control.Feedback type="invalid">
          {errors.number_rooms?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>URL de la imagen</Form.Label>
        <Form.Control
          className={` d-inline-flex focus-ring focus-ring-success ${style.input}`}
          type="text"
          {...register("image", {
            required: "La URL de la imagen es obligatoria",
            validate: {
              url: (value) =>
                /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(
                  value
                ) || "Debe ser una URL válida de imagen.",
            },
          })}
          isInvalid={!!errors.image}
        />
        <Form.Control.Feedback type="invalid">
          {errors.image?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBriefDescription">
        <Form.Label>Descripción breve</Form.Label>
        <Form.Control
          className={` d-inline-flex focus-ring focus-ring-success ${style.input}`}
          as="textarea"
          rows={3}
          {...register("brief_description", {
            required: "La descripción breve es obligatoria",
            minLength: { value: 2, message: "Mínimo 2 caracteres." },
            maxLength: { value: 100, message: "Máximo 100 caracteres." },
          })}
          isInvalid={!!errors.brief_description}
        />
        <Form.Control.Feedback type="invalid">
          {errors.brief_description?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBroadDescription">
        <Form.Label>Descripción amplia</Form.Label>
        <Form.Control
          className={` d-inline-flex focus-ring focus-ring-success ${style.input}`}
          as="textarea"
          rows={4}
          {...register("broad_description", {
            required: "La descripción amplia es obligatoria",
            minLength: { value: 50, message: "Mínimo 50 caracteres." },
            maxLength: { value: 1000, message: "Máximo 1000 caracteres." },
          })}
          isInvalid={!!errors.broad_description}
        />
        <Form.Control.Feedback type="invalid">
          {errors.broad_description?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tiene TV?</Form.Label>
        <Form.Check type="checkbox" label="Sí" {...register("tv")} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tiene Wifi?</Form.Label>
        <Form.Check type="checkbox" label="Sí" {...register("wifi")} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tiene Baño privado?</Form.Label>
        <Form.Check type="checkbox" label="Sí" {...register("bathroom")} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tiene teléfono?</Form.Label>
        <Form.Check type="checkbox" label="Sí" {...register("phone")} />
      </Form.Group>

      <Button variant="success" type="submit">
        {dataRoom && edit ? "Editar" : "Crear"}
      </Button>
    </Form>
  );
};

export default FormRoom;
