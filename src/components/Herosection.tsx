import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export function Herosection() {
  return (
    <BackgroundLines className="flex items-center justify-center min-h-[70vh] w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Reworks Studio, <br /> Crafting Visual Brilliance.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        We turn your content into captivating stories with expert editing, motion design, and branding — made for creators, startups, and agencies.
      </p>
    </BackgroundLines>
  );
}
