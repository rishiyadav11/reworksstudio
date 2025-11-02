import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useGSAP(() => {
    const split = new SplitText(".hero-title", { type: "chars" });
    split.chars.forEach((c) => c.classList.add("text-gradient"));

    gsap.from(split.chars, {
      opacity: 0,
      y: 80,
      stagger: 0.04,
      duration: 1.4,
      ease: "expo.out",
    });

    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "expo.out",
      delay: 0.4,
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-end px-10 pb-20"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
        src="/videos/main1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="hero-title text-5xl flex justify-start md:text-7xl font-bold leading-[1.1] text-white">
          Reworks Studio
        </h1>

        <p className="hero-subtitle text-xl md:text-2xl text-white/90 mt-4 max-w-xl">
          Where Ideas Transform Into High-Converting Digital Experiences.
        </p>

        <a
          href="#plans"
          className="inline-block mt-10 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition"
        >
          Explore plans
        </a>
      </div>
    </section>
  );
};

export default Hero;
