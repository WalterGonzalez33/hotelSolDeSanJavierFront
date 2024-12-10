import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import style from "../FormrRoom/FormRoom.module.css";
import { editItem } from "../../../utils/requests";
import { showCustomAlert } from "../../../utils/customAlert";

const FormRoomEdit = ({ handleClose, setReload, reload, dataRoom }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const editRoom = async (data) => {
    const request = await editItem(data, `rooms/${dataRoom._id}`);
    if (request.status === 200 || request.status === 201) {
      showCustomAlert({
        alertTitle: "Éxito",
        alertText: "La habitación fue editada correctamente",
      });
      handleClose();
      setReload(!reload);
    }
    if (request.status === 400) {
      const res = await request.json();
      showCustomAlert({
        alertTitle: "Cuidado!",
        alertText: `${res.message ? res.message : res.message}`,
        icon: "warning",
      });
    }
  };

  const onSubmit = (data) =>{
    const benefits = [];
    if (data.tv) benefits.push("TV");
    if (data.wifi) benefits.push("WIFI");
    if (data.bathroom) benefits.push("Baño privado");
    if (data.phone) benefits.push("Teléfono");
    const roomData = {
      ...data,
      benefits,
    };
    editRoom(roomData);
  }
  const formId = "editModal"
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={`p-4 ${style.form}`}>
      <Form.Group className="mb-3" controlId={`formRoomName-${formId}`}>
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
        {"Editar"}
      </Button>
    </Form>
  );
};

export default FormRoomEdit;
