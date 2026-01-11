
import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Devasha's Clinic",
  description: "Devasha's Clinic - Your Health, Our Priority",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
