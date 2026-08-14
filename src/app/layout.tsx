import type { Metadata } from "next";
import { Unbounded, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metrika } from "@/components/Metrika";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AboutSection } from "@/components/sections";
import { FloatingContact } from "@/components/FloatingContact";
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

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
  title: {
    default: `${SITE_NAME} — компьютерная помощь, 3D-печать и инженерные разработки в Москве и МО`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "MATRITSA — компьютерная помощь и защита данных, 3D-моделирование и печать, инженерные разработки в Москве и МО. Удалённо по всей России. От идеи до готового решения.",
  keywords: [
    "компьютерная помощь",
    "IT поддержка организаций",
    "защита данных",
    "3D печать",
    "3D моделирование",
    "инженерные разработки",
    "Москва",
    "Московская область",
    "удалённо по России",
    "FDM печать",
    "прототипирование",
    "серверы",
    "настройка сети",
  ],
  authors: [{ name: "ИП Петров Илья" }],
  creator: "MATRITSA",
  publisher: "MATRITSA",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    yandex: "yandex_verification_code",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", sizes: "any" },
      { url: "/favicon-16.png?v=5", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png?v=5", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png?v=5", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=5", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — компьютерная помощь, 3D-печать и инженерные разработки`,
    description: "IT поддержка организаций, 3D-моделирование и печать, инженерные разработки. Выезды по Москве и МО, удалённо по всей России.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 640,
        alt: "MATRITSA — От идеи до готового решения",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Россия" />
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text-primary">
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <AboutSection />
        <Footer />
        <Metrika />
        <FloatingContact />
      </body>
    </html>
  );
}
