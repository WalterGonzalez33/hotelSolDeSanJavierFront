import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

function formContactos() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form className="container" onClick={handleSubmit(onSubmit)}>
      <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Juan"
          {...register("nombre", {
            required: "*El nombre es un campo obligatorio*",
            minLength: {
              value: 2,
              message: "El nombre debe tener un minino de 2 caracteres",
            },
            maxLength: {
              value: 30,
              message: "El nombre debe tener como maximo 30 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>

        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Sanchez"
          {...register("apellido", {
            required: "*El apellido es un campo obligatorio*",
            minLength: {
              value: 2,
              message: "El apellido debe tener un minino de 2 caracteres",
            },
            maxLength: {
              value: 20,
              message: "El apellido debe tener como maximo 20 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.apellido?.message}
        </Form.Text>

        <Form.Label>email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ej: Juansanchez@gmail.com"
          {...register("email", {
            required: "*El Email es un campo obligatorio*",
            minLength: {
              value: 12,
              message: "El email debe tener un minino de 12 caracteres",
            },
            maxLength: {
              value: 20,
              message: "El email debe tener como maximo 20 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.email?.message}</Form.Text>

        <Form.Label>Celular</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Ej: 3813321783"
          {...register("cel", {
            required: "*El celular es un campo obligatorio*",
            minLength: {
              value: 2,
              message: "El celular debe tener un minino de 2 caracteres",
            },
            maxLength: {
              value: 10,
              message: "El email debe tener como maximo 10 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.cel?.message}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Dejanos tu consulta </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Dejanos tu consulta..."
          {...register("consulta", {
            required: "*La consulta es un campo obligatorio*",
            minLength: {
              value: 40,
              message: "El texto debe tener un minino de 40 caracteres",
            },
            maxLength: {
              value: 300,
              message: "El texto debe tener como maximo 300 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.consulta?.message}
        </Form.Text>
        <Button variant="success" type="submit" className="mt-3">
          Enviar consulta
        </Button>
      </Form.Group>
    </Form>
  );
}

export default formContactos;
