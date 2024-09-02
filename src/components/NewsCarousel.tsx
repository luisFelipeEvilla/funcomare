"use client";

import { Carousel } from "react-responsive-carousel";

export default function NewsCarousel({ images }: { images: string[] }) {
  return (
    <Carousel showThumbs={false} className="shadow-md" autoPlay>
      {images.map((img, index) => (
        <div key={index}>
          <img
            key={index}
            src={img}
            className="object-cover h-[600px] w-full rounded-md"
          />
          <p></p>
        </div>
      ))}
    </Carousel>
  );
}
