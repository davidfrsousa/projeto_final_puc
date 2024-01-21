export default function FeatureImage(props) {
  return (
    <img
      className="rounded-circle"
      width="140"
      height="140"
      src={props.image}
      alt=""
    />
  );
}
