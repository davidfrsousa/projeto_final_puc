import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "../../axios.js";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function EditarForm(props) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username: props.user,
      password: props.pw,
    };
    const header = {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    };
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/login/`, body, header);
    if (res.data !== "failed") {
      props.setUsername(res.data.user);
      props.setSuccess(true);
      return navigate("/produtos");
    } else {
      props.setUser("");
      props.setPwd("");
      props.setErrMsg("Credenciais inválidas");
      props.setUsername(undefined);
      props.setSuccess(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container className="justify-content-center">
          <Row className="justify-content-center">
            <Form.Group className="col-6 my-1 p-2 form-floating" controlId="formUser">
              <Form.Label className="lead" style={{fontSize:"1rem"}}>Usuário</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => props.setUser(e.target.value)}
                value={props.user}
                required
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-center">
            <Form.Group className="col-6 my-1 p-2 form-floating" controlId="formPw">
              <Form.Label className="lead" style={{fontSize:"1rem"}}>Senha</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => props.setPwd(e.target.value)}
                value={props.pw}
                required
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-center">
            <Button className="p-2 mb-2 w-25" size="lg" variant="primary" type="submit">
              Enviar
            </Button>
            </Row>
        </Container>
      </Form>
    </>
  );
}

export default EditarForm;
