'use client';

import { motion } from 'framer-motion';
import { Code, Video, PenTool, Brain, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Video className="w-8 h-8 text-cyan-400" />,
    title: 'Video Editing',
    description: 'From short-form Reels to full-scale Documentaries — we cut, polish, and deliver visuals that captivate.',
  },
  {
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    title: 'Creative Strategy',
    description: 'Brand storytelling that converts. We blend emotion with data to build campaigns that stick.',
  },
  {
    icon: <PenTool className="w-8 h-8 text-cyan-400" />,
    title: 'Script Writing',
    description: 'Hook your audience from the first second with scripts tailored for clarity, emotion, and virality.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
    title: 'App Development',
    description: 'We design and build seamless, modern apps for iOS and Android using React Native and cutting-edge tools.',
  },
  {
    icon: <Code className="w-8 h-8 text-cyan-400" />,
    title: 'Website Development',
    description: 'Pixel-perfect, blazing-fast websites built with modern tech like React, Tailwind, and Next.js.',
  },
  {
    icon: <PenTool className="w-8 h-8 text-cyan-400" />,
    title: 'Motion Graphics',
    description: 'Add energy to your videos with custom transitions, animated elements, and kinetic typography.',
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6 text-white bg-black" id="services">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          <span className='text-white'>🚀</span> Our Services
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We help creators and brands level up with our full suite of creative and tech services.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111111] border border-[#00ffff22] rounded-2xl p-6 shadow-cyan-500/10 hover:shadow-[0_0_20px_#00ffff33] transform hover:scale-[1.03] transition duration-300 cursor-pointer"
          >
            <div className="mb-4">{service.icon}</div>
            <h4 className="text-xl font-semibold text-cyan-400">{service.title}</h4>
            <p className="text-gray-300 mt-2 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
