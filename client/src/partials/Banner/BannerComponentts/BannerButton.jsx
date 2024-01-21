export default function BannerButton(props) {
  return (
    <a
      href={props.href}
      type="button"
      className="btn btn-primary btn-lg px-4 me-sm-3"
    >
      {props.nome}
    </a>
  );
}
