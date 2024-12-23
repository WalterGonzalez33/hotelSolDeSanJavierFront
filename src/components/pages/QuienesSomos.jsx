import { Container, Row } from "react-bootstrap";
import MauroConiglio from "../../assets/imgAboutUs/MauroConiglio.jpg";
import FernandoValdivia from "../../assets/imgAboutUs/FernandoValdivia.jpeg";
import LeoRecalde from "../../assets/imgAboutUs/LeoRecalde.jpg";
import TomasSantamarino from "../../assets/imgAboutUs/TomasSantamarino.jpeg";
import WalterGonzalez from "../../assets/imgAboutUs/WalterGonzalez.jpg";
import IsaiasGius from "../../assets/imgAboutUs/IsaiasGius.jpg";
import CardIntegrants from "./CardIntegrants/Card_integrants.jsx";

const QuienesSomos = () => {
  const listaIntegrantes = [
    {
      image: `${MauroConiglio}`,
      key: 1,
      title: "Mauro Coniglio",
      urlGit: "https://github.com/MauroConiglio",
      urlLink: "https://www.linkedin.com/in/mauro-coniglio-b03b22297/",
    },
    {
      image: `${WalterGonzalez}`,
      key: 2,
      title: "Walter Gonzalez",
      urlGit: "https://github.com/WalterGonzalez33",
      urlLink: "https://www.linkedin.com/in/walter-gonzalez-4849352a9/",
    },
    {
      image: `${TomasSantamarino}`,
      key: 3,
      title: "Tomas Santamarina",
      urlGit: "https://github.com/Tomas2845",
    },
    {
      image: `${LeoRecalde}`,
      key: 3,
      title: "Leo Recalde",
      urlGit: "https://github.com/leorecalde",
      urlLink: "https://www.linkedin.com/in/leo-recalde-479b772bb/",
    },
    {
      image: `${FernandoValdivia}`,
      key: 3,
      title: "Fernando Valdivia",
      urlGit: "https://github.com/Fernando-Valdivia",
      urlLink: "https://www.linkedin.com/in/fernando-miguel-valdivia-180218ab/",
    },
    {
      image: `${IsaiasGius}`,
      key: 3,
      title: "Isaías Gius",
      urlGit: "https://github.com/G1U5",
    },
  ];
  return (
    <>
      <Container className="my-3 text-center">
        <Row>
          <h2 className="colorVerdeLetra mt-4 mb-4">¿Quienes Somos?</h2>
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
