'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ananya Sharma',
    title: 'Product Manager at ZenTech',
    text: 'Reworks Studio exceeded our expectations. Their team is creative, responsive, and truly cares about the final product.',
    avatar: '/members/seo.jpg',
  },
  {
    name: 'Rahul Verma',
    title: 'Founder at CodeCraft',
    text: 'From branding to design, they handled everything with professionalism. Our users love the new look!',
    avatar: '/members/market.jpg',
  },
  {
    name: 'Emily Tan',
    title: 'Social Media Lead at Nova',
    text: 'Their social media strategy helped us 3x our engagement in just 2 months. Reworks knows how to deliver!',
    avatar: '/members/developer.jpg',
  },
  {
    name: 'Jay Patel',
    title: 'CEO at CloudLabs',
    text: 'What stood out was their communication and commitment. They’re more like partners than a service provider.',
    avatar: '/members/market.jpg',
  },
];

export default function TestimonialsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          What Our <span className="text-[#00FFFF]">Clients Say</span>
        </h2>
        <p className="text-gray-400 mb-12">Real words from real partners we've worked with.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border border-cyan-400"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
              <p className="text-sm text-gray-200">“{t.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
