import ContactBanner from "./ContactComponents/ContactBanner";
import Divider from "../Divider";

export default function ContactSection() {
  return (
    <div className="container">
      <div className="p-5 text-center bg-body-secondary rounded-3">
        <ContactBanner />
      </div>
      <Divider />
    </div>
  );
}
