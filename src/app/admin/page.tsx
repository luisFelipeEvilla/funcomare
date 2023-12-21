"use client";
import news from "@/data/news";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { fontDmSerif } from "../fonts";

export default function NewsPage() {
  return (
    <main className="py-8">
      <div className="flex flex-col w-full items-center gap-2">
        <h1 className={`${fontDmSerif.className} text-2xl`}>Noticias</h1>

        <p>Aquí puedes crear, editar y eliminar noticias</p>
      </div>

      <Table>
        <TableHeader>
          <TableColumn>Titulo</TableColumn>
          <TableColumn>Fecha</TableColumn>
          <TableColumn>Acciones</TableColumn>
        </TableHeader>

        <TableBody>
          {news.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{new Date().toLocaleString()}</TableCell>
              <TableCell className="flex gap-2">
                <a href={`/news/${item.id}/edit`}>
                  <Button color="primary">Editar</Button>
                </a>
                <Button color="danger">Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
