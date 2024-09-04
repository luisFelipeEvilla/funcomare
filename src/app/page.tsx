import { PHONE_NUMBER } from "@/config";
import { FaPhone } from "react-icons/fa";

import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/Section";
import SupportUS from "@/components/home/SupportUS";
import ContactSection from "@/components/home/contact/Contact";
import { Bebas } from "@/fonts";
import PostsSection from "@/components/home/Posts";

export default function Home() {
  return (
    <>
      <Hero />

      <SupportUS />
      <PostsSection />

      <Section className="gap-4 items-center py-12">
        <div className="bg-white grid gap-2 border text-center rounded-md shadow-md p-4 max-w-[300px] md:max-w-[450px] lg:max-w-[800px]">
          <h2
            className={`${Bebas.className} text-2xl font-bold text-center text-blue-500`}
          >
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
      </Section>
      <ContactSection />
    </>
  );
}
