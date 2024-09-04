import "./Contact.css";
import { cookies } from "next/headers";
import { Bebas } from "@/fonts";
import { InterFont } from "@/fonts";
import Link from "next/link";
export default async function ContactSection() {
  const items = [
    {
      text: "Escribe un correo",
      icon: "/images/gmail.png",
      url: "mailto:funcomare@gmail.com",
    },
    {
      text: "Agenda una reunión",
      icon: "/images/calendly.png",
      url: "https://calendly.com/funcomare/30min",
    },
    {
      text: "Whatsapp",
      icon: "/images/whatsapp.png",
      url: "https://api.whatsapp.com/send?phone=3015616183",
    },
  ];
  return (
    <section
      accessKey="contact"
      id="contact"
      className="max-w-section mx-auto flex flex-col md:flex-row gap-14 justify-between items-center py-4"
    >
      <div className="flex flex-col items-center gap-8 text-center">
        <h4 className={`${Bebas.className} text-section-title`}>Contactanos</h4>
        <p>
          Estamos aquí para ayudarte, si tienes alguna pregunta o necesitas
          ayuda, por favor contáctanos a través de los siguientes canales.
        </p>

        <div className="flex flex-col gap-4">
          {items.map((link, index) => {
            return (
              <ContactLink
                key={index}
                url={link.url}
                image={link.icon}
                alt=""
                text={link.text}
              />
            );
          })}
        </div>
      </div>
      <img className="md:w-1/2" src="/images/contact/contact.svg" />
    </section>
  );

  function ContactLink(props: {
    url: string;
    image: string;
    alt: string;
    text: string;
  }) {
    return (
      <Link
        className={`border-2 ${InterFont.className} rounded-lg px-4
            py-2 flex items-center gap-4 cursor-pointer hover:scale-105 s
            hadow-lg text-lg hover:bg-[#11ACE2] hover:text-white`}
        href={props.url}
        target="_blank"
      >
        <img src={props.image} className="h-5 w-5" alt={props.alt} />
        <p>{props.text}</p>
      </Link>
    );
  }
}
