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
    default: "steep — your storefront, this weekend",
    template: "%s — steep",
  },
  description:
    "A finished Next.js storefront. Sell digital downloads or ship physical goods. Cart, checkout, admin, email, shipping, inventory — all wired. Pay once, own the code, ship today.",
  metadataBase: new URL("https://buy.steep.shashankthattai.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "steep",
    title: "steep — your storefront, this weekend",
    description:
      "Finished Next.js storefront. Digital downloads or physical goods. Cart, checkout, admin, email, shipping, inventory — all wired. Pay once. Own it.",
  },
  twitter: {
    card: "summary_large_image",
    title: "steep — your storefront, this weekend",
    description:
      "Finished Next.js storefront. Digital or physical. Pay once. Own it.",
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
