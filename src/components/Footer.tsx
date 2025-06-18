import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-cyan-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base text-gray-400">
            © {new Date().getFullYear()} Reworks studio. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-1">Created with ❤️ by <a target='_blank' className=' text-red-100 hover:underline' href="http://rishiyadav.me/">Reworks Studio</a></p>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61577148884596&rdid=hiJzoVniV5pZoGGF#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1877f2] transition"
          >
            <Facebook />
          </a>
          <a
            href="https://x.com/reworkstudio_1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1da1f2] transition"
          >
            <Twitter />
          </a>
          <a
            href="https://www.instagram.com/reworkstudio_1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e4405f] transition"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/in/rework-studio-279192370/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077b5] transition"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;