import { useForm } from "react-hook-form";
import "../../styles/global.css";
import { Button, Col, Form, Row, Carousel } from "react-bootstrap";
import Swal from "sweetalert2";
import image1 from "../../assets/imgInicio/vista2.jpg";
import image2 from "../../assets/imgInicio/salaDeJuegos.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ReservationForm = () => {
  const navigate = useNavigate();

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
  });

  const reservaRealizada = (data) => {
    Swal.fire({
      title: "Reserva Realizada",
      text: "Tu solicitud de reserva ha sido enviada exitosamente. Nos pondremos en contacto contigo pronto.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    reset();
    console.log(data);
  };

  return (
    <section className="container my-4">
      {/* carrousel de imagenes */}
      <Carousel className="my-4">
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
      <Form
        className="my-4 form-container"
        onSubmit={handleSubmit(reservaRealizada)}
      >
        <Form.Group>
          <h3 className="my-3">Datos de la estadía</h3>
          <hr />
          <Row>
            <Col md={6} xs={12}>
              <Form.Label className="mt-2">Check-In</Form.Label>
              <Form.Control
                type="date"
                {...register("checkIn", {
                  required: "La fecha de Check-In es obligatoria",
                })}
              />
              <div>
                <Form.Text className="text-danger">
                  {errors.checkIn?.message}
                </Form.Text>
              </div>

              <Form.Label className="mt-4">Check-Out</Form.Label>
              <Form.Control
                type="date"
                {...register("checkOut", {
                  required: "La fecha de Check-Out es obligatoria",
                  validate: (value) => {
                    if (
                      checkInDate &&
                      new Date(value) < new Date(checkInDate)
                    ) {
                      return "La fecha de salida no puede ser anterior a la fecha de entrada.";
                    }
                    return true;
                  },
                })}
              />
              <div>
                <Form.Text className="text-danger">
                  {errors.checkOut?.message}
                </Form.Text>
              </div>

              <Form.Label className="mt-4">Comentarios</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Col>
            <Col md={6} xs={12}>
              <Form.Label className="mt-2">Cantidad de personas</Form.Label>
              <Form.Select
                {...register("personas", {
                  required: "La cantidad de personas es obligatoria",
                })}
              >
                <option value="">Seleccione...</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i + 1 === 1 ? "persona" : "personas"}
                  </option>
                ))}
              </Form.Select>
              <div>
                <Form.Text className="text-danger">
                  {errors.personas?.message}
                </Form.Text>
              </div>

              <Form.Label className="mt-4">Tipo de habitación</Form.Label>
              <Form.Select
                {...register("roomType", {
                  required: "El tipo de habitación es obligatorio",
                })}
              >
                <option value="">Seleccione...</option>
                <option>Dobles superiores</option>
                <option>Departamentos</option>
                <option>Dobles de lujo</option>
                <option>Suite superior</option>
              </Form.Select>
              <div>
                <Form.Text className="text-danger">
                  {errors.roomType?.message}
                </Form.Text>
              </div>
              <Form.Label>Hora estimada de llegada</Form.Label>
              <Form.Control type="time" />
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
