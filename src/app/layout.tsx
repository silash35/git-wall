import "@/src/globals.css";

import { Metadata, Viewport } from "next";

import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export const viewport: Viewport = {
  themeColor: "#000510",
};

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "GitWall",
  description: "Um site que apresenta os participantes de um curso de Git ministrado por Silas.",
  authors: [{ name: "Silas Henrique Alves Araújo" }],
  metadataBase: new URL(process.env.SITE_URL as string),
  icons: {
    shortcut: "/favicon.ico",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html className={ubuntu.className} dir="ltr" lang="pt-BR">
    <head>
      <meta content="text/html" httpEquiv="content-type" />
    </head>
    <body className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1"> {children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
