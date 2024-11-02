import useFetch from "../../hooks/useFetch.jsx";
import CardRoom from "../common/CardRoom/CardRoom.jsx";
import { Container } from "react-bootstrap";

const RoomsContainer = () => {
    const { data, loading, error } = useFetch({ endPoint: `/rooms` });
  
    return (
      <Container className="p-5">
        {data !== null &&
          data.length > 0 &&
          data.map((room) => (
            <CardRoom
              key={room.id}
              room_name={room.room_name}
              price={room.price}
              image={room.image}
              broad_description={room.broad_description}
              benefits={room.benefits}
            />
            
          ))}
      </Container>
    );
  };

  export default RoomsContainer;