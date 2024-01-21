import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function Home() {
  return (
    <div className="home-bg-color">
      <Container>
        <Row>
          <Col xs={9}>
            <h3 className="p-2 home-font-color">
              <Image
                className="m-2"
                src="./images/machine.svg"
                height={30}
              ></Image>
              Espaço Abeliano
            </h3>
          </Col>
          <Col>
            <Stack direction="horizontal" gap={2}>
              <a className="p-2 home-font-color home-font-anchor" href="/sobre">
                Sobre
              </a>
              <a
                className="p-2 home-font-color home-font-anchor"
                href="/produtos"
              >
                Produtos
              </a>
              <a
                className="p-2 home-font-color home-font-anchor"
                href="/contato"
              >
                Contato
              </a>
            </Stack>
          </Col>
        </Row>
      </Container>

      <Container className="center-header">
        <Row>
          <h1 className="home-font-color text-center">Espaço Abeliano</h1>
          <p className="home-font-color text-center lead">
            Espaço Abeliano é uma startup que busca inovar na execucação de
            projetos pessoais, acadêmicos e prototipação de produtos por meio da
            manufatura aditiva, usinagem de peças em CNC e desenho CAD.
          </p>
          <p className="text-center">
            <Button size="lg" href="/sobre" variant="light">
              Conheça mais
            </Button>
          </p>
        </Row>
      </Container>
    </div>
  );
}
