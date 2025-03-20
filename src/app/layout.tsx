import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noah Giboney",
  description: "Noah Giboney's Website",
  icons: {
    icon: "/profilepicture1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
