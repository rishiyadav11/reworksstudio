import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-grow w-full min-h-[80vh] flex flex-col items-center justify-center bg-brand-cream text-brand-dark px-6 text-center select-none">
      <h1 className="font-anton text-[12vw] md:text-[8vw] leading-none tracking-widest uppercase text-brand-dark">
        404
      </h1>
      <h2 className="font-mono-roboto text-sm md:text-base font-bold tracking-widest uppercase mt-4 mb-8 text-brand-purple">
        System Node Not Found
      </h2>
      <p className="font-sans text-xs md:text-sm max-w-md text-brand-dark/70 leading-relaxed mb-12">
        The route you are looking for has been disconnected or does not exist in our current architecture. Let's get you back to safety.
      </p>
      
      <Link 
        href="/"
        className="inline-flex items-center gap-2 bg-brand-dark text-brand-cream px-8 py-4 font-mono-roboto text-[11px] font-bold tracking-widest uppercase hover:bg-brand-purple transition-colors border border-brand-dark"
      >
        <ArrowLeft className="w-4 h-4" /> Return to Base
      </Link>
    </div>
  );
}
