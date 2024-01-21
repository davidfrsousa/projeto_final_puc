import { useEffect } from "react";
import axios from "../axios.js";
import { useNavigate } from "react-router-dom";

function Logout(){

    const navigate = useNavigate();

    useEffect(()=>{
        async function checkout(){
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/login/checkout`);
            console.log(res);
        }
        checkout();
        navigate('/', {replace:true});
    });


    return
}

export default Logout;