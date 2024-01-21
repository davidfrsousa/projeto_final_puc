export default function ContactAnchor(props){
    return (
        <a className="btn btn-primary my-2" href="/contato">
        {props.nome}
      </a>
    );
}