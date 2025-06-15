'use client';

import { CheckCircle } from 'lucide-react';

const plans = [
  {
    category: '🌐 Custom Website Development',
    tiers: [
      {
        name: 'Starter Custom Site',
        priceRange: '₹9,999 – ₹14,999',
        features: ['1–3 Pages', 'Responsive UI', 'Contact Form', 'Basic SEO'],
      },
      {
        name: 'Business Custom Site',
        priceRange: '₹15,000 – ₹29,999',
        features: ['5–7 Pages', 'UI/UX + Animations', 'SEO + Speed Optimization'],
      },
      {
        name: 'Full Stack Web App',
        priceRange: '₹30,000 – ₹49,999',
        features: ['10+ Pages', 'Admin Panel', 'Authentication', 'CMS/DB Integration'],
      },
    ],
  },
  {
    category: '💻 WordPress Website',
    tiers: [
      {
        name: 'Basic WP Site',
        priceRange: '₹4,999 – ₹7,999',
        features: ['Theme Setup', 'Basic Plugins', 'Blog + Contact'],
      },
      {
        name: 'Business WP Site',
        priceRange: '₹8,000 – ₹14,999',
        features: ['Premium Theme', 'Speed + Security', 'Custom Pages'],
      },
      {
        name: 'WooCommerce Site',
        priceRange: '₹15,000 – ₹24,999',
        features: ['Product Pages', 'Payment Gateway', 'Order Management'],
      },
    ],
  },
  {
    category: '🛒 Shopify Development',
    tiers: [
      {
        name: 'Basic Shopify Store',
        priceRange: '₹9,999 – ₹14,999',
        features: ['Theme Setup', 'Navigation + Products', 'Responsive Design'],
      },
      {
        name: 'Branded Storefront',
        priceRange: '₹15,000 – ₹29,999',
        features: ['Custom Branding', 'Apps Integration', 'SEO Optimization'],
      },
      {
        name: 'Advanced Shopify',
        priceRange: '₹30,000 – ₹45,000',
        features: ['Custom Features', 'Automations', 'Store Optimization'],
      },
    ],
  },
  {
    category: '📱 App Development',
    tiers: [
      {
        name: 'MVP App',
        priceRange: '₹25,000 – ₹34,999',
        features: ['iOS + Android', '2–3 Screens', 'React Native Base'],
      },
      {
        name: 'Growth App',
        priceRange: '₹35,000 – ₹49,999',
        features: ['Push Notifications', 'User Auth', 'API Connected'],
      },
      {
        name: 'Enterprise App',
        priceRange: '₹50,000 – ₹75,000',
        features: ['Complex Features', 'Admin Panel', 'Backend + Support'],
      },
    ],
  },
  {
    category: '🎬 Video Editing',
    tiers: [
      {
        name: 'Creator Pack',
        priceRange: '₹4,000 – ₹6,000/mo',
        features: ['5 Videos/mo', 'Basic Cuts', '1 Revision Each'],
      },
      {
        name: 'Growth Pack',
        priceRange: '₹7,000 – ₹11,000/mo',
        features: ['15 Videos/mo', 'Motion Graphics', '2 Revisions'],
      },
      {
        name: 'Agency Pack',
        priceRange: '₹15,000 – ₹25,000/mo',
        features: ['Unlimited Requests', 'Dedicated Editor', 'Fast Delivery'],
      },
    ],
  },
  {
    category: '🧠 Other Creative Services',
    tiers: [
      {
        name: 'Script Writing',
        priceRange: '₹999 – ₹1,499/script',
        features: ['Up to 2 mins', 'Brand-Specific', 'Quick Delivery'],
      },
      {
        name: 'Creative Strategy',
        priceRange: '₹2,000 – ₹5,000/project',
        features: ['Campaign Strategy', 'Social Playbook', 'Brand Voice'],
      },
      {
        name: 'Motion Graphics',
        priceRange: '₹499 – ₹1,499/video',
        features: ['Text Animations', 'Logo Reveal', 'Transitions'],
      },
    ],
  },
];

const Page = () => {
  return (
    <section className="py-28 px-6 text-white bg-black backdrop-blur-sm" id="plans">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          <span className='text-white'>💼</span> Our Plans
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Transparent pricing across all our services – customized to your growth stage.
        </p>
      </div>

      <div className="space-y-24 max-w-6xl mx-auto">
        {plans.map((service, i) => (
          <div key={i}>
            <h3 className="text-2xl md:text-3xl font-semibold text-center  text-cyan-400 mb-10">
              {service.category}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.tiers.map((plan, j) => (
                <div
                  key={j}
                  className="bg-white/10 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-6 shadow-[0_8px_30px_#00ffff33] hover:shadow-[0_0_25px_#00ffff44] transition-all duration-300 transform hover:scale-[1.03] cursor-pointer"
                >
                  <h4 className="text-xl font-semibold text-white">{plan.name}</h4>
                  <p className="text-cyan-300 text-lg mt-2 font-medium">{plan.priceRange}</p>
                  <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                    {plan.features.map((feat, k) => (
                      <li key={k} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
