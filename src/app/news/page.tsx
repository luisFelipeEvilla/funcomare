import NewsCard from "@/components/cards/NewsCard"
import news from "@/data/news"
import { createClient } from "@/lib/supabase/server"

export default async function News() {
    const supabase = createClient();

    const { data: posts, error  } = await supabase.from("posts").select("*").order("created_at", { ascending: false });

    return (
        <main className="grid gap-6 py-4">
            <div className="text-center">
                <h1 className="font-bold text-3xl">Noticias</h1>
                <p className="text-lg opacity-75">
                    Encuentra aqui las ultimas novedades de nuestro compromiso
                    y trabajo con la comunidad
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center px-auto items-start mx-auto gap-6">
                {
                    posts?.map((n, index) => (
                        <NewsCard
                            key={index}
                            id={n.id}
                            title={n.titulo}
                            description={n.contenido}
                            frontPage={n.miniatura || ""}
                            createdAt={n.created_at}
                        />
                    ))
                }
            </div>
        </main>
    )
}


