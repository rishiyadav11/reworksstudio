import Link from 'next/link';

export default function CtaSection() {
  return (
  <div className=" pb-20">
      <section className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-16 px-6 text-center rounded-3xl mx-auto max-w-5xl mt-20 shadow-xl">
      <h2 className="text-4xl font-bold mb-4">Ready to take the next step?</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Explore our flexible and affordable plans crafted to help you grow and succeed with ease. Whether you’re just starting out or scaling up, we’ve got you covered.
      </p>
      <Link
        href="/plans"
        className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-100 transition"
      >
        View Our Plans
      </Link>
    </section>
  </div>
  );
}
