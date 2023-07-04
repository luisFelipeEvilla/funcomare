export default function Navbar() {
    const links = [
        { label: 'Inicio', href: '/' },
        { label: 'Nosotros', href: '/nosotros' }
    ]
    return (
        <nav className="flex w-full items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">FUNCOMARE</span>
            </div>
            <div className="block lg:flex lg:items-center lg:w-auto">
                {links.map(({ label, href }) => (
                    <a
                        key={href}
                        href={href}
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        {label}
                    </a>
                ))}
            </div>
        </nav>
    )
}