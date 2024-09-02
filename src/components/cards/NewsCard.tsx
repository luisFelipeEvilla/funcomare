"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";

type newProp = {
  title: string;
  description: string;
  frontPage?: string;
  createdAt: string;
  id: number;
};
export default function NewsCard(props: newProp) {
  return (
    <Card className="flex flex-col gap-2 w-[300px] h-[450px] rounded-md shadow-md overflow-hidden">
      <CardHeader className="p-0">
        <img src={props.frontPage} className="object-cover h-[200px] w-full" />
      </CardHeader>

      <CardBody className="px-4 py-0">
        <h2 className="font-semibold text-lg inline text-clip">{props.title}</h2>
        <p className="text-sm max-h-[100px] text-ellipsis overflow-hidden mb-2">
          {props.description}
        </p> 
      </CardBody>

      <CardFooter className="px-4 pt-0 cursor-pointer hover:text-blue-400">
        <a 
          className="text-sm flex gap-1 items-center opacity-90"      
          href={`/news/${props.id}`}>
          <span className="inline">Leer más </span><FaArrowRightLong />
        </a>
      </CardFooter>
    </Card>
  );
}
