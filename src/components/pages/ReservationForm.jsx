import { useForm } from "react-hook-form";
import "../../styles/global.css";
import { Button, Col, Form, Row, Carousel } from "react-bootstrap";
import Swal from "sweetalert2";
import image1 from "../../assets/imgInicio/vista2.jpg";
import image2 from "../../assets/imgInicio/salaDeJuegos.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const ReservationForm = () => {
  const navigate = useNavigate();
  const [reservationData, setReservationData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const checkInDate = watch("checkIn");

  useEffect(() => {
    const token = sessionStorage.getItem("usuariosHotel");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const token = JSON.parse(sessionStorage.getItem("usuariosHotel"));

  
  const { data, loading, error } = useFetch({
    endPoint: "/reservations",
    reqMethod: "POST",
    bodyData: reservationData,
    reload: reservationData,
  });

  const reservaRealizada = (formData) => {
    const newReservationData = {
      check_in: formData.check_in,
      check_out: formData.check_out,
      personas: formData.personas,
      room_id: formData.room_id,
      comentarios: formData.comentarios || "",
      email: token?.email,
    };

  
    setReservationData(newReservationData);
  };

  useEffect(() => {
    if (data) {
      Swal.fire({
        title: "Reserva Realizada",
        text: data.reservationId
          ? `Tu reserva fue procesada exitosamente. ID de reserva: ${data.reservationId}.`
          : "Tu solicitud de reserva fue procesada exitosamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      reset(); // Limpia el formulario
    }

    if (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al procesar tu reserva. Por favor, inténtalo de nuevo más tarde.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  }, [data, error, reset]);

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
      <Form className="my-4 form-container" onSubmit={handleSubmit(reservaRealizada)}>
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
              />
              <Form.Text className="text-danger">{errors.checkIn?.message}</Form.Text>

              <Form.Label className="mt-4">Check-Out</Form.Label>
              <Form.Control
                type="date"
                {...register("check_out", {
                  required: "La fecha de Check-Out es obligatoria",
                  validate: (value) => {
                    if (checkInDate && new Date(value) < new Date(checkInDate)) {
                      return "La fecha de salida no puede ser anterior a la fecha de entrada.";
                    }
                    return true;
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.checkOut?.message}</Form.Text>
            </Col>

            <Col md={6} xs={12}>
              <Form.Label className="mt-2">Cantidad de personas</Form.Label>
              <Form.Select
                {...register("personas", {
                  required: "La cantidad de personas es obligatoria",
                })}
              >
                <option value="">Seleccione...</option>
                <option value="1">1 Persona</option>
                <option value="2">2 Personas</option>
                <option value="3">3 Personas</option>
                <option value="4">4 Personas</option>
              </Form.Select>
              <Form.Text className="text-danger">{errors.personas?.message}</Form.Text>

              <Form.Label className="mt-4">Tipo de habitación</Form.Label>
              <Form.Select
                {...register("room_id", {
                  required: "El tipo de habitación es obligatorio",
                })}
              >
                <option value="">Seleccione...</option>
                <option value="dobles-superiores">Dobles superiores</option>
                <option value="departamentos">Departamentos</option>
                <option value="dobles-lujo">Dobles de lujo</option>
                <option value="suite-superior">Suite superior</option>
              </Form.Select>
              <Form.Text className="text-danger">{errors.room_id?.message}</Form.Text>
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
