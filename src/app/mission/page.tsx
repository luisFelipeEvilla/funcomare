import Image from 'next/image';

export default function Mission() {
    return (
        <main className="grid gap-2 lg:flex lg:gap-8 items-center justify-center px-8 py-4">
            <div className="grid gap-4 max-w-[500px]">
                <h1 className="text-3xl font-semibold text-blue-500">Nuestra Misión</h1>
                <p className="">
                    LA FUNDACION LA LUZ DE LA ESPERANZA  es una entidad sin ánimo de lucro con alta vocación
                    de servicio social , que trabaja en favor  de la vida reduciendo las condiciones de
                    vulnerabilidad de los niños, niñas, adolescentes y adulto mayor de nuestro municipio,
                    buscando el mejoramiento de la calidad de vida. Todo esto encaminado con procesos
                    educativos, sociales, culturales y recreativos.
                </p>
            </div>

            <div>
                <Image 
                    src="/images/mission-banner.jpg" 
                    width={500} 
                    height={200} 
                    alt="Misión"
                    className="rounded-md w-[500px] h-[300px] object-cover" />
            </div>

        </main>
    )
}