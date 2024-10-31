import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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

              <Button variant="outline-dark" className="m-2"><FaGithub className="fs-4"  /></Button>
            </a>
            <a
              href={urlLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-primary"><FaLinkedin className="fs-4" /></Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
      </> 
  );
};

export default CardIntegrants