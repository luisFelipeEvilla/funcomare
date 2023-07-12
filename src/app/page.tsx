import ContactForm from '@/components/contactForm';
import { EMAIL, PHONE_NUMBER } from '@/config'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="grid justify-center max-w-[1000px] mx-auto gap-10 py-8 px-2 ">
      <main className=''>
        <div className="flex flex-col mx-auto items-center mt-4">
          <div className='relative'>
            <Image
              className='w-full rounded lg:w-[1200px] lg:h-[550px] object-cover'
              src={'/images/hero-banner2.jpg'}
              width={500}
              height={500}
              alt={'hero'}
            />
            <div className='absolute bottom-0 w-full text-white bg-slate-300  bg-opacity-60 py-3 px-2'>
              <h1 className="text-4xl font-bold mb-2">FUNCOMARE</h1>
              <p className="text-xl font-semibold">
                Fundacion construyendo mejores aprendizajes para tu región
              </p>
            </div>
          </div>
        </div>
      </main>

      <section className='grid gap-2 px-4'>
        <h2 className='text-xl font-bold text-blue-500'>¿Quienes somos?</h2>
        <p className='text-lg'> Somos una fundación sin ánimo de lucro que busca mejorar la calidad de vida de las personas a
          través de la educación, la cultura y el deporte. Apostamos el futuro de la niñez y todo lo que estos tienen para
          aportar a nuestra sociedad
        </p>
      </section>

      <section className='flex flex-col gap-4 items-center'>
        <div className='grid gap-2 border rounded-md shadow-md p-4 max-w-[800px]'>
          <h2 className='text-xl font-bold text-center text-blue-500'>¿Como puedo involucrarme?</h2>
          <div>
            <p className='text-lg'>
              Puedes involucrarte con nosotros a través de donaciones o trabjando en conjunto para brindarle un mejor futuro para los niños.
              <a href={`tel:+57${PHONE_NUMBER}`} className='flex w-fit gap-2 items-center '><FaPhone className='text-blue-500' />(+57) 301-561-6183 </a>
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}
