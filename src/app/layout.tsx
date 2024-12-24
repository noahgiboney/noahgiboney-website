import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/navbar/navbar";
import { Kanit } from 'next/font/google'

const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Noah Giboney",
  description: "Noah Giboney's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
