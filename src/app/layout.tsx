import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

/** Regular 400, Regular Italic, Bold 700, Bold Italic */
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

/** Nadpisy 700 · menu / accent 400 */
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Lýceum C. S. Lewisa — moderná stredná škola",
  description:
    "Digitálne zručnosti, podnikavosť a charakter. Projekty, prax, spätná väzba a reálne zadania.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`h-full scroll-smooth ${inter.variable} ${bricolageGrotesque.variable} ${bricolageGrotesque.className}`}
    >
      <body className="min-h-full font-sans antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
