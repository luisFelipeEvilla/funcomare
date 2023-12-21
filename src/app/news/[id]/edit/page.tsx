"use client";

import news from "@/data/news";
import {Input, Textarea} from "@nextui-org/react";
import { useEffect, useState } from "react";

type Item = {
    title: string;
    description: string;
    images: string[];
}
export default function EditNewPage({ params } : { params: { id: string  }}) {
    const [item, setItem] = useState<Item>({ title: "", description: "", images: []});

    useEffect(() => {
        const id = parseInt(params.id)
        const item = news.find(n => n.id === id);
        if (!item) return ;
        setItem(item);
    }, [])
    
    return (
        <div className="py-8 px-12">
            <form className="flex flex-col gap-4 max-w-[1024px] bg-white">
                <Input
                    label="Titulo"
                    placeholder="Titulo"
                    value={item.title}
                    type="text"
                    onChange={e => setItem({ ...item, title: e.target.value })}
                />

                <Textarea
                    label="Descripción"
                    placeholder="Descripción"
                    value={item.description}
                    onChange={e => setItem({ ...item, description: e.target.value })}
                ></Textarea>

                <Input
                    type="file"
                    label="Imagenes"
                    placeholder="Imagenes"
                />
            </form>

        </div>
    )
}