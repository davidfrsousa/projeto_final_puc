export default function FeatHeader(props) {
  return (
    <h2
      className="featurette-heading fw-normal lh-1"
      style={{ fontSize: "50px", letterSpacing: "-.05rem" }}
    >
      {props.firstTitle}
      <span className="text-body-secondary"> {props.secondTitle}</span>
    </h2>
  );
}
