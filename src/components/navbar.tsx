"use client";
import Image from "next/image";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { quicksand } from "@/app/fonts";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Misión", href: "/mission" },
    { label: "Visión", href: "/vission" },
    { label: "Noticias", href: "/news" },
  ];
  return (
    <Navbar position="static" className="bg-white " isBordered>
      <NavbarMenuToggle className="lg:hidden" />
      <NavbarContent
        className={`lg:flex justify-between flex-wrap items-center`}
      >
        <NavbarBrand>
          <Link href="/" className="mr-6">
            <Image
              className="w-[70px] h-[50px] lg:w-[70px] lg:h-[50px] object-fit"
              src="/images/logo.png"
              width={100}
              height={50}
              alt="FUNCOMARE"
            />
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden lg:flex ">
          {links.map((link, index) => (
            <NavbarItem key={`navbar-item-${index}`}>
              <Link
                href={link.href}
                className={`
              border-b text-center flex items-center justify-center text-2xl hover:text-blue-400 mr-4 pb-2
              lg:mt-0 lg:border-b-0 lg:text-lg 
              `}
              >
                {link && <link className="inline-block mr-2" />}
                <p>{link.label}</p>
              </Link>
            </NavbarItem>
          ))}

          <ContactButton />
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu>
        {links.map((link, index) => (
          <NavbarMenuItem key={`menu-item-${index}`}>
            <Link
              href={link.href}
              className={`
                ${quicksand.className}
                flex items-center text-2xl hover:text-blue-400 mr-4 pb-2
                lg:mt-0 lg:border-b-0 lg:text-lg`}
            >
              {link && <link className="inline-block mr-2" />}
              <p>{link.label}</p>
            </Link>
          </NavbarMenuItem>
        ))}

        <ContactButton />
      </NavbarMenu>
    </Navbar>
  );

  function ContactButton() {
    return (
      <Link
        href={"#contact"}
        className="text-sm px-3 md:px-5 py-2 bg-blue-600 text-white 
                font-bold hover:opacity-95 hover:scale-105 rounded-md"
      >
        Contacto
      </Link>
    );
  }
}
