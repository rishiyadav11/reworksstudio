import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000070",
        backdropFilter: "blur(20px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    // ✅ Removed px-6 → fixed left/right alignment
    <nav className="fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300">

      {/* ✅ Full width container */}
      <div className="w-full flex justify-between items-center px-5 md:px-8 ">

        {/* ✅ Logo (EXTREME LEFT) */}
        <a href="#home" className="flex items-center gap-3">
          <img src="/blogo.jpg" className="h-10 w-10 rounded-xl" alt="logo" />
          <p className="text-white font-bold tracking-wide text-xl">
            Reworks®
          </p>
        </a>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-purple-400 transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* ✅ Mobile Toggle (EXTREME RIGHT) */}
        <button
          className="md:hidden text-white text-3xl p-2 rounded-xl
                     bg-white/10 backdrop-blur-xl
                     hover:bg-white/20 transition-all"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* ✅ Modern Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 top-full w-full
          backdrop-blur-2xl bg-black/60
          transition-all duration-500 ease-out
          border-t border-white/10
          shadow-[0_8px_20px_rgba(0,0,0,0.4)]
          rounded-b-3xl
          transform origin-top
          ${open ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-0 -translate-y-3"}
        `}
      >
        <ul className="flex flex-col items-center text-white text-lg py-8 px-10 gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block tracking-wide font-medium 
                           hover:text-purple-300 transition-all duration-200
                           hover:scale-105"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
