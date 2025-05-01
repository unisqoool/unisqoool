// app/layout.tsx
import { Nunito, Nunito_Sans, Podkova, Mansalva } from "next/font/google";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Providers } from "./providers";
import LayoutExtras from "@/components/layout-extras";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito-sans",
});

const podkova = Podkova({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-podkova",
});

const mansalva = Mansalva({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mansalva",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "UNisqoool",
  description: "Learn Without Limits, Achieve Beyond Boundaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer={true}
          type="text/javascript"
          src="https://dus-edventure-tech.odoo.com/im_livechat/loader/2"
        ></script>

        <script
          defer={true}
          type="text/javascript"
          src="https://dus-edventure-tech.odoo.com/im_livechat/assets_embed.js"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${nunitoSans.variable} ${podkova.variable} ${mansalva.variable} antialiased m-0 p-0 font-nunito-sans`}
      >
        <Providers>
          <Header />
          <main className="min-h-[60vh]">{children}</main>
          <LayoutExtras />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
