import { ReactElement } from "react";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaHandSparkles } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { Section } from "../Section";
import { Bebas } from "@/fonts";

export default function SupportUS() {
  const ABOUT_ICONS_SIZE = 30;

  return (
    <Section className="px-4">
      <div className="flex flex-col gap-4 text-center mx-auto">
        <h4
          className={`${Bebas.className} text-xl md:text-3xl font-bold max-w-[400px] text-center`}
        >
          Promoviendo la cultura y la educación en la región
        </h4>
        <p>¿Como lo hacemos?</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <Badget
          title="Haz una donación"
          content="Haz una donación para ayudar a las personas que más lo necesitan"
          icon={
            <MdOutlineVolunteerActivism size={ABOUT_ICONS_SIZE} color="green" />
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
    </Section>
  );
}

function Badget(props: { icon: ReactElement; title: string; content: string }) {
  return (
    <div className="flex flex-col gap-6 rounded-lg shadow-lg py-6 px-3 border">
      <div className="flex flex-col gap-2 items-center">
        <div className="bg-white rounded-full w-fit px-2 py-2 ">
          {props.icon}
        </div>
        <h4 className={`font-bold text-center text-base`}>{props.title}</h4>
      </div>
      <p className="text-center text-sm">{props.content}</p>
    </div>
  );
}
