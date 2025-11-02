import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";

const ContactPopup = ({ isOpen, onClose, planName }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID1,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent! We'll contact you soon.");
          setLoading(false);
          onClose();
        },
        () => {
          toast.error("Failed to send message. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-black border border-white/20 p-6 rounded-2xl w-11/12 max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Contact for {planName}
        </h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input type="hidden" name="plan" value={planName} />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-white/70 hover:text-white text-sm w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;
 










