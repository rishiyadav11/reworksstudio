import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

gsap.registerPlugin(SplitText);

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const titleSplit = new SplitText("#contact h2", { type: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
        },
      });

      tl.from(titleSplit.words, { opacity: 0, yPercent: 100, stagger: 0.05 })
        .from("#contact p", { opacity: 0, y: 20 })
        .from("#contact form *", {
          opacity: 0,
          y: 30,
          stagger: 0.08,
          clearProps: "all", // ✅ Removes inline styles so button is clickable
        });
    });
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message!");
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="mt-48 py-24 relative select-none">

      {/* ✅ Background Decoration */}
      <img src="/images/footer-right-leaf.png" alt="" className="absolute right-0 top-0 opacity-30" />
      <img src="/images/footer-left-leaf.png" alt="" className="absolute left-0 bottom-0 opacity-30" />

      <div className="content max-w-2xl mx-auto text-center px-6 relative z-20">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-4 text-white tracking-tight">
          Connect With Us
        </h2>

        <h3 className="text-xs text-white   mb-10">
          Tell us what you're working on — we reply within 24 hours.
        </h3>

        {/* ✅ BEAUTIFUL UI FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0px_0px_60px_rgba(255,255,255,0.1)]"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            required
            className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white/40 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
            className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white/40 outline-none"
          />

          <textarea
            placeholder="Your Message"
            name="message"
            required
            rows="5"
            className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white/40 outline-none"
          />

          {/* ✅ Clickable, Touch-Friendly, With Loader */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-semibold text-lg shadow-xl transition 
            ${loading ? "bg-white/50 text-black/60" : "bg-white text-black hover:bg-gray-200"}
          `}
          >
            {loading ? "Connecting..." : "Connect"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
