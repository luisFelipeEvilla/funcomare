"use client";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";

// Debounce function
const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export default function SearchBar({
  search,
  orderBy,
  orderDirection,
}: {
  search: string;
  orderBy: string;
  orderDirection: string;
}) {
  const [searchTerm, setSearchTerm] = useState(search);
  const router = useRouter();

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      console.log("Debounced search:", value);
      router.push(
        `/news?search=${
          value || ""
        }&orderBy=${orderBy}&orderDirection=${orderDirection}`
      );
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  return (
    <Input
      type="text"
      placeholder="Buscar noticias por titulo o contenido..."
      className="w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      classNames={{
        base: "max-w-full",
        mainWrapper: "h-10",
        input: "text-small",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 hover:bg-default-400/30 dark:hover:bg-default-500/30 rounded-lg",
      }}
      startContent={
        <svg
          className="text-default-400 dark:text-default-300 text-slate-400 pointer-events-none flex-shrink-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
