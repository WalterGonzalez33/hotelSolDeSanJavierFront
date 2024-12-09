import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import style from "../FormrRoom/FormRoom.module.css";
import { editItem } from "../../../utils/requests";


const FormRoomEdit = ({ handleClose, reload, setReload, dataRoom }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState(null);

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

    try {
      const endpoint = `/rooms/${dataRoom.id}`;
      const response = await editItem(roomData, endpoint);

      if (!response.ok) {
        throw new Error("Error al actualizar la habitación");
      }

      Swal.fire({
        title: "¡Éxito!",
        text: "La habitación ha sido actualizada correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });

      handleClose();
      setReload(!reload);
      reset();
    } catch (err) {
      setError(`Error al actualizar la habitación: ${err.message}`);
      Swal.fire({
        title: "Error",
        text: `Hubo un problema al actualizar la habitación: ${err.message}`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={`p-4 ${style.form}`}>
      <Form.Group className="mb-3" controlId="formRoomEditName">
        <Form.Label>Nombre de la habitación</Form.Label>
        <Form.Select
          className={`d-inline-flex focus-ring focus-ring-success ${style.input}`}
          {...register("room_name", {
            required: "El nombre de la habitación es obligatorio",
          })}
          defaultValue={dataRoom.room_name}
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
      <Form.Group className="mb-3" controlId="formPriceEdit">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          className={`d-inline-flex focus-ring focus-ring-success ${style.input}`}
          type="number"
          {...register("price", {
            required: "El precio es obligatorio",
          })}
          defaultValue={dataRoom.price}
          isInvalid={!!errors.price}
        />
        <Form.Control.Feedback type="invalid">
          {errors.price?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formNumberRoomsEdit">
        <Form.Label>Número de habitaciones</Form.Label>
        <Form.Control
          className={`d-inline-flex focus-ring focus-ring-success ${style.input}`}
          type="number"
          {...register("number_rooms", {
            required: "El número de habitaciones es obligatorio",
          })}
          defaultValue={dataRoom.number_rooms}
          isInvalid={!!errors.number_rooms}
        />
        <Form.Control.Feedback type="invalid">
          {errors.number_rooms?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImageEdit">
        <Form.Label>URL de la imagen</Form.Label>
        <Form.Control
          className={`d-inline-flex focus-ring focus-ring-success ${style.input}`}
          type="text"
          {...register("image", {
            required: "La URL de la imagen es obligatoria",
          })}
          defaultValue={dataRoom.image}
          isInvalid={!!errors.image}
        />
        <Form.Control.Feedback type="invalid">
          {errors.image?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBriefDescriptionEdit">
        <Form.Label>Descripción breve</Form.Label>
        <Form.Control
          className={`d-inline-flex focus-ring focus-ring-success ${style.input}`}
          as="textarea"
          rows={3}
          {...register("brief_description", {
            required: "La descripción breve es obligatoria",
          })}
          defaultValue={dataRoom.brief_description}
          isInvalid={!!errors.brief_description}
        />
        <Form.Control.Feedback type="invalid">
          {errors.brief_description?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBroadDescriptionEdit">
        <Form.Label>Descripción amplia</Form.Label>
        <Form.Control
          className={`d-inline-flex focus-ring focus-ring-success ${style.input}`}
          as="textarea"
          rows={4}
          {...register("broad_description", {
            required: "La descripción amplia es obligatoria",
          })}
          defaultValue={dataRoom.broad_description}
          isInvalid={!!errors.broad_description}
        />
        <Form.Control.Feedback type="invalid">
          {errors.broad_description?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tiene TV?</Form.Label>
        <Form.Check
          type="checkbox"
          label="Sí"
          {...register("tv")}
          defaultChecked={dataRoom.benefits?.includes("TV")}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tiene Wifi?</Form.Label>
        <Form.Check
          type="checkbox"
          label="Sí"
          {...register("wifi")}
          defaultChecked={dataRoom.benefits?.includes("WIFI")}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tiene Baño privado?</Form.Label>
        <Form.Check
          type="checkbox"
          label="Sí"
          {...register("bathroom")}
          defaultChecked={dataRoom.benefits?.includes("Baño privado")}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tiene teléfono?</Form.Label>
        <Form.Check
          type="checkbox"
          label="Sí"
          {...register("phone")}
          defaultChecked={dataRoom.benefits?.includes("Teléfono")}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Guardar cambios
      </Button>

      {error && <p className="text-danger">{error}</p>}
    </Form>
  );
};

export default FormRoomEdit;
