import Image from "next/image";
export function Hero() {
  return (
    <section className="flex gap-10 py-20 justify-center items-center">
      <div
        className={`flex items-center md:items-start flex-col gap-10
        bg-white rounded-md max-w-[300px] md:max-w-[400px]`
      }
      >
        <div className="flex text-center  md:text-start flex-col gap-1">
          <p className={`text-xl md:text-2xl font-semibold`}>
            Impulsando la cultura y fomentando el desarrollo
          </p>

          <p className="text-xs md:text-lg mt-1">
            Realizamos procesos de formación técnica en programas de educacion
            inicial, cultural y civicas que permitan el desarrollo de
            habilidades y competencias en la comunidad.
          </p>
        </div>

        <a
          href="https://www.instagram.com/funcomare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="bg-blue-600 rounded-md  w-fit px-4 py-2 text-white shadow-md cursor-pointer"
        >
          Cónoce más
        </a>
      </div>

      <Image
        src="/images/hero.png"
        alt="Hero image"
        width={500}
        height={500}
        layout="intrinsic"
        className="hidden md:inline my-8 rounded-md w-[400px]"
      />
    </section>
  );
}
