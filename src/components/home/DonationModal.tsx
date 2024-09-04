"use client";

import {
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { FaBan, FaCopy } from "react-icons/fa";
export default function DonationModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const items = [
    {
      name: "Bancolmbia",
      account: "3005927444",
      accountType: "Cuenta de ahorros",
      icon: <img src="/icons/bancolombia.png" className="w-5 h-5" />,
    },
  ];
  return (
    <>
      <Button
        className="bg-transparent text-blue-500"
        color="primary"
        onClick={onOpen}
      >
        Ver más
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Realiza una donación</ModalHeader>
          <ModalBody>
            <p>
              Puedes realizar una donación a través de la siguiente plataforma
              de donaciones.
            </p>
            <div className="flex flex-col gap-2">
              {items.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    {item.icon}
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <p>{item.accountType}</p>
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-transparent text-blue-500 flex items-center gap-2"
                        onClick={() => {
                          navigator.clipboard.writeText(item.account);
                          toast.success("Copiado al portapapeles");
                        }}
                      >
                        <p>{item.account}</p>
                        <FaCopy className="text-blue-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={onClose}>
              Cancelar
            </Button>
            <Button color="primary" onClick={onClose}>
              Donar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
