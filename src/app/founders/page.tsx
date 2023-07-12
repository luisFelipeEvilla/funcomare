import Image from "next/image";

const founders = [
    {
        name: "Uvaldo Mercado",
        description: `Docente de la universidad del magdalena,
            ha dedicado toda su vida a promover la educación en la región,
            siempre apostando por el desarrollo de las comunidades menos favorecidas
            y el futuro de los jovenes.
        `,
        image: "/images/founders/uvaldo-mercado.jpg"
    },
    {
        name: "Luz Marina Mercado",
        description: `Directora del Instituto Colombiano de Bienestar Familiar(I.C.B.F)
            en el departamento del Magdalena, ha dedicado su vida a la protección de los
            derechos de los niños, niñas y adolescentes, siempre buscando el bienestar de
            los más vulnerables.
        `,
        image: "/images/founders/luz-marina-mercado.jpg"
    },
    {
        name: "Javier Mercado",
        description: `Joven estudiante de derecho en la Universidad Sergio Arboleda.
            Apasionado por la música y la educacíon desde muy joven, compartiendo su tiempo
            con las comunidades samarias y buscando siempre el bienestar de los demás.
        `,
        image: "/images/founders/javier-mercado.jpg"
    }
]

const FoundersPage = () => (
    <main className="grid gap-8 py-8">
        <div className="flex flex-col items-center px-8 justify-center gap-4">
            <h1 className="font-bold text-2xl text-center">Nuestros fundadores</h1>
            <p className="text-md max-w-[800px]">FUNCAMORE está constituida por personas apasionadas con su labor y 
                comprometidas con la sociedad, que buscan mejorar la calidad de vida de
                las personas a través de la educación, la salud y el deporte.
            </p>
        </div>

        <div className={`grid gap-8 justify-center lg:flex  `}>
            {
                founders.map((founder, index) => (
                    <FounderCard
                        key={index}
                        name={founder.name}
                        description={founder.description}
                        image={founder.image}
                    />
                ))
            }
        </div>
    </main>
)

function FounderCard(props: { name: string, description: string, image: string }) {
    return (
        <div className="rounded-md p-4 shadow-md flex flex-col gap-2 max-w-[300px] items-center justify-center    ">
            <Image
                src={props.image}
                width={100}
                height={50}
                alt={props.name}
                className="w-[150px] h-[150px] rounded-full object-cover"
            />

            <h3 className="text-center font-bold text-lg">{props.name}</h3>
            <p className="text-sm"> {props.description}</p>
        </div>
    )
}

export default FoundersPage;