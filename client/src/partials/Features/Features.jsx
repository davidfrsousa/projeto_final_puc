import FeatureContent from "./FeaturesComponents/FeatureContent";

export default function Features() {
  return (
    <div className="container">
      <div className="row">
        <FeatureContent
          image="./images/3dprinter.jpg"
          title="Impressão 3D"
          content="Manufatura aditiva com uso de impressora 3D para desenvolvimento de
            action figures, próteses dentárias, peças para engenharia,
            artesanato e variedades."
        />
        <FeatureContent
          image="./images/cnc.jpg"
          title="Fresadora CNC"
          content="Manufatura subtrativa com uso de fresa CNC para desenvolvimento de
            peças para engenharia, quadros entalhados em madeira, artesanato e
            variedades."
        />
        <FeatureContent
          image="./images/cad.jpg"
          title="Desenho CAD"
          content="Dê vida à sua ideia, com uso de tecnologia assistida podemos criar
            um desenho no computador e dar vida à sua imaginação."
        />
      </div>
    </div>
  );
}
