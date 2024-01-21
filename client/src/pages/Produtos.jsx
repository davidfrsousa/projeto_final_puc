import { useEffect, useState } from "react";
//import axios from "axios";
import NavBar from "../partials/NavBar";
import MyCard from "../partials/Products/MyCard";
import PageTitle from "../partials/PageTitle";

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function getProdutos() {
      //const result = await axios.get("http://localhost:3000/produtos");
      //console.log(result.data);
      //setProdutos(result.data);
      const res = await fetch(`${process.env.REACT_APP_API_URL}/produtos`);
      const prods = await res.json();
      //console.log(result2);
      setProdutos(prods);
    }
    getProdutos();
  }, []);

  function Prods(){
    return (
    <>
      <NavBar />
      <div className="container">
        <PageTitle title="Produtos" />

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-3">
          {produtos.map((prod) => {
            return (
              <MyCard
                key={prod._id}
                id={prod._id}
                nome={prod.nome}
                imagens={prod.imagens}
                descricao={prod.descricao}
              />
            );
          })}
        </div>
      </div>
    </>);
  }

  return (<>
    {produtos? <Prods /> : "...loading"}
    </>
  );
}

export default Produtos;
