import NewsCard from "@/components/cards/NewsCard";
import ContactForm from "@/components/contactForm";
import { EMAIL, PHONE_NUMBER } from "@/config";
import news from "@/data/news";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaHandSparkles } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { ReactElement } from "react";

export default function Home() {
  return (
    <div className="grid justify-center max-w-[1000px] mx-auto">
      <div className="relative flex flex-col items-center w-screen h-[400px] md:h-[400px] lg:h-[600px]">
        <div className="absolute top-0">
          <img
            className="w-screen object-fill h-[400px] md:h-[400px] lg:h-[600px]"
            src={"/images/pexels-edwin-guzman-13722651.jpg"}
            width={500}
            height={300}
            alt={"hero"}
          />
          {/* <div className='absolute bottom-0 w-full text-white bg-slate-400  bg-opacity-60 py-3 px-2'>
              <h1 className="text-4xl font-bold mb-2">FUNCOMARE</h1>
              <p className="text-xl font-semibold">
                Fundacion construyendo mejores aprendizajes para tu región
              </p>
            </div> */}
        </div>
      </div>

      <section className="bg-gray-100 w-screen py-10">
        <div className="grid md:grid-cols-2 gap-8 px-4 max-w-[1000px] mx-auto">
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold text-blue-500 text-center">
              ¿Quienes somos?
            </h2>
            <p className="text-base">
              Somos una fundación sin ánimo de lucro que busca mejorar la
              calidad de vida de las personas a través de la educación, la
              cultura y el deporte. Apostamos el futuro de la niñez y todo lo
              que estos tienen para aportar a nuestra sociedad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <Badget
              title="Deja un legado"
              content="Haz una donación para ayudar a las personas que más lo necesitan"
              icon={<FaGift />}
            />

            <Badget
              title="Haz una donación"
              content="Haz una donación para ayudar a las personas que más lo necesitan"
              icon={<MdOutlineVolunteerActivism />}
            />

            <Badget
              title="Sé voluntario"
              content="Haz parte de nuestro equipo de voluntarios y ayuda a construir
              un mejor futuro"
              icon={<FaHandSparkles />}
            />

            <Badget
              title="Conviertete en un representante"
              content="Conviertete en un representante de la fundación en tu región"
              icon={<FaUserPlus />}
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 py-12 max-w-[1024px] mx-auto">
        <div className="text-center">
          <h4 className="text-xl font-bold">Noticias importantes</h4>
          <p>Echa un vistazo a algunos de nuestos eventos más recientes</p>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4">
          {news.map((n, index) => (
            <NewsCard
              key={index}
              id={n.id}
              title={n.title}
              description={n.description}
              frontPage={n.frontPage}
              createdAt={n.createdAt}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 items-center">
        <div className="grid gap-2 border rounded-md shadow-md p-4 max-w-[800px]">
          <h2 className="text-xl font-bold text-center text-blue-500">
            ¿Como puedo involucrarme?
          </h2>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-lg">
              Puedes involucrarte con nosotros a través de donaciones o
              trabajando en conjunto para brindarle un mejor futuro para todos.
            </p>
            <a
              href={`tel:+57${PHONE_NUMBER}`}
              className="flex w-fit gap-2 items-center"
            >
              <FaPhone className="text-blue-500" />
              (+57) 301-561-6183{" "}
            </a>
          </div>
        </div>
        <ContactForm />
      </section>

      
    </div>
  );

  function Badget(props: {
    icon: ReactElement;
    title: string;
    content: string;
  }) {
    return (
      <div className="flex flex-col gap-1">
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-white rounded-full w-fit px-2 py-2">
            {props.icon}
          </div>
          <h4 className="font-semibold text-center md:text-left">
            {props.title}
          </h4>
        </div>
        <p className="text-center md:text-left">{props.content}</p>
      </div>
    );
  }
}
