import NewsCard from "@/components/cards/NewsCard";
import ContactForm from "@/components/contactForm";
import { EMAIL, PHONE_NUMBER } from "@/config";
import news from "@/data/news";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid justify-center max-w-[1000px] mx-auto gap-10 py-8 px-2 ">
      <div className="flex flex-col items-center mt-4 h-screen md:h-[400px] lg:h-[500px]">
        <div className="absolute top-0">
          <img
            className="w-screen  h-screen md:h-[400px] lg:h-[600px]"
            src={"/images/pexels-edwin-guzman-13722651.jpg"}
            width={500}
            height={500}
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

      <section className="grid gap-2 px-4">
        <h2 className="text-xl font-bold text-blue-500">¿Quienes somos?</h2>
        <p className="text-base">
          Somos una fundación sin ánimo de lucro que busca mejorar la calidad de
          vida de las personas a través de la educación, la cultura y el
          deporte. Apostamos el futuro de la niñez y todo lo que estos tienen
          para aportar a nuestra sociedad
        </p>
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

      <section className="flex flex-col gap-4">
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
    </div>
  );
}
