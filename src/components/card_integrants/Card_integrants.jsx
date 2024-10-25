import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import "../css/index.css";

const CardIntegrants = ({image,title,urlGit,urlLink}) => {
  return (
      <> 
      <Col xs="12" md="4" className="my-2">
        <Card className="card_integrated m-3 m-lg-3 p-3">
          <div className="d-flex justify-content-center mt-4">
            <Card.Img
              variant="top"
              src={image}
              className="rounded-circle"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <a
              href={urlGit}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="dark" className="m-2">GitHub</Button>
            </a>
            <a
              href={urlLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Linkedin</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
      </> 
  );
};

export default CardIntegrants