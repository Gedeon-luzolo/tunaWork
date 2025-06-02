import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "./swiper-styles.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TunaWork presentation",
  description:
    "Presentation du projet TunaWork, une solution SaaS innovante pour la mise en relation entre freelancers et clients à Kinshasa. Découvrez notre plateforme qui révolutionne le marché des services freelance en République Démocratique du Congo.",

  authors: [{ name: "TunaWork Team" }],
  creator: "Gedeon luzolo",

  openGraph: {
    type: "website",
    locale: "fr_CD",
    url: "https://tunawork.com",
    title: "TunaWork Presentation",
    description:
      "Presentation du projet TunaWork - Une solution SaaS innovante pour la mise en relation entre freelancers et clients à Kinshasa. Découvrez notre plateforme qui révolutionne le marché des services freelance en République Démocratique du Congo.",
    siteName: "TunaWork",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "TunaWork - Plateforme de services freelance en RDC",
        type: "image/png",
      },
    ],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
