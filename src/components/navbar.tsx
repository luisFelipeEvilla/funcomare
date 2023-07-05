"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { label: 'Inicio', href: '/' },
        { label: 'Nosotros', href: '/nosotros' }
    ]
    return (
        <nav className="relative py-2 lg:border-b">
            <button className="lg:hidden absolute top-2 right-0 p-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)} >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <div className={`lg:flex justify-between flex-wrap items-center`}>
                <div className="mr-6">
                    <Image
                        className="w-[70px] h-[50px] lg:w-[100px] lg:h-[60px] object-fit"
                        src="/images/logo.png"
                        width={100}
                        height={50}
                        alt="FUNCOMARE"
                    />
                </div>
                <div className={`${!isMenuOpen ? 'hidden' : ''} 
                    block w-full h-screen
                    lg:h-fit lg:flex  lg:items-center lg:w-auto`}>
                    {links.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            className="text-center text-xl block lg:inline-block lg:mt-0 hover:text-blue-400 mr-4"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}