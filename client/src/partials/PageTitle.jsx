export default function Title(props) {
  return (
    <div className="row my-3">
      <div className="col">
        <h1 className="fw-bold text-center">{props.title}</h1>
      </div>
    </div>
  );
}
