export default function BannerImage(props) {
  return (
    <div className="overflow-hidden" style={{ maxHeight: "50vh" }}>
      <div className="container px-5">
        <img
          src={props.src}
          className="img-fluid border rounded-4 shadow-lg mb-4"
          alt="img-1"
          width="500"
          height="500"
          loading="lazy"
        />
      </div>
    </div>
  );
}
