import { Form, Button } from "react-bootstrap";
import style from "./Register.module.css";
import { useForm } from "react-hook-form";
import { create } from "../../../utils/requests";
import { useState } from "react";
import { showCustomAlert } from "../../../utils/customAlert";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowCircle } from "react-icons/bi";
import logo from "../../../assets/logo.png";

const classDirection = style.section_container;

const Register = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const changeCurrentPassword = (password) => {
    setCurrentPassword(password);
  };

  const registerUser = async (bodyData) => {
    const registerResponse = await create(bodyData, "users");
    const responseJson = await registerResponse.json();

    if (!registerResponse.ok) {
      return showCustomAlert({
        alertTitle: "No te pudimos registrar",
        alertText: responseJson.message,
        icon: "warning",
        confirmText: "VOLVER",
      });
    }

    showCustomAlert({
      alertTitle: "Felicidades cliente",
      alertText: "Ahora tienes una cuenta en nuestro hotel",
      continueConfirm: true,
      controlDismissed: true,
      callback: () => navigation("/login"),
      callbackDismissed: () => navigation("/login"),
    });
  };

  const onSubmit = (data) => {
    const bodyResponse = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    registerUser(bodyResponse);
  };

  return (
    <>
      <section
        className={
          "d-flex flex-row justify-content-between align-items-center w-100 gap-5 " +
          classDirection
        }
      >
        <article className={` ${style.form_container} px-2`}>
          <Form className={` ${style.form} `} onSubmit={handleSubmit(onSubmit)}>
            <div className="w-100 text-center my-2 d-lg-none">
              <img src={logo} alt="logo del hotel" />
            </div>
            <h4 className="mt-4  mb-4 w-100 text-center fs-3 color-custom-light">
              Regístrate
            </h4>
            <Form.Group className="mt-4" controlId="ControlInputName">
              <Form.Label className="color-custom-bold">
                Nombre de usuario
              </Form.Label>
              <Form.Control
                className="  "
                type="text"
                placeholder="Ej: Juan paez"
                {...register("username", {
                  required: "El nombre de usuario es obligatorio",
                  minLength: {
                    value: 10,
                    message:
                      "Nombre y apellido debe que tener mínimo 10  caracteres",
                  },
                  maxLength: {
                    value: 25,
                    message:
                      "Nombre y apellido debe tener como máximo 25 caracteres",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger">
              {errors.username?.message}
            </Form.Text>

            <Form.Group className="mb-3 mt-3 " controlId="ControlInputEmail">
              <Form.Label className="color-custom-bold">Email</Form.Label>
              <Form.Control
                className=" "
                type="email"
                placeholder="Juan@gmail.com"
                {...register("email", {
                  required: "El email es obligatorio",
                  minLength: {
                    value: 10,
                    message: "El mail debe que tener mínimo 10 caracteres",
                  },
                  maxLength: {
                    value: 60,
                    message: "El mail debe que tener máximo 60 caracteres",
                  },
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "Formato de email incorrecto",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3  mt-3" controlId="ControlInputPassword">
              <Form.Label className="color-custom-bold">Contraseña</Form.Label>
              <Form.Control
                className=""
                type="password"
                placeholder="Juan@123"
                {...register("password", {
                  required: "La contraseña es obligatorio",
                  minLength: {
                    value: 5,
                    message:
                      "La contraseña debe tener un mínimo de 5 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "La contraseña debe tener un máximo de 15 caracteres",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número",
                  },
                })}
                onChange={(event) => {
                  changeCurrentPassword(event.target.value);
                }}
              />

              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3  mt-3"
              controlId="ControlInputPasswordRepeat"
            >
              <Form.Label className="color-custom-bold">
                Repite la contraseña
              </Form.Label>
              <Form.Control
                className=""
                type="password"
                placeholder="Juan@123"
                {...register("passwordRepeat", {
                  required: "Repita la contraseña",
                  maxLength: {
                    value: 15,
                    message:
                      "La contraseña debe tener un máximo de 15 caracteres",
                  },
                  validate: (value) => {
                    return (
                      value === currentPassword ||
                      "La contraseña no es correcta"
                    );
                  },
                })}
              />

              <Form.Text className="text-danger">
                {errors.passwordRepeat?.message}
              </Form.Text>
            </Form.Group>

            <div className="w-100 text-center">
              <Button
                className="text-center m-auto w-100 "
                variant="success"
                type="submit"
              >
                Registrarse
              </Button>

              <button
                type="button"
                className={` ${style.btnBackAfter} `}
                onClick={() => window.history.back()}
              >
                <BiLeftArrowCircle />
              </button>
            </div>
          </Form>
        </article>
        <article className={` ${style.banner_register} `}></article>
      </section>
    </>
  );
};

export default Register;
