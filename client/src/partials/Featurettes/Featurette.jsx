import FeatHeader from "./FeaturetteComponents/FeatHeader";
import FeatImage from "./FeaturetteComponents/FeatImage";
import FeatParagraph from "./FeaturetteComponents/FeatParagraph";

export default function Featurette(props) {
  return (
    <div className="row featurette">
      <div className="col-md-7" style={{ alignSelf: "center" }}>
        <FeatHeader 
        firstTitle = {props.firstTitle}
        secondTitle = {props.secondTitle}
        />
        <FeatParagraph content={props.content}/>
      </div>
      <div className="col-md-5">
        <FeatImage image={props.image} />
      </div>
    </div>
  );
}
