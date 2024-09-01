import NewsCard from "@/components/cards/NewsCard";
import ContactForm from "@/components/contactForm";
import { PHONE_NUMBER } from "@/config";
import news from "@/data/news";
import { FaPhone } from "react-icons/fa";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaHandSparkles } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { ReactElement } from "react";
import { fontDmSerif } from "./fonts";
import { IntertFont } from "@/fonts";
import Image from "next/image";

export default function Home() {
  const ABOUT_ICONS_SIZE = 30;
  return (
    <>
      <section className="flex gap-8 items-center justify-between">
        <div className={`flex items-start flex-col gap-10 py-20 `}>
          <div className="flex text-start flex-col gap-1">
            <p className={`text-lg  md:text-4xl font-bold`}>
              Impulsando la cultura
              <br/>
              <span className="text-lg md:text-3xl text-blue-600 font-bold">
                {" Desde hace más de 3 años"}
              </span>
            </p>

            <p className="text-xs md:text-lg mt-1">
              Estás interesado en nostros?
            </p>
          </div>

          <a
            href="#"
            className="bg-blue-600 rounded-md  w-fit px-4 py-2 text-white shadow-md"
          >
            Cónoce más
          </a>
        </div>

        <Image
          src="/untitled-1.png"
          alt="Hero image"
          width={500}
          height={500}
          layout="intrinsic"
          className="my-8 rounded-md w-[400px]"
        />
      </section>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center mx-auto">
          <h4 className="text-3xl font-bold max-w-[400px] text-center">
            Promoviendo la cultura y la educación en la región
          </h4>
          <p>Como lo hacemos?</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <Badget
            title="Deja un legado"
            content="Haz una donación para ayudar a las personas que más lo necesitan"
            icon={<FaGift size={ABOUT_ICONS_SIZE} color="red" />}
          />

          <Badget
            title="Haz una donación"
            content="Haz una donación para ayudar a las personas que más lo necesitan"
            icon={
              <MdOutlineVolunteerActivism
                size={ABOUT_ICONS_SIZE}
                color="green"
              />
            }
          />

          <Badget
            title="Sé voluntario"
            content="Haz parte de nuestro equipo de voluntarios y ayuda a construir
              un mejor futuro"
            icon={<FaHandSparkles size={ABOUT_ICONS_SIZE} color="blue" />}
          />

          <Badget
            title="Conviertete en un representante"
            content="Conviertete en un representante de la fundación en tu región"
            icon={<FaUserPlus size={ABOUT_ICONS_SIZE} color="blue" />}
          />
        </div>
      </section>

      <NewsSection />

      <section className="flex flex-col gap-4 items-center py-12">
        <div className="bg-white grid gap-2 border rounded-md shadow-md p-4 max-w-[800px]">
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
    </>
  );

  function NewsSection() {
    return (
      <section className="bg-white">
        <div className="flex flex-col gap-8 py-12">
          <div className="text-center flex flex-col gap-3">
            <h4 className="text-3xl font-bold">últimas novedades</h4>
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
        </div>
      </section>
    );
  }

  function Badget(props: {
    icon: ReactElement;
    title: string;
    content: string;
  }) {
    return (
      <div className="flex flex-col gap-6 rounded-lg shadow-lg py-6 px-3 border">
        <div className="flex flex-col gap-2 items-center">
          <div className="bg-white rounded-full w-fit px-2 py-2 ">
            {props.icon}
          </div>
          <h4 className={`font-bold text-center text-base h-[30px] `}>
            {props.title}
          </h4>
        </div>
        <p className="text-center text-sm">{props.content}</p>
      </div>
    );
  }
}
