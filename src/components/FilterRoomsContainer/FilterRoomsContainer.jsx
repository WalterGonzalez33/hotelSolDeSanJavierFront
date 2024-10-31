import style from "./FilterRoomsContainer.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CardRoom from "../common/CardRoom/CardRoom";
import useFetch from "../../hooks/useFetch";
import { Container, Spinner } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "./custom-swiper-bullet.css";

const FilterRoomsContainer = () => {
  const { data, loading } = useFetch({ endPoint: "/rooms" });

  return (
    <Container>
      <article className={` ${style.filter_container} `}>
        {loading && <Spinner animation="border" variant="success" />}

        {data && (
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
