import news from "@/data/news";
import { Bebas } from "@/fonts";
import NewsCard from "../cards/NewsCard";
import { getPosts } from "@/lib/posts";

export default async function PostsSection() {
  const posts = await getPosts({ limit: 8 });

  return (
    <section className="bg-white">
      <div className="flex flex-col gap-8 py-12">
        <div className="text-center flex flex-col gap-3">
          <h4 className={`${Bebas.className} text-3xl font-bold`}>
            últimas novedades
          </h4>
          <p>Echa un vistazo a algunos de nuestos eventos más recientes</p>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4">
          {news.map((n, index) => (
            <NewsCard
              key={index}
              id={n.id}
              title={n.title}
              description={n.description}
              frontPage={n.frontPage}
              createdAt={n.createdAt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
