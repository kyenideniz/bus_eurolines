import "./globals.css";

import type { Metadata } from "next";
import { Montserrat as Font } from 'next/font/google';

import { Toaster } from "@/components/ui/toaster"

const font = Font({
  weight: ['100','200','300', '400', '500','600','700'],
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
