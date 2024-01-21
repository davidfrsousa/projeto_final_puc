export default function FeatImage(props){
    return (
        <img
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image mx-auto rounded-4"
          width="500"
          height="300"
          src={props.image}
          role="img"
          aria-label="Placeholder: 500x500"
          focusable="false"
          style={{ maxWidth: "100%" }}
          alt=""
        />


    );
}