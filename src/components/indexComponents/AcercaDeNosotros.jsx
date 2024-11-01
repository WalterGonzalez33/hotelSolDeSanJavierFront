import { Container, Button } from "react-bootstrap";
import salones from "../../assets/imgInicio/hotel.jpg";
const AcercaDeNosotros = () => {
  return (
    <Container className="my-3">
      <section className="aboutUs-container">
        <article className="text-center text-md-start aboutUs-info ">
          <h3 className="colorVerdeLetra border-bottom border-2 border-dark-subtle py-2">
            Acerca de Nosotros
          </h3>
          <p>
            Sol de San Javier es un hotel 4 estrellas ubicado en la cima del
            cerro San Javier, rodeado por la majestuosa yunga tucumana y con
            vistas excepcionales de la ciudad de San Miguel de Tucumán.
          </p>
          <p>
            El hotel cuenta con un extenso parque de 8 hectáreas, repleto de
            vegetación autóctona y panorámicas impresionantes, que ofrece el
            escenario ideal para descansar, disfrutar en familia y convertir
            cualquier evento en un momento único e inolvidable.
          </p>
          <Button type="button" variant="success" className="button-custom">
            Ver más...
          </Button>
        </article>
        <article>
          <div className="img-hotel-container">
            <img
              src={salones}
              alt="fachada del hotel"
              className="imagenHotel"
            />
          </div>
        </article>
      </section>
    </Container>
  );
};

export default AcercaDeNosotros;
