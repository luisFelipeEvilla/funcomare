import CustomNavbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import { Providers } from "./providers";
import { IntertFont } from "@/fonts";

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
      <body
        className={`${IntertFont.className} bg-white min-h-screen flex flex-col`}
      >
        <Providers>
          <CustomNavbar />
          <main className="max-w-[1000px] grow mx-auto px-4">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
