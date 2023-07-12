import Image from 'next/image';

const VissionPage = () => (
    <main className="grid gap-2 lg:flex lg:gap-8 items-center justify-center px-8 py-4">
        <div className="grid gap-4 max-w-[500px]">
            <h1 className="text-3xl font-semibold text-blue-500">Nuestra Visión</h1>
            <p className="">
            La fundación tendrá como objeto, Intermediar en los procesos de formación 
            técnica en programas de educación inicial, cultural, cívicas que posibilite 
            proyectos en competencias ciudadanas, el trabajo y desarrollo humano, técnica
            profesional y /o tecnológica en el campo social, ecológico, deportivo, educativo
            y empresarial además en temas complementarios que requiera el escenario productivo.
            </p>
        </div>

        <div>
            <Image
                src="/images/vission-banner.jpg"
                width={500}
                height={200}
                alt="Misión"
                className="rounded-md w-[500px] h-[300px] object-cover" />
        </div>
    </main>
)

export default VissionPage;