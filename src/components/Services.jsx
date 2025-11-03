const SERVICES = [
  {
    title: "Social Media Management",
    img: "/services/smm.jpg",
  },
    {
    title: "Create Strategy for Your Business (Brand + Marketing)",
    img: "/services/strategy.jpg",
  },
  {
    title: "AI-Generated Videos (Reworks AI Studio)",
    img: "/services/ai.jpg",
  },
  {
    title: "Offer-Based Videos (Diwali, Sale, Festive)",
    img: "/services/offer.jpg",
  },
  {
    title: "Promo & Branding Videos",
    img: "/services/promo.jpg",
  },
  {
    title: "Testimonial & Review Videos",
    img: "/services/testimonial.jpg",
  },
  {
    title: "UGC Style Ads for Instagram",
    img: "/services/ugc.jpg",
  },
  {
    title: "Landing Page for Sales",
    img: "/services/landing.jpg",
  },
  {
    title: "Paid Ads Management (Meta + Google)",
    img: "/services/ads.jpg",
  },
  {
    title: "Reels Editing & Short-Form Content",
    img: "/services/reels.jpg",
  },
  {
    title: "SEO & Local SEO Optimization",
    img: "/services/seo.jpg",
  },
  {
    title: "Website Design & Development",
    img: "/services/website.jpg",
  },

  // ✅ Added new service

];


const Services = () => {
  return (
    <div id="services" className="text-white pt-20 pb-10">
      
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-sky-300">
          What We Offer
        </h1>
        <p className="mt-3 text-neutral-300">
          Premium digital services designed to grow your business.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-14 px-6 md:px-12">

        {SERVICES.map((service, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl">

            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full rounded-xl object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Desktop Hover Overlay */}
            <div className="
              absolute inset-0 bg-black/60 opacity-0 
              group-hover:opacity-100 
              transition duration-300 
              hidden md:flex items-center justify-center
              backdrop-blur-sm
            ">
              <span className="text-lg font-semibold shadow-xl">{service.title}</span>
            </div>

            {/* Mobile Always-visible Text */}
<div
  className="
    md:hidden 
    absolute top-0 left-1/2 transform -translate-x-1/2
    w-full px-3 py-2
    text-center text-lg font-bold
    text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500
    backdrop-blur-md bg-black/40      /* ✅ Glass effect */
    rounded-b-xl                      /* ✅ Smooth bottom curve */
  "
>
  {service.title}
</div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Services;
