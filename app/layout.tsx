import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Cinelista",
  description: "No Cinelista, você encontra tudo sobre o mundo do cinema, filmes em cartaz, trailers, notícias e muito mais!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
