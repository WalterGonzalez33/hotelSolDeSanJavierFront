import style from "./FilterRoomsContainer.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CardRoom from "../common/CardRoom/CardRoom";
import useFetch from "../../hooks/useFetch";
import { Container, Spinner } from "react-bootstrap";
import { BsXCircle } from "react-icons/bs";
import notReservation from "../../assets/cerca.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "../../styles/custom-swiper-bullet.css";
import { useParams } from "react-router-dom";

const FilterRoomsContainer = () => {
  const { check_in, check_out } = useParams();

  const { data, loading, error } = useFetch({
    endPoint: `/rooms/${check_in}/${check_out}`,
  });

  const HandleError = () => {
    return (
      <div className={` ${style.error_search} `}>
        <BsXCircle />
        <span>Error en la búsqueda</span>
      </div>
    );
  };
  const HandleLoading = () => {
    return (
      <div className={` ${style.loading_search} `}>
        <Spinner animation="border" variant="success" />
      </div>
    );
  };

  const HandleNotAvailable = () => {
    return (
      <div className={` ${style.not_available} `}>
        <img src={notReservation} alt="not available" />
        <span>Lo siento, pero no hay disponibilidad</span>
      </div>
    );
  };

  return (
    <Container className={` ${style.container} `}>
      <article className={` ${style.filter_container} `}>
        {loading && <HandleLoading />}
        {error && <HandleError />}
        {data !== null && data.length === 0 && <HandleNotAvailable />}
        {data !== null && data.length > 0 && (
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
            className={` ${style.myCustomSwiper} `}
          >
            {data.map((room) => (
              <SwiperSlide key={room._id}>
                <CardRoom
                  room_name={room.room_name}
                  price={room.price}
                  image={room.image}
                  broad_description={room.broad_description}
                  benefits={room.benefits}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </article>
    </Container>
  );
};

export default FilterRoomsContainer;
