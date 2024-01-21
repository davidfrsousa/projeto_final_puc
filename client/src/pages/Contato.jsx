import { useState } from "react";
import NavBar from "../partials/NavBar";
import PageTitle from "../partials/PageTitle";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFormspark } from "@formspark/use-formspark";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [fone, setFone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMsg] = useState("");

  const formId = process.env.REACT_APP_FORMID;

  const [submit, submitting] = useFormspark({
    formId: formId,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit({ nome, fone, email, mensagem });
    alert("Mensagem enviada!");
    setNome("");
    setFone("");
    setEmail("");
    setMsg("");
  };

  return (
    <>
      <NavBar />
      <PageTitle title="Contato" />

      <Container fluid>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={6} className="mx-auto my-3">
              <Form.Group>
                <Form.Label className="lead">Nome</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  onChange={(e) => setNome(e.target.value)}
                  value={nome}
                  placeholder="nome"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={6} className="mx-auto my-3">
              <Form.Group>
                <Form.Label className="lead">Telefone</Form.Label>
                <Form.Control
                  type="text"
                  id="fone"
                  onChange={(e) => setFone(e.target.value)}
                  value={fone}
                  placeholder="(DDD) fone"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={6} className="mx-auto my-3">
              <Form.Group>
                <Form.Label className="lead">E-mail</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="nome@exemplo.com"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={6} className="mx-auto my-3">
              <Form.Group>
                <Form.Label className="lead">Mensagem</Form.Label>
                <Form.Control
                  type="textarea"
                  as="textarea"
                  id="msg"
                  onChange={(e) => setMsg(e.target.value)}
                  value={mensagem}
                  rows={4}
                  placeholder="Insira aqui sua mensagem com detalhes sobre o serviço requerido"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col className="text-center my-3">
              <Button type="submit" disabled={submitting}>
                Enviar
              </Button>
            </Col>
          </Row>
        </Form>

        <Row>
          <Col xs={6} className="mx-auto text-center">
            <hr style={{ margin: "1rem 0" }} />
            <p className="lead fw-bold text-center">
              Ou se preferir entre em contato por meio do Whatsapp abaixo.
            </p>
            <Button href="http://wa.me/6199999999" variant="success">
              Whatsapp
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
