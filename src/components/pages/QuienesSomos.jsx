import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import trabajar from "../../assets/imgInicio/trabajar.jpg"
import descansar from "../../assets/imgInicio/descansar.jpg";
import divertirse from "../../assets/imgInicio/divertirse.jpg";
import "../css/index.css";
import CardIntegrants from "../card_integrants/Card_integrants.jsx";

const QuienesSomos = () => {
  const listaIntegrantes = [
    {
      image: `${trabajar}`,
      key: 1,
      title: "Mauro Coniglio",
      urlGit: "https://github.com/MauroConiglio",
      urlLink: "https://www.linkedin.com/in/mauro-coniglio-b03b22297/",
    },
    {
      image: `${trabajar}`,
      key: 2,
      title: "Walter Gonzalez",
      urlGit: "https://github.com/WalterGonzalez33",
      urlLink: "https://www.linkedin.com/in/walter-gonzalez-4849352a9/",
    },
    {
      image: `${trabajar}`,
      key: 3,
      title: "Tomas Santamarina",
      urlGit: "https://github.com/Tomas2845",
      urlLink: "https://github.com/MauroConiglio",
    },
    {
        image: `${trabajar}`,
        key: 3,
        title: "Leo Recalde",
        urlGit: "https://github.com/leorecalde",
        urlLink: "https://github.com/MauroConiglio",
      },
      {
        image: `${trabajar}`,
        key: 3,
        title: "Fernando Valdivia",
        urlGit: "https://github.com/Fernando-Valdivia",
        urlLink: "https://github.com/MauroConiglio",
      },
      {
        image: `${trabajar}`,
        key: 3,
        title: "Isais Gius",
        urlGit: "https://github.com/MauroConiglio",
        urlLink: "https://github.com/MauroConiglio",
      },

  ];
  return (
    <>
    <Container className="my-3 text-center">
      <Row>
        <h2 className="colorVerdeLetra">¿Quienes Somos?</h2>
          {listaIntegrantes.map((integrante, index) => {
          return (
            <CardIntegrants
              key={index}
              image={integrante.image}
              title={integrante.title}
              urlGit={integrante.urlGit}
              urlLink={integrante.urlLink}

            />
          );
        })}
      </Row>
    </Container>
    </>
  );
};

export default QuienesSomos;
