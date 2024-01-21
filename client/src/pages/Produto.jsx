import { useEffect, useState } from "react";
import NavBar from "../partials/NavBar";
//import PageTitle from "../partials/PageTitle";
//import axios from "../axios.js";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Produto() {
  const [item, setItem] = useState("");
  const id = useParams();

  useEffect(() => {
    async function getItem() {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/produto/${id.id}`);
      if (res.data) console.log(res.data.imagens);
      const prod = await res.json();
      console.log(prod);
      setItem(prod);
    }
    getItem();
  }, [id.id]);

  function ProdItem() {
    return (
      <>
        <NavBar />

        <div className="container">
          <div className="row my-5">
            <div className="col-12 text-center text-capitalize">
              <h1 className="lead product-title">{item.nome}</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-5">
              <Carousel fade>
                <Carousel.Item>
                  <img
                    src={item.imagens[0]}
                    className="rounded-2"
                    width={"100%"}
                    height={400}
                    alt="First slied"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={item.imagens[1]}
                    className="rounded-2"
                    width={"100%"}
                    height={400}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={item.imagens[2]}
                    className="rounded-2"
                    width={"100%"}
                    height={400}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-7 px-5">
              <p className="lead">{item.descricao}</p>
              <p className="lead text-capitalize">
                Categoria: {item.categoria}
              </p>
              <p className="lead">
                Preço: <a href="/contato">{item.preco}</a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <>{item ? <ProdItem /> : "...loading"}</>;
}

export default Produto;
