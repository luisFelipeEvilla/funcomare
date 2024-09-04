"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrderBy(props: {
  orderBy: string;
  orderDirection: string;
  search: string;
}) {
  const router = useRouter();
  const [orderBy, setOrderBy] = useState(props.orderBy);
  const [orderDirection, setOrderDirection] = useState(props.orderDirection);

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [newOrderBy, newOrderDirection] = e.target.value.split("-");
    router.push(
      `/news?orderBy=${newOrderBy}&orderDirection=${newOrderDirection}&search=${props.search}`
    );
  };

  return (
    <Select
      size="sm"
      value={`${orderBy}-${orderDirection}`}
      label="Ordenar por"
      onChange={handleOrderChange}
      className="w-[150px] max-w-xs"
      classNames={{
        trigger:
          "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-700 rounded-md",
        label: "text-blue-600 dark:text-blue-400",
        listbox:
          "bg-white dark:bg-gray-800 border border-blue-300 dark:border-blue-700 rounded-md",
      }}
    >
      <SelectItem
        key="created_at-desc"
        value="created_at-desc"
        className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900"
      >
        Más recientes
      </SelectItem>
      <SelectItem
        key="created_at-asc"
        value="created_at-asc"
        className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900"
      >
        Más antiguos
      </SelectItem>
      <SelectItem
        key="titulo-asc"
        value="titulo-asc"
        className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900"
      >
        Título A-Z
      </SelectItem>
      <SelectItem
        key="titulo-desc"
        value="titulo-desc"
        className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900"
      >
        Título Z-A
      </SelectItem>
    </Select>
  );
}
