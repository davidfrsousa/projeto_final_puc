import Card from "react-bootstrap/Card";
import MyCarousel from "./MyCarousel";

function MyCard(props) {
  return (
    <div className="col">
      <div className="card">
        <Card>
          <MyCarousel variant="top" imagem={props.imagens} />
          <Card.Body>
            <Card.Title className="text-center lead fw-bold">{props.nome}</Card.Title>
            <a className="btn btn-success" href={`/produto/${props.id}`}>
              Visualizar
            </a>
            <a
              className="btn btn-outline-danger mx-2"
              href={`/editar/${props.id}`}
            >
              Editar
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MyCard;
