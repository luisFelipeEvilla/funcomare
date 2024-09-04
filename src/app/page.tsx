import NewsCard from "@/components/cards/NewsCard";
import ContactForm from "@/components/contactForm";
import { PHONE_NUMBER } from "@/config";
import news from "@/data/news";
import { FaPhone } from "react-icons/fa";

import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/Section";
import SupportUS from "@/components/home/SupportUS";
import ContactSection from "@/components/home/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <SupportUS/>
      <NewsSection />

      <Section className="gap-4 items-center py-12">
        <div className="bg-white grid gap-2 border text-center rounded-md shadow-md p-4 max-w-[300px] md:max-w-[450px] lg:max-w-[800px]">
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
        <ContactSection/>
      </Section>
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
}