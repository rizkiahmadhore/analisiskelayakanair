import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const gamaSerif = localFont({
  src: [
    {
      path: "./fonts/Gama-Serif-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gama-Serif-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gama-serif",
});

export const metadata: Metadata = {
  title: "Sistem Analisis Kelayakan Sumber Air Budidaya Udang Vaname",
  description: "Tentukan seberapa baik kualitas air Anda di sini!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gamaSerif.variable} antialiased`}> {children}</body>
    </html>
  );
}
