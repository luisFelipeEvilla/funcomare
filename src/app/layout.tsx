import CustomNavbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import { Providers } from "./providers";
import { InterFont } from "@/fonts";
import { Toaster } from "react-hot-toast";

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
      <body className={`${InterFont.className} flex flex-col`}>
        <Providers>
          <div className="flex max-w-screen min-h-screen flex-col">
            <CustomNavbar />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
