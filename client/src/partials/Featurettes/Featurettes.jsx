import Featurette from "./Featurette";
import Divider from "../Divider";

export default function Featurettes() {
  return (
    <div className="container">
      <Divider />

      <Featurette
        firstTitle="Impressão 3D."
        secondTitle="Inovação em manufatura."
        content="
            Processo de criação facilitado, produto entregue pronto em apenas
            algumas horas."
        image="./images/3dprinter2.jpg"
      />

      <Divider />

      <Featurette
        firstTitle="Fresa CNC."
        secondTitle="Robustez e agilidade."
        content="Fresas CNC são mais robustas e criam peças sem fragilidade
        estrutural."
        image="./images/cnc2.jpg"
      />

      <Divider />

      <Featurette
        firstTitle="Desenho CAD."
        secondTitle="Materializar suas ideias."
        content="Por meio do desenho assistido qualquer imaginação vira realidade."
        image="./images/cad2.jpg"
      />

      <Divider />
    </div>
  );
}
