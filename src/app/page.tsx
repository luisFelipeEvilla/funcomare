import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col py-4 px-2">
      <div className="flex flex-col mx-auto items-center mt-4">
        <div className='relative'>
          <Image
            className='w-full rounded lg:w-[1200px] lg:h-[550px] object-cover'
            src={'/images/hero-banner2.jpg'}
            width={500}
            height={500}
            alt={'hero'}
          />
          <div className='absolute bottom-0 text-white bg-slate-300  bg-opacity-60 py-3 px-2'>
            <h1 className="text-4xl font-bold mb-2">FUNCOMARE</h1>
            <p className="text-xl font-semibold">
              Somos una fundación sin ánimo de lucro que busca mejorar la calidad de vida de las personas a través de la educación, la cultura y el deporte.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
