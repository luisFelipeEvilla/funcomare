import { PHONE_NUMBER } from "@/config";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const links = [
  { href: "/", icon: <FaFacebook /> },
  { href: "/", icon: <FaInstagram /> },
  { href: "/", icon: <FaTwitter /> },
];

export const Footer = () => (
  <footer className="shrink-0 flex flex-col-reverse lg:flex-row flex-wrap gap-8 items-center justify-around text-white p-4 bg-[#1e4664]">
    <div className="flex flex-col gap-2 ">
      <p className="text-white font-bold text-xl">FUNCOMARE</p>
      <p>Conoce nuestras redes sociales</p>
      <div className="flex">
        {links.map(({ href, icon }) => (
          <a key={href} href={href} className="mr-4 text-3xl">
            {icon}
          </a>
        ))}
      </div>
    </div>

    <div>
      <h6 className="text-white font-bold text-xl">ENLACES RÁPIDOS</h6>

      <ul className="flex-col text-sm pl-6">
        <li>
          <a href="/mission">Misión</a>
        </li>
        <li>
          <a href="/vission">Visión</a>
        </li>
        <li>
          <a href="/founders">Fundadores</a>
        </li>
        <li>
          <a href="/news">Noticias</a>
        </li>
      </ul>
    </div>

    <div className="grid gap-2 max-w-[250px]">
      <h6 className="text-xl font-bold text-white">CONTACTO</h6>
      <a href={`tel:+57${PHONE_NUMBER}`} className="flex items-center">
        <FaPhone className="mr-2" /> <p>(+57) 301-561-6183</p>
      </a>
      <a href={`mailto:funcamore@gmail.com`} className="flex items-center">
        <FaMailBulk className="mr-2" /> <p>funcomare@gmail.com</p>
      </a>
      <p>
        {" "}
        © {new Date().getFullYear()} FUNCOMARE. Todos los derechos reservados
      </p>
    </div>
    {/* <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1604332294355!2d-74.1998131268954!3d11.249605950291564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f56b767e8307%3A0x6490a2591e760568!2sCl.%207%20%2316b-33%2C%20Comuna%203%2C%20Santa%20Marta%2C%20Magdalena!5e0!3m2!1ses!2sco!4v1689140548022!5m2!1ses!2sco"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-[90%] m-auto md:w-[400px] md:h-[200px]"
      />
    </div> */}
  </footer>
);

export default Footer;
