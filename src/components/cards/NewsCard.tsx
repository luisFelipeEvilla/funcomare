"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
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
    <Link href={`/news/${props.id}`}>
      <Card className="flex flex-col gap-2 w-[300px] h-[450px] rounded-md shadow-md overflow-hidden">
        <CardHeader className="p-0">
        <img src={props.frontPage} className="object-cover h-[200px] w-full" />
      </CardHeader>

      <CardBody className="px-4 py-0">
        <div className="relative group">
          <h2 className="font-semibold text-lg line-clamp-2 overflow-hidden">
            {props.title.length > 60
              ? `${props.title.slice(0, 60)}...`
              : props.title}
          </h2>
          <div className="absolute z-10 bg-white border border-gray-200 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[300px]">
            {props.title}
          </div>
        </div>
        <p className="text-sm max-h-[100px] text-ellipsis overflow-hidden mb-2">
          {props.description}
        </p>
      </CardBody>

      <CardFooter className="px-4 pt-0 cursor-pointer hover:text-blue-400">
        <Link
          className="text-sm flex gap-1 items-center opacity-90"
          href={`/news/${props.id}`}
        >
          <span className="inline">Leer más </span>
          <FaArrowRightLong />
        </Link>
        </CardFooter>
      </Card>
    </Link>
  );
}
