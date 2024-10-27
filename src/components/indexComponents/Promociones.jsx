import Carousel from "react-bootstrap/Carousel";
import "../css/index.css";
import vista from "../../assets/imgInicio/vista.jpg";
import vista2 from "../../assets/imgInicio/vista2.jpg";
import habitacion from "../../assets/imgInicio/habitacion.jpg";


const Promociones = () => {
  return (
    <>
    <h2 className="colorVerdeLetra text-center border-bottom border-3 border-dark-subtle">Promociones</h2>
      <Carousel className="py-1">
        <Carousel.Item>
          <img src={vista} alt="" />
          <Carousel.Caption>
            <h3>Viví una experiencia única</h3>
            <p>Disfruta de esta promo hecha para vos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={habitacion} />
          <Carousel.Caption>
            <h3>Confort & Hospitalidad</h3>
            <p>Sentite en tu casa, pero con el lujo y la comodidad de un 4 ⭐⭐⭐⭐</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={vista2} />
          <Carousel.Caption>
            <h3>Noches Mágicas</h3>
            <p>
              Conocé todas las opciones que tenemos para vos!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Promociones;
