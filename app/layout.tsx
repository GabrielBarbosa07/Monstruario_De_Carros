import { Suspense } from "react";
import { Footer, Navbar } from "../components";
import "./globals.css";
import type { Metadata } from "next";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Conheça o melhor catálago de carros do mundo!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="relative">
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
