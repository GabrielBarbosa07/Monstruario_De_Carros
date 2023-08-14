import { Footer, Navbar } from "../components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Conheça o melhor carro do mundo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
