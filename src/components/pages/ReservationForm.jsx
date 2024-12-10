import { useForm } from "react-hook-form";
import "../../styles/global.css";
import { Button, Col, Form, Row, Carousel } from "react-bootstrap";
import Swal from "sweetalert2";
import image1 from "../../assets/imgInicio/vista2.jpg";
import image2 from "../../assets/imgInicio/salaDeJuegos.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validationDate } from "../../utils/validateDate";

const apiUrl = import.meta.env.VITE_API_URL;

const ReservationForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const [rooms, setRooms] = useState([]);
  const [loadingRooms, setLoadingRooms] = useState(false);
  const [userId, setUserId] = useState("");
  const [error, setError] = useState(null);

  const [checkInDate, checkOutDate] = watch(["check_in", "check_out"]);

  const token = JSON.parse(sessionStorage.getItem("userToken"));

  useEffect(() => {
    if (token) {
      setUserId(token.id);
    } else {
      navigate("/login");
    }
  }, [navigate, token]);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const fetchRooms = async () => {
        try {
          setLoadingRooms(true);
          const url = `${apiUrl}/rooms/${checkInDate}/${checkOutDate}`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Error al obtener las habitaciones disponibles");
          }
          const data = await response.json();
          setRooms(data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoadingRooms(false);
        }
      };
      fetchRooms();
    }
  }, [checkInDate, checkOutDate]);

  const onSubmit = async (data) => {
    const validateResult = validationDate(data.check_in, data.check_out);
    if (validateResult.valid) {
      try {
        const reservationData = {
          user_id: userId,
          room_id: data.room_id,
          check_in: data.check_in,
          check_out: data.check_out,
          persons: data.persons,
        };

        const response = await fetch(`${apiUrl}reservation/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token.token}`,
          },
          body: JSON.stringify(reservationData),
        });
        if (!response.ok) {
          throw new Error("Error al crear la reservación");
        }

        Swal.fire({
          title: "Reservación exitosa",
          text: "La reservación ha sido creada correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
      } catch (err) {
        Swal.fire({
          tittle: "Error",
          text: `Hubo un problema al crear la reservación: ${err.message}`,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } else {
      console.error(validateResult.msj);
    }
  };

  return (
    <section className="container my-4">
      <Carousel className="my-4">
        {/* Carousel de imágenes */}
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>Bienvenido al Hotel</h3>
            <p>Disfruta de una experiencia única.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Relájate y Descansa</h3>
            <p>Espacios diseñados para tu confort.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 className="reservation-title">Solicitud de reserva</h1>
      <Form className="my-4 form-container" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <h3 className="my-3">Datos de la estadía</h3>
          <hr />
          <Row>
            <Col md={6} xs={12}>
              <Form.Label className="mt-2">Check-In</Form.Label>
              <Form.Control
                type="date"
                {...register("check_in", {
                  required: "La fecha de Check-In es obligatoria",
                })}
                isInvalid={!!errors.check_in}
              />
              <Form.Text className="text-danger">
                {errors.check_in?.message}
              </Form.Text>

              <Form.Label className="mt-4">Check-Out</Form.Label>
              <Form.Control
                type="date"
                {...register("check_out", {
                  required: "La fecha de Check-Out es obligatoria",
                })}
                isInvalid={!!errors.check_out}
              />
              <Form.Text className="text-danger">
                {errors.check_out?.message}
              </Form.Text>
            </Col>

            <Col md={6} xs={12}>
              <Form.Label className="mt-2">Cantidad de personas</Form.Label>
              <Form.Select
                {...register("persons", {
                  required: "La cantidad de personas es obligatoria",
                })}
              >
                <option value="">Seleccione...</option>
                <option value="1">1 Persona</option>
                <option value="2">2 Personas</option>
                <option value="3">3 Personas</option>
                <option value="4">4 Personas</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.personas?.message}
              </Form.Text>

              <Form.Label className="mt-4">Seleccionar habitación</Form.Label>
              {loadingRooms ? (
                <Form.Text>Cargando habitaciones...</Form.Text>
              ) : error ? (
                <Form.Text className="text-danger">{error}</Form.Text>
              ) : (
                <Form.Select
                  {...register("room_id", {
                    required:
                      "Seleccionar una habitación es un campo requerido",
                  })}
                  isInvalid={!!errors.room}
                >
                  <option value="">Seleccione...</option>
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
            </Col>
          </Row>
        </Form.Group>
        <Button type="submit" className="my-3" variant="success">
          Reservar
        </Button>
      </Form>
    </section>
  );
};

export default ReservationForm;
