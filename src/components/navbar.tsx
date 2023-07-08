"use client";
import Image from "next/image";
import { useState } from "react";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { label: 'Inicio', href: '/', icon: FaHome },
        { label: 'Misión', href: '/mission' },
        { label: 'Visión', href: '/vission' },
        { label: 'Fundadores', href: '/founders' },
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
                <a href="/" className="mr-6">
                    <Image
                        className="w-[70px] h-[50px] lg:w-[100px] lg:h-[60px] object-fit"
                        src="/images/logo.png"
                        width={100}
                        height={50}
                        alt="FUNCOMARE"
                    />
                </a>
                <div className={`${!isMenuOpen ? 'hidden' : ''} 
                    flex flex-col gap-2 w-full h-screen
                    lg:h-fit lg:flex lg:flex-row lg:items-center lg:w-auto
                    `}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`
                            border-b text-center flex items-center justify-center text-2xl hover:text-blue-400 mr-4 pb-2
                            lg:mt-0 lg:border-b-0 `}
                        >   
                            { link.icon && <link.icon className="inline-block mr-2"/>}                        
                            <p>{link.label}</p>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}