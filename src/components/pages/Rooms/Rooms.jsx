import useFetch from "../../../hooks/useFetch.jsx";
import CardRoom from "../../common/CardRoom/CardRoom.jsx";
import style from "./Rooms.module.css";
import { Container, Spinner } from "react-bootstrap";

const HandleLoading = () => {
  return (
    <div className={` ${style.loading_search} `}>
      <Spinner animation="border" variant="success" />
      <h3 className="text-success m-0">Cargando...</h3>
    </div>
  );
};

const RoomsContainer = () => {
  const { data, loading } = useFetch({ endPoint: `rooms`, ignoreToken: true });

  return (
    <Container
      className={"d-flex flex-column gap-3 pt-5 " + `${style.container_rooms}`}
    >
      {loading && <HandleLoading />}
      {data !== null &&
        data.length > 0 &&
        data.map((room) => (
          <CardRoom
            key={room._id}
            room_name={room.room_name}
            price={room.price}
            image={room.image}
            broad_description={room.broad_description}
            benefits={room.benefits}
            available={false}
            border_card={true}
          />
        ))}
    </Container>
  );
};

export default RoomsContainer;
