'use client';

import { useState } from 'react';
import { api } from '../../trpc/react';
import { toast,ToastContainer } from 'react-toastify';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const contactMutation = api.contact.submit.useMutation({
    onSuccess: () => {
      toast.success('Message sent!');
      setForm({ name: '', email: '', phone: '', message: '' });
    },
    onError: () => toast.error('Failed to send message.'),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(form);
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-black via-[#0e0e0e] to-black text-white">
      <ToastContainer />
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          <span className='text-white'>📬</span> Reach Out. We’ll Respond Fast


        </h1>
      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-white text-transparent bg-clip-text">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/10 border border-cyan-400 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/10 border border-cyan-400 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/10 border border-cyan-400 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/10 border border-cyan-400 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition"
            disabled={contactMutation.status === 'pending'}
          >
            {contactMutation.status === 'pending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
