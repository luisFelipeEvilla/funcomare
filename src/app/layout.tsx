import CustomNavbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { Providers } from "./providers";

export const metadata = {
  title: "FUNCOMARE",
  description: "Fundacion construyendo mejores aprendizajes para tu región",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Providers>
        <body className="h-screen flex flex-col overflow-y-auto">
          <CustomNavbar />
          <div className="flex-auto max-w-[1000px] mx-auto">{children}</div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
