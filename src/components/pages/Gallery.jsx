import { Container } from "react-bootstrap";
import { useState } from "react";
import "../../styles/gallery.css";


const images = {
  habitaciones: [
    "http://hotelsolsanjavier.com.ar/public/images/secciones/suite-superiores-hotel-sol-san-javier-tucuman.jpg",
    "http://hotelsolsanjavier.com.ar/public/images/secciones/suite-junior-hotel-sol-san-javier-tucuman.jpg",
    "http://hotelsolsanjavier.com.ar/public/images/secciones/departamentos-hotel-sol-san-javier-tucuman.jpg",
    "http://hotelsolsanjavier.com.ar/public/images/secciones/habitaciones-dobles-deluxe-hotel-sol-san-javier-tucuman.jpg",
  ],
  eventos: [
    "http://hotelsolsanjavier.com.ar/public/images/galerias-de-fotos/fotos/24-eventos-realizados-en-hotel-sol-san-javier.jpg",
    "http://hotelsolsanjavier.com.ar/public/images/galerias-de-fotos/1-servicio-de-catering.JPG",
    "http://hotelsolsanjavier.com.ar/public/images/galerias-de-fotos/fotos/6-catering-del-hotel-sol-san-javier.jpg",
    "http://hotelsolsanjavier.com.ar/public/images/galerias-de-fotos/5-eventos.jpg",
  ],
  vistas: [
    "http://hotelsolsanjavier.com.ar/public/images/galerias-de-fotos/2-vistas-aereas-de-san-javier-tucuman.jpg",
    "http://hotelsolsanjavier.com.ar/public/images/galerias-de-fotos/3-el-cristo-bendicente.jpg",
    "http://hotelsolsanjavier.com.ar/public/images/secciones/parapente-loma-bola-tucuman.jpg",
    "http://hotelsolsanjavier.com.ar/public/images/galerias-de-fotos/fotos/29-loma-bola.jpg"
  ],
  piscina: [
"http://hotelsolsanjavier.com.ar/public/images/galerias-de-fotos/fotos/19-piscina-del-hotel-sol-san-javier.jpg",
"http://hotelsolsanjavier.com.ar/public/images/galerias-de-fotos/fotos/21-vista-del-restaurante-desde-la-piscina.jpg",
"http://hotelsolsanjavier.com.ar/public/images/galerias-de-fotos/4-la-piscina.jpg",
"http://hotelsolsanjavier.com.ar/public/images/galerias-de-fotos/fotos/16-recreacion-mediante-juegos-en-la-piscina-del-hotel.jpg"
  ],
  servicios: [
"http://hotelsolsanjavier.com.ar/public/images/secciones/spa-sol-san-javier-tucuman.jpg",
"http://hotelsolsanjavier.com.ar/public/images/secciones/gym-hotel-sol-san-javier-tucuman.jpg",
"http://hotelsolsanjavier.com.ar/public/images/slider/salones-hotel-sol-san-javier-04.jpg",
"http://hotelsolsanjavier.com.ar/public/images/slider/spa-hotel-sol-san-javier.jpg"
  ]
};

const Gallery = () => {
  const [selectedSection, setSelectedSection] = useState("habitaciones");

  return (
    <Container>
      <div>
        <div className="d-flex justify-content-around my-3">
          {Object.keys(images).map((section) => (
            <button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`btn btn-outline-success ${
                selectedSection === section ? "button-active" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
        <div className="container">
          <div className="row g-3">
            {images[selectedSection].map((img, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="card_integrated">
                  <img
                    src={img}
                    alt={`${selectedSection}-${index}`}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
