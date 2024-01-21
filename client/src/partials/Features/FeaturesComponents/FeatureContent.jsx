import FeatureAnchor from "./FeatureAnchor";
import FeatureHeader from "./FeatureHeader";
import FeatureImage from "./FeatureImage";
import FeatureParagraph from "./FeatureParagraph";

export default function FeatureContent(props) {
  return (
    <div className="col-lg-4 text-center">
      <FeatureImage image={props.image} />
      <FeatureHeader title={props.title} />
      <FeatureParagraph content={props.content} />
      <FeatureAnchor />
    </div>
  );
}
