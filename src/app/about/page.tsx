'use client';

import Image from 'next/image';

const teamMembers = [
  {
    name: 'Rishi yadav',
    role: 'Full Stack Developer',
    image: '/members/developer.jpg',
    description: 'Rishi builds scalable applications and writes clean, elegant code.',
  },
  {
    name: 'Harsh saini',
    role: 'SEO Expert',
    image: '/members/seo.jpg',
    description: 'Harsh ensures we rank on top with smart keywords and strategies.',
  },
  {
    name: 'sahil sagwan',
    role: 'Video Editor',
    image: '/members/editor.jpg',
    description: 'Sahil adds life to visuals with smooth edits and engaging effects.',
  },
  {
    name: 'Anuj Bhardwaj',
    role: 'UI/UX Designer',
    image: '/members/designer.jpg',
    description: 'Anuj crafts stunning user interfaces that feel intuitive and modern.',
  },
  {
    name: 'Rahul Rajput',
    role: 'Social Media Manager',
    image: '/members/market.jpg',
    description: 'Rahul keeps our audience engaged with creative content and trends.',
  }
];

export default function AboutUsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Meet the <span className="text-[#00FFFF]">Reworks Studio</span> Team
        </h2>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-xl mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-cyan-400 text-center mb-2">{member.role}</p>
              <p className="text-sm text-center text-gray-300">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
