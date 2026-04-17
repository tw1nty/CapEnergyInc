import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Capital Energy Solutions — Microgrids for the real world",
  description:
    "Capital Energy Solutions develops microgrids, distributed energy, and EV charging infrastructure for commercial properties, multifamily, small business, and public sites.",
  metadataBase: new URL("https://www.capenergyinc.com"),
  openGraph: {
    title: "Capital Energy Solutions — Microgrids for the real world",
    description:
      "Resilient microgrids, solar + storage, intelligent controls, and EV charging — engineered for real sites.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
        {children}
      </body>
    </html>
  );
}
