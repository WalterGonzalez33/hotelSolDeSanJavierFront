import { Container } from "react-bootstrap";
import { useState } from "react";
import "../../styles/gallery.css";

const images = {
  habitaciones: [
    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734331888/suite-superiores-hotel-sol-san-javier-tucuman_s0wizm.jpg",
    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734331925/suite-junior-hotel-sol-san-javier-tucuman_hm0izv.jpg",
    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734331968/departamentos-hotel-sol-san-javier-tucuman_mzv1h2.jpg",
    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734331777/habitaciones-dobles-deluxe-hotel-sol-san-javier-tucuman_fhj2l8.jpg",
  ],
  eventos: [
    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734333707/24-eventos-realizados-en-hotel-sol-san-javier_dlmose.jpg",

    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734333748/1-servicio-de-catering_f504ty.jpg",

    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734333778/6-catering-del-hotel-sol-san-javier_n3takg.jpg",

    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734333842/5-eventos_payxog.jpg",
  ],
  vistas: [
    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734333880/2-vistas-aereas-de-san-javier-tucuman_e02wls.jpg",

    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734333932/3-el-cristo-bendicente_ugpkcv.jpg",

    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734333958/parapente-loma-bola-tucuman_a2k0ms.jpg",

    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734333983/29-loma-bola_pxa9ni.jpg",
  ],
  piscina: [
    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734334153/19-piscina-del-hotel-sol-san-javier_njynim.jpg",

    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734334181/21-vista-del-restaurante-desde-la-piscina_adg8ao.jpg",

    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734334228/4-la-piscina_vhbsvq.jpg",

    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734334261/16-recreacion-mediante-juegos-en-la-piscina-del-hotel_zsbuq6.jpg",
  ],
  servicios: [
    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734334300/spa-sol-san-javier-tucuman_zumj1u.jpg",

    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734334326/gym-hotel-sol-san-javier-tucuman_rrebs3.jpg",

    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734334352/salones-hotel-sol-san-javier-04_qaexmy.jpg",

    "https://res.cloudinary.com/drxcknzbe/image/upload/v1734334378/spa-hotel-sol-san-javier_rrin3t.jpg",
  ],
};

const Gallery = () => {
  const [selectedSection, setSelectedSection] = useState("habitaciones");

  return (
    <Container>
      <div>
        <div className="d-flex justify-content-md-around justify-content-center flex-row flex-wrap gap-3 my-3">
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
                    className="img-fluid w-100"
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
