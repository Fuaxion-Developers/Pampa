import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

import React from "react";
import Whatsapp from "@/components/Whatsapp/Whatsapp";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-0 ">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4 relative z-0">
        <div className="w-full relative max-w-7xl h-[84vh] bg-black/30 backdrop-blur-md rounded-3xl flex flex-col overflow-hidden shadow-lg scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent z-0">
          <main className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent scrollbar-thumb-rounded-xl relative z-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
