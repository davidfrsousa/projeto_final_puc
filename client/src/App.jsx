import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Produtos from "./pages/Produtos.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";
import Servicos from "./pages/Servicos.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import Produto from "./pages/Produto.jsx";
import Editar from "./pages/Editar.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/checkout" element={<Logout />} />
      <Route path="/produto/:id" element={<Produto />} />
      <Route path="/editar/:id" element={<Editar />} />
    </Routes>
  );
}
