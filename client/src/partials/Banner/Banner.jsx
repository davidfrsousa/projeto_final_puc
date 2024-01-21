import PageTitle from "../PageTitle";
import BannerButtons from "./BannerComponentts/BannerButtons";
import BannerImage from "./BannerComponentts/BannerImage";
import BannerParagraph from "./BannerComponentts/BannerParagraph";

export default function Banner() {
  return (
    <div className="px-4 pt-5 mt-3 mb-5 text-center border-bottom">
      <PageTitle title="Prototipação Eficiente de Produtos" />
      <div className="col-lg-6 mx-auto">
        <BannerParagraph
          content="Utilizamos de manufatura aditiva e subtrativa para agilizar o
          desenvolvimento de projetos pessoais e comerciais, por meio da
          utilização de Impressora 3D e Fresadora CNC."
        />
        <BannerButtons
          href={["/contato", "/produtos"]}
          content={["Entre em contato", "Conheça nossos produtos"]}
        />
      </div>
      <BannerImage src="https://media.istockphoto.com/id/1473508538/pt/foto/the-cnc-milling-machine-cutting-the-tire-mold-parts-with-oil-coolant-method.jpg?s=1024x1024&w=is&k=20&c=kQbjzveFN89co_0zEqQFlELA7V0qXKcSDLBCrcC4ybM=" />
    </div>
  );
}
