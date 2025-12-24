import type { Metadata } from "next";
import "./globals.css";
import TopNavbar from "./components/TopNavbar";
import { Kanit } from "next/font/google";
import Footer from "./components/Footer";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NG",
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
        <TopNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
