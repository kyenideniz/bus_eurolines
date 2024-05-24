import "./globals.css";

import type { Metadata } from "next";
import { Roboto_Serif } from 'next/font/google';

import { Toaster } from "@/components/ui/toaster"

const font = Roboto_Serif({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "BusEurolines",
  description: "BusEurolines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
