import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function ServiceFeature(props) {
  return (
    <Row className="my-5">
      <Row>
        <h2 className="fw-bold">{props.title}</h2>
        <Col xs={8}>
          <p className="lead">{props.content1}
                <span style={{ fontWeight: "bold" }}>
                  {props.content2}
                </span></p>
          <a className="icon-link" href="/contato">
            Faça um orçamento
          </a>
        </Col>
        <Col xs={4}>
          <Image src={props.image} rounded width={"100%"}></Image>
        </Col>
      </Row>
    </Row>
  );
}

export default ServiceFeature;
