import NewsCarousel from "@/components/NewsCarousel";
import { SUPABASE_URL } from "@/config";
import news from "@/data/news";
import { createClient } from "@/lib/supabase/server";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const supabase = createClient();
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();
  const { data: images } = await supabase.storage
    .from("images")
    .list(`posts/${post?.id}`);

    console.log(images?.map(
        (i) =>
          `${SUPABASE_URL}/storage/v1/object/public/images/posts/${post?.id}/${i.name}`
      ))
  return (
    <main className="grid gap-4 px-8 py-4 lg:py-8 max-w-[1024px] mx-auto">
      <div className="grid gap-3">
        <h1 className="text-center font-bold text-2xl">{post?.titulo}</h1>
        <p className="whitespace-pre-line">{post?.contenido}</p>
      </div>

      <NewsCarousel
        images={
          images?.map(
            (i) =>
              `${SUPABASE_URL}/storage/v1/object/public/images/posts/${post?.id}/${i.name}`
          ) || []
        }
      />
    </main>
  );
}
