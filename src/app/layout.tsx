import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'


export const metadata = {
  title: 'FUNCOMARE',
  description: 'Fundacion construyendo mejores aprendizajes para tu región',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="overflow-y-auto">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
