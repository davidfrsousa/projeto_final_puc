import NavBar from "../partials/NavBar";
import PageTitle from "../partials/PageTitle.jsx";
import Container from "react-bootstrap/Container";
import ServiceFeature from "../partials/Servicos/ServiceFeature.jsx";

export default function Servicos() {
  return (
    <>
      <NavBar />
      <PageTitle title="Serviços" />
      <Container>
        <ServiceFeature
          title="Impressão 3D"
          content1="A impressão 3D é um serviço de manufatura aditiva (insere
          material no produto). Ultilizamos a impressora 3D que aquece um
          filamento de plástico e o molda em finas camadas até que o
          produto esteja completo."
          content2=" O serviço é cobrado por hora de trabalho adicionado ao valor
          do filamento utilizado."
          image={"./images/3dprinter.jpg"}
        />
        <ServiceFeature
          title="Fresadora CNC"
          content1="A usinagem CNC é um serviço de manufatura subtrativa (retira
            material para criar o produto). Utilizamos uma máquina router CNC
            equipada com uma broca que corta o material até que o modelo
            criado no computador seja criado."
          content2=" O serviço é cobrado por hora adicionado ao valor do material
          utilizado."
          image={"./images/cnc.jpg"}
        />
        <ServiceFeature
          title="Desenho CAD"
          content1="O desenho CAD torna toda ideia em torna realidade. Por meio do
          desenho assistido por computador é criado o modelo digital de seus
          produtos, nele é possível ter uma melhor noção do estado final,
          falhas de design, além de gerar o modelo que será utilizado pela
          impressora 3D ou fresa CNC."
          content2=" O serviço é cobrado por hora."
          image={"./images/cad.jpg"}
        />
      </Container>
    </>
  );
}
