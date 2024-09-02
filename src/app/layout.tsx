import CustomNavbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import { Providers } from "./providers";
import { IntertFont } from "@/fonts";

export const metadata = {
  title: "Funcomare",
  description: "Fundacion construyendo mejores aprendizajes para tu región",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${IntertFont.className} bg-white flex flex-col`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <CustomNavbar />
            <main className="grow mx-auto">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
