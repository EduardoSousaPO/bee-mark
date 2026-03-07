import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipLink } from "@/components/ui/SkipLink";
import { IMAGES } from "@/lib/constants/images";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://beemark.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Beemark — A gente entra quando o marketing falha",
    template: "%s | Beemark",
  },
  description:
    "Estratégia, posicionamento e resultado. Operação integrada de crescimento: posicionamento, tráfego, IA e CRM.",
  keywords: [
    "marketing",
    "crescimento",
    "leads",
    "tráfego pago",
    "CRM",
    "posicionamento",
    "estratégia",
  ],
  icons: {
    icon: IMAGES.favicon,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Beemark",
    title: "Beemark — A gente entra quando o marketing falha",
    description:
      "Estratégia, posicionamento e resultado. Operação integrada de crescimento.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beemark — A gente entra quando o marketing falha",
    description: "Estratégia, posicionamento e resultado.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SkipLink href="#main-content">Pular para o conteúdo</SkipLink>
        <SiteHeader />
        <div id="main-content" className="flex-1 pt-20" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
