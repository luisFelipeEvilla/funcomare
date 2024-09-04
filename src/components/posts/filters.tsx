"use client";

import { useState } from "react";
import OrderBy from "../OrderBy";
import SearchBar from "../SearchBar";
import { Button, Modal, ModalContent } from "@nextui-org/react";
import { FaFilter } from "react-icons/fa";

export default function PostsFilters({
  searchParams,
}: {
  searchParams: {
    search: string;
    orderBy: string;
    orderDirection: "asc" | "desc";
  };
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between gap-4 w-full">
      <SearchBar
        search={searchParams.search || ""}
        orderBy={searchParams.orderBy || "created_at"}
        orderDirection={searchParams.orderDirection || "desc"}
      />
      <div className="md:hidden">
        <Button color="primary" onPress={() => setIsOpen(true)} startContent={<FaFilter />}>
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalContent className="h-[50vh]">
            <div className="p-4">
              <OrderBy
                orderBy={searchParams.orderBy || "created_at"}
                orderDirection={searchParams.orderDirection || "desc"}
                search={searchParams.search || ""}
              />
            </div>
          </ModalContent>
        </Modal>
      </div>
      <div className="hidden md:block">
        <OrderBy
          orderBy={searchParams.orderBy || "created_at"}
          orderDirection={searchParams.orderDirection || "desc"}
          search={searchParams.search || ""}
        />
      </div>
    </div>
  );
}
