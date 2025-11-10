import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube, FaGlobe, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-32 bg-black text-white py-16 relative overflow-hidden">

            {/* Gradient Blur Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-purple-600/10 to-transparent blur-3xl"></div>

            <div className="relative max-w-full mx-auto px-10">

                {/* ✅ Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 auto-rows-fr items-start">

                    {/* Logo + Text */}
                    <div className="w-full ">
                        <h2 className="text-3xl font-bold tracking-wide text-center sm:text-start">Reworks Studio</h2>
                        <p className="mt-4 opacity-80 text-center leading-relaxed max-w-sm md:text-start">
                            Reinventing Digital — We Build Presence. You Get Sales.
                        </p>
                        <p className="mt-4 text-sm opacity-70 text-center leading-relaxed max-w-sm md:text-start">
                            Reworks Studio is the best digital marketing agency in Narnaul, Haryana, specializing in social media marketing, paid ads, SEO, and website development for local businesses.
                        </p>
                    </div>

                    {/* Logo Image Cleanly Centered */}
                    <div className="flex justify-center w-full  items-center ">
                        <img 
                            src="/blogo.jpg"
                            alt="Reworks Studio Logo"
                            className="w-36 rounded-xl shadow-lg shadow-purple-600/10"
                        />
                    </div>

                    {/* Social Icons */}
                    <div className="w-full flex flex-col items-center">
                        <h3 className="text-xl font-semibold mb-10">Follow Us</h3>

                        <div className="flex items-center gap-10 text-2xl">

                            {/* Instagram */}
                            <a
                                href="https://instagram.com/reworks.studio"
                                target="_blank"
                                className="hover:text-pink-500 scale-150 transition-colors"
                            >
                                <FaInstagram />
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://youtube.com/@reworks_studio"
                                target="_blank"
                                className="hover:text-red-500 scale-150 transition-colors"
                            >
                                <FaYoutube />
                            </a>

                            {/* Twitter */}
                            <a
                                href="https://x.com/reworks_studio"
                                target="_blank"
                                className="hover:text-blue-400 scale-150 transition-colors"
                            >
                                <FaTwitter />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="my-10 h-px bg-white/10"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between text-sm opacity-80">
                    <p>© {new Date().getFullYear()} Reworks Studio. All rights reserved.</p>
                    <p className="mt-3 md:mt-0">
                        <a
                            className="text-purple-400 hover:underline"
                            target="_blank"
                            href="https://rishiyadav.me"
                        >
                            Crafted with passion by Reworks Studio
                        </a>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
