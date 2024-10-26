import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import React from "react";
import Whatsapp from "@/components/Whatsapp/Whatsapp";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Whatsapp/>
      <Footer />
    </div>
  );
}
