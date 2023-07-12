"use client"
import news from "@/data/news"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Page({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const new_ = news.find(n => n.id === id);
    if (!new_) return <h1>Noticia no encontrada</h1>

    return (
        <main className="grid gap-4 px-8 py-4 lg:py-8">
            <div className="grid gap-3">
                <h1 className="text-center font-bold text-2xl">{new_.title}</h1>
                <p>{new_.description}</p>
            </div>


            <Carousel
                showThumbs={false}
                className="shadow-md"
                autoPlay
            >
                {
                    new_.images.map((img, index) => (
                        <div>
                            <img
                                key={index}
                                src={img}
                                className="object-cover h-[600px] w-full rounded-md"
                            />
                            <p></p>
                        </div>
                    ))
                }
            </Carousel>

        </main>
    )
}