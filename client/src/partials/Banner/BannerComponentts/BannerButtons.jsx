import BannerButton from "./BannerButton";

export default function BannerButtons(props) {
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <BannerButton href={props.href[0]} nome={props.content[0]} />
      <BannerButton href={props.href[1]} nome={props.content[1]} />
    </div>
  );
}
