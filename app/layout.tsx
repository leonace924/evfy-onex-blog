import "@/styles/globals.css";
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const graphik = localFont({
  src: [
    {
      path: "../fonts/GraphikRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GraphikRegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/GraphikMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/GraphikMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/GraphikSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/GraphikSemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/GraphikBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/GraphikBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={graphik.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
