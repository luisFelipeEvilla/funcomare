import { Section } from "@/components/Section";
import { Bebas } from "@/fonts";
import Image from "next/image";

const VissionPage = () => (
  <Section className="grid gap-2 lg:gap-8 h-full grow items-center justify-center px-8 py-4">
    <div className="grid gap-4">
      <h1 className={`text-4xl font-semibold text-center`}>
        Nuestra Visión
      </h1>
      <p className="">
        La fundación tendrá como objeto, Intermediar en los procesos de
        formación técnica en programas de educación inicial, cultural, cívicas
        que posibilite proyectos en competencias ciudadanas, el trabajo y
        desarrollo humano, técnica profesional y /o tecnológica en el campo
        social, ecológico, deportivo, educativo y empresarial además en temas
        complementarios que requiera el escenario productivo.
      </p>
    </div>

    <div>
      <Image
        src="/images/vission-banner.jpg"
        width={819}
        height={700}
        alt="Misión"
        className="rounded-md mx-auto object-cover"
      />
    </div>
  </Section>
);

export default VissionPage;
