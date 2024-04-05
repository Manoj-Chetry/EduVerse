"use client"
import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css"
import Menu from "@/Components/Menu/Menu";
import { useState } from "react";
import Footer from "@/Components/Footer/Footer";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
