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
  title: "Lead Squeeze Funnel",
  description: "Template lead squeeze funnel website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${poppins.variable} ${poppins.className}`}>
      <body className="h-screen flex justify-center bg-zinc-900 text-white">
        <section className="w-[75%] max-w-350">{children}</section>
      </body>
    </html>
  );
}
