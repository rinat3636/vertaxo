import type { Metadata } from "next";
import { Unbounded, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metrika } from "@/components/Metrika";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AboutSection } from "@/components/sections";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title:
    "VERTAXO — компьютерная помощь, 3D-печать и инженерные разработки по всей России",
  description:
    "VERTAXO — компьютерная помощь и защита данных, 3D-моделирование и печать, инженерные разработки по всей России. От идеи до готового решения. Получите консультацию.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text-primary">
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <AboutSection />
        <Footer />
        <Metrika />
      </body>
    </html>
  );
}
