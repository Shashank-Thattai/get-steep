import type { Metadata } from "next";
import { Inter_Tight, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "steep — your digital-product store, this weekend",
    template: "%s — steep",
  },
  description:
    "A finished Next.js storefront for selling digital products. Cart, checkout, admin, email — all wired. Pay once, own the code, ship today.",
  metadataBase: new URL("https://buy.steep.shashankthattai.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "steep",
    title: "steep — your digital-product store, this weekend",
    description:
      "A finished Next.js storefront — cart, checkout, admin, email all wired. Pay once. Own it. Ship today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "steep — your digital-product store, this weekend",
    description:
      "Finished Next.js storefront. Cart, checkout, admin, email — wired. Pay once. Own it.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
