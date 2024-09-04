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

export default function SearchBar({ search }: { search: string }) {
  const [searchTerm, setSearchTerm] = useState(search);
  const router = useRouter();

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      console.log("Debounced search:", value);
      router.push(`/news?search=${value || ""}`);
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  return (
    <div className="w-full max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Buscar noticias por titulo o contenido..."
        className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
