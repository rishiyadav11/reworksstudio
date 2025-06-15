'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Creative-First Approach',
    description: 'We don’t just edit — we craft stories that emotionally connect with your audience.',
  },
  {
    title: 'Fast Turnaround Time',
    description: 'We value your time. Expect quality edits delivered quickly without compromise.',
  },
  {
    title: 'Unlimited Revisions',
    description: 'Your satisfaction matters. We iterate until your vision comes to life — no limits.',
  },
  {
    title: 'Flexible Plans',
    description: 'From solo creators to agencies, our pricing adapts to your scale and workflow.',
  },
];

const Whyus = () => {
  return (
    <section className="py-20 text-white px-6" id="features">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          <span className='text-white'>✨</span> Why Brands Choose Reworks
        </h2>
        <p className="text-gray-400 mt-4">
          Built to elevate your brand with creativity, precision, and passion.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4 items-start bg-[#111111] border border-[#00ffff22] rounded-xl p-6 backdrop-blur-lg shadow-cyan-500/10 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_25px_#00ffff44] cursor-pointer"
          >
            <CheckCircle2 className="text-cyan-400 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-400">
                {item.title}
              </h4>
              <p className="text-gray-300 mt-1 text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Whyus;
