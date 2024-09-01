"use client";

import { EMAIL } from "@/config";
import { useRef } from "react";

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Obtén los valores de los campos del formulario utilizando las referencias
    const name = nameRef.current?.value;
    const subject = subjectRef.current?.value;
    const description = descriptionRef.current?.value;

    const body = `Cordiales saludos Srs. FUNCAMORE.\n
      Me comunico con ustedes debido al siguiente motivo: ${description} \n
      
      Atentamente: \n
      ${name}
      `;

    // Envía un correo electrónico a la dirección de correo electrónico de la organización
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    
  };

  return (
    <form
      className="grid gap-3  bg-white border-2 shadow-md rounded-md p-4 lg:p-6 max-w-[700px]"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-2">
        <label className="w-[60px]" htmlFor="name">
          Nombre
        </label>
        <input
          type="text"
          placeholder=""
          name="name"
          ref={nameRef}
          className="border px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex gap-2">
        <label className="w-[60px]" htmlFor="subject">
          Asunto
        </label>
        <input
          type="text"
          placeholder=""
          name="subject"
          ref={subjectRef}
          className="border px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="description">
          Describe brevemente como podemos ayudarte
        </label>
        <textarea
          placeholder="¿Como podemos ayudarte?"
          className="border px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="description"
          ref={descriptionRef}
        />
      </div>

      <button className="border rounded-md bg-blue-500 text-white px-4 py-2">
        Enviar
      </button>
    </form>
  );
}
