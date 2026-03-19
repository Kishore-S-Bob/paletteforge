import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PaletteForge — Free Colour Palette Generator",
  description: "Pick any colour and instantly generate 5 beautiful palette types. Export as CSS variables, Tailwind config, or SCSS. Free, no login required.",
  keywords: "colour palette generator, color palette, CSS color variables, Tailwind color palette, design tools, free palette generator, complementary colours, colour theory",
  openGraph: {
    title: "PaletteForge — Free Colour Palette Generator",
    description: "Pick any colour and instantly generate 5 beautiful palette types. Export as CSS variables, Tailwind config, or SCSS.",
    type: "website",
    url: "https://paletteforge.com",
    images: [
      {
        url: "https://paletteforge.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "PaletteForge Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PaletteForge — Free Colour Palette Generator",
    description: "Pick any colour and instantly generate 5 beautiful palette types.",
    images: ["https://paletteforge.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-brand-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 transition-colors`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
