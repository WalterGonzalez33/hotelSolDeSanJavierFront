import vista from "../../assets/imgInicio/vista.jpg";
import vista2 from "../../assets/imgInicio/vista2.jpg";
import room from "../../assets/imgInicio/habitacion.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "../../styles/custom-swiper-bullet.css";

const Promociones = () => {
  return (
    <section className="section-promos">
      <h2 className="colorVerdeLetra text-center border-bottom border-3 border-dark-subtle">
        Promociones
      </h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        slidesPerView={1}
        loop={true}
        speed={700}
      >
        <SwiperSlide>
          <div className="img-banner-container">
            <img src={vista} alt="vista" />
            <div className="caption-banner">
              <h3>Viví una experiencia única</h3>
              <p>Disfruta de esta promo hecha para vos.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-banner-container">
            <img src={room} alt="habitación" />
            <div className="caption-banner">
              <h3>Confort & Hospitalidad</h3>
              <p>
                Sentirte en tu casa, pero con el lujo y la comodidad de un 4
                ⭐⭐⭐⭐
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-banner-container">
            <img src={vista2} alt="vista de noche" />
            <div className="caption-banner">
              <h3>Noches Mágicas</h3>
              <p>Conoce todas las opciones que tenemos para vos!</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Promociones;
