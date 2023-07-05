"use client";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { label: 'Inicio', href: '/' },
        { label: 'Nosotros', href: '/nosotros' }
    ]
    return (
        <nav className="relative p-6 lg:border-b">
            <button className="lg:hidden absolute top-2 right-0 p-4" 
                onClick={() => setIsMenuOpen(!isMenuOpen)} >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <div className={`lg:flex items-center justify-between flex-wrap`}>
                <div className="flex items-center flex-shrink-0 mr-6">
                    <span className="font-semibold text-xl tracking-tight">FUNCOMARE</span>
                </div>
                <div className={`${!isMenuOpen ? 'hidden' : ''} block lg:flex lg:items-center lg:w-auto`}>
                    {links.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            className="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-400 mr-4"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}