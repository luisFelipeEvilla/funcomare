import NewsCard from "@/components/cards/NewsCard"
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
                        <NewsCard
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


