import { FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    const links = [
        { href: '/', icon: <FaFacebook /> },
        { href: '/', icon: <FaInstagram /> },
        { href: '/', icon: <FaTwitter /> },
    ]

    return (
        <footer className="flex flex-wrap gap-8 items-center justify-around text-white p-4 bg-[#1e4664]">
            <div className='max-w-[250px]'>
                <p> © {new Date().getFullYear()} FUNCOMARE. Todos los derechos reservados</p>
                <a href='tel:+57302123456' className='flex items-center'>
                    <FaPhone className='mr-2'/> <p>(+57) 302-123-456</p>
                </a>
                <a href='tel:+57302123456' className='flex items-center'>
                    <FaMailBulk className='mr-2'/> <p>funcomare@gmail.com</p>
                </a>
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.467447522186!2d-74.17529032689575!3d11.226983550725464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5aafb987609%3A0x37f86444cb36dd88!2sCentro%20Comercial%20Buenavista!5e0!3m2!1ses-419!2sco!4v1688517470367!5m2!1ses-419!2sco"
                    width="400"
                    height="200"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className='flex'>
                {
                    links.map(({ href, icon }) => (
                        <a key={href} href={href}
                            className="mr-4 text-2xl"
                        >
                            {icon}
                        </a>
                    ))
                }
            </div>
        </footer>
    )
}