import ContactAnchor from "./ContactAnchor";
import ContactHeader from "./ContactHeader";
import ContactParagraph from "./ContactParagraph";

export default function ContactBanner() {
  return (
    <>
      <ContactHeader title={"Ficou com dúvidas?"} />
      <ContactParagraph
        content={
          "Se gostaria de saber mais, entre em contato e tire todas as suas dúvidas."
        }
      />
      <ContactAnchor nome={"Contato"} />
    </>
  );
}
