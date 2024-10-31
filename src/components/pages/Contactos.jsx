import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import "../css/contacto.css"


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
      <div>

      </div>
      <Form.Group className="mx-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Text className="text-danger ms-2 ">
          {errors.nombre?.message}
        </Form.Text>
        <Form.Control className="small-input"
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

        <Form.Label className="mt-2">Apellido</Form.Label>
        <Form.Text className="text-danger ms-2">
          {errors.apellido?.message}
        </Form.Text>
        <Form.Control className="small-input"
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

        <Form.Label className="mt-2">Email</Form.Label>
        <Form.Text className="text-danger ms-2">
          {errors.email?.message}
        </Form.Text>
        <Form.Control className="small-input"
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

        <Form.Label className="mt-2">Celular</Form.Label>
        <Form.Text className="text-danger ms-2">
          {errors.cel?.message}
        </Form.Text>
        <Form.Control className="small-input"
          type="tel"
          placeholder="Ej: 3813321783"
          {...register("cel", {
            required: "*El celular es un campo obligatorio*",
            minLength: {
              value: 2,
              message: "El celular debe tener un minino de 2 numeros",
            },
            maxLength: {
              value: 10,
              message: "El celular debe tener como maximo 10 numeros",
            },
          })}
        />
      </Form.Group>

      <Form.Group className="mx-2 me-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="mt-2">Escribinos tu consulta </Form.Label>
        <Form.Text className="text-danger ms-2">
          {errors.consulta?.message}
        </Form.Text>
        <Form.Control className="small-input"
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

        <Button variant="success" type="submit" className="mt-2">
          Enviar consulta
        </Button>
      </Form.Group>
    </Form>
  );
}



export default formContactos;
