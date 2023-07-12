import Image from 'next/image';

export default function Mission() {
    return (
        <main className="grid gap-2 lg:flex lg:gap-8 items-center justify-center px-8 py-4">
            <div className="grid gap-4 max-w-[500px]">
                <h1 className="text-3xl font-semibold text-blue-500">Nuestra Misión</h1>
                <p className="">
                La misión de la Fundación es perseguir el interés y el mejoramiento de la calidad de vida, el bienestar 
                común o de interés de la comunidad teniendo como propósito fundamental para así de esta manera contribuir
                de formación institucional brindando una atención optima de los niños, niñas, adolescentes y jóvenes en los 
                ámbitos educativos y comunitarios, en donde se posibilite la gestión dentro de un marco de enfoque de derechos 
                de manera diferencial dispuesto a establecer alianzas estratégicas a nivel nacional e internacional, además de 
                eso busca mejorar la calidad de vida de las poblaciones más vulnerables y de las comunidades afro e indígenas 
                que se encuentren acentuadas en las zonas del Distrito de Santa Marta y los municipios del Departamento del 
                Magdalena
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