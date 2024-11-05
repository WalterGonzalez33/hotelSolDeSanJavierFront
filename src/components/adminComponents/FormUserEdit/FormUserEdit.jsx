import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import style from "../FormUser/FormUser.module.css";
import { editItem } from "../../../utils/requests";
import { showCustomAlert } from "../../../utils/customAlert";

const FormUserEdit = ({ handleClose, setReload, reload, dataUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const editUser = async (data) => {
    const request = await editItem(data, `users/${dataUser._id}`);
    if (request.status === 200 || request.status === 201) {
      showCustomAlert({
        alertTitle: "Éxito",
        alertText: "El usuario fue editado correctamente",
      });
      handleClose();
      setReload(!reload);
    }
    if (request.status === 400) {
      const res = await request.json();
      showCustomAlert({
        alertTitle: "Cuidado!",
        alertText: `${res.message ? res.message : res.mensaje}`,
        icon: "warning",
      });
    }
  };

  const onSubmit = (data) => {
    editUser(data);
  };

  const formId = "EditModal";

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={`p-4 ${style.form} `}>
      <Form.Group className="mb-3" controlId={`formUserName-${formId}`}>
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control
          className={` d-inline-flex focus-ring focus-ring-success ${style.input}`}
          type="text"
          autoComplete="username"
          placeholder="ingrese el nombre del usuario"
          {...register("username", {
            required: "El nombre de usuario es un campo requerido",
            minLength: {
              value: 3,
              message:
                "El nombre de usuario no puede tener menos de 3 caracteres",
            },
            maxLength: {
              value: 80,
              message:
                "El nombre de usuario no puede tener mas de 80 caracteres",
            },
          })}
          defaultValue={dataUser ? dataUser.username : ""}
          isInvalid={!!errors.username}
        />
        <Form.Control.Feedback type="invalid">
          {errors.username?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId={`formEmail-${formId}`}>
        <Form.Label>Email</Form.Label>
        <Form.Control
          className={` d-inline-flex focus-ring focus-ring-success ${style.input}`}
          type="email"
          autoComplete="email"
          placeholder="Ingrese el email"
          {...register("email", {
            required: "El email es un campo requerido",
            pattern: {
              value:
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
              message: "Formato de email invalido",
            },
            minLength: {
              value: 6,
              message: "El email no puede tener menos de 6 caracteres",
            },
            maxLength: {
              value: 320,
              message: "El email no puede tener mas de 320 caracteres",
            },
          })}
          defaultValue={dataUser ? dataUser.email : ""}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId={`formStatus-${formId}`}>
        <Form.Label>Estado de la cuenta</Form.Label>
        <Form.Select
          className={` d-inline-flex focus-ring focus-ring-success ${style.input} ${style.select}`}
          {...register("status", {
            required: "El estado es un campo requerido",
          })}
          defaultValue={dataUser ? dataUser.status : "Activo"}
          isInvalid={!!errors.status}
        >
          <option value="Activo">Activa</option>
          <option value="Suspendido">Suspendida</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.status?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId={`formRoll-${formId}`}>
        <Form.Label>Permisos (rol)</Form.Label>
        <Form.Select
          className={` d-inline-flex focus-ring focus-ring-success ${style.input} ${style.select}`}
          {...register("roll", {
            required: "Los permisos son un campo requerido",
          })}
          defaultValue={dataUser ? dataUser.roll : "Usuario"}
          isInvalid={!!errors.roll}
        >
          <option value="Usuario" className={` ${style.option} `}>
            Usuario
          </option>
          <option value="Admin">Administrador</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.roll?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="success" type="submit">
        {"Editar"}
      </Button>
    </Form>
  );
};
export default FormUserEdit;
