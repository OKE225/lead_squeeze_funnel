import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import "dotenv/config";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Zbuduj Portfolio Frontendowe",
  description:
    "Zbuduj Portfolio Frontendowe w 48 Godzin i Zdobądź Lepszą Pracę. Lista projektów Frontend ze wskazówkami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${poppins.variable} ${poppins.className}`}>
      <body className="h-screen flex justify-center bg-zinc-900 text-white">
        <section className="w-[75%] max-lg:w-[95%] max-w-350">
          {children}
        </section>
      </body>
    </html>
  );
}
