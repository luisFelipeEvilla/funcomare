import news from "@/data/news"

export default function News() {
    return (
        <main className="grid gap-6 py-4">
            <div className="text-center">
                <h1 className="font-bold text-3xl">Noticias</h1>
                <p className="text-lg opacity-75">
                    Encuentra aqui las ultimas novedades de nuestro compromiso
                    y trabajo con la comunidad
                </p>
            </div>
            
            <div className="flex flex-wrap justify-center px-auto items-start mx-auto gap-6">
                {
                    news.map((n, index) => (
                        <New
                            key={index}
                            id={n.id}
                            title={n.title}
                            description={n.description}
                            frontPage={n.frontPage}
                            createdAt={n.createdAt}
                        />
                    ))
                }
            </div>
        </main>
    )
}

type newProp = { title: string, description: string, frontPage: string, createdAt: string, id: number }
function New(props: newProp) {
    return (
        <a href={`/news/${props.id}`} className="grid gap-2 w-[300px] rounded-md shadow-md overflow-hidden hover:scale-105">
            <img
                src={props.frontPage}
                className="object-cover h-[200px] w-full"
            />
            <div className="px-4 py-2">
                <div className="">
                    <h2 className="font-semibold text-lg inline">{props.title}</h2>
                    <p className="text-sm font-light opacity-40">{props.createdAt}</p>
                </div>
                <p className="text-sm max-h-[100px] text-ellipsis overflow-hidden">{props.description}</p>
            </div>
        </a>
    )
}