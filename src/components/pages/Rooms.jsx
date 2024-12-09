import useFetch from "../../hooks/useFetch.jsx";
import CardRoom from "../common/CardRoom/CardRoom.jsx";
import { Container } from "react-bootstrap";

const RoomsContainer = () => {
  const { data } = useFetch({ endPoint: `/rooms`, ignoreToken: true });

  return (
    <Container className="d-flex flex-column gap-3 p-5">
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
          />
        ))}
    </Container>
  );
};

export default RoomsContainer;
