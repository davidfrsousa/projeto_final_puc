import { useEffect, useState } from "react";
import NavBar from "../partials/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios.js";
import EditarForm from "../partials/Editar/EditarForm.jsx";

function Editar() {
  const [item, setItem] = useState("");
  const id = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getItem() {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/editar/${id.id}`);
      if (res.data === "not logged in"){
        console.log(res.data);
        navigate("/login");
      } 
      else {
        console.log(res.data);
        setItem(res.data);
      }
    }
    getItem();
  }, [id.id, navigate]);

  return (
    <>
      <NavBar />
      {item ? <EditarForm item={item} setItem={setItem}/> : "...loading"}
    </>
  );
}

export default Editar;
