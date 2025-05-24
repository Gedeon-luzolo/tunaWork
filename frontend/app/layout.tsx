import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppInstallProvider } from "../src/components/layout/AppInstallProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TunaWork - Plateforme Freelance Congolaise",
  description:
    "Connectez-vous avec les meilleurs freelancers congolais. TunaWork facilite la collaboration et garantit des paiements sécurisés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppInstallProvider>{children}</AppInstallProvider>
      </body>
    </html>
  );
}
