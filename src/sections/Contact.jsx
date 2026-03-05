/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-linear-to-br from-[#F2D399]/20 to-[#F2E399]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#8C1F33] mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Build Something <span className="text-[#F2E399]">Amazing</span> Together
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-[#732B1A] max-w-2xl mx-auto text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Reach out to us for demos, custom software solutions, or any questions about our SaaS products.
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.form
        className="max-w-3xl mx-auto px-6 grid gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-3 rounded-lg border text-[#F2D399] border-[#D9969B] bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-[#F2E399] transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-3 rounded-lg border text-[#F2D399] border-[#D9969B] bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-[#F2E399] transition"
        />
        <textarea
          placeholder="Your Message"
          className="px-4 py-3 rounded-lg border text-[#F2D399] border-[#D9969B] bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-[#F2E399] transition resize-none"
          rows={5}
        />
        <button
          type="submit"
          className="bg-[#8C1F33] hover:bg-[#D9969B] text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
        >
          Send Message
        </button>
      </motion.form>

      {/* Optional Floating Shapes */}
      <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#F2E399]/30 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#D9969B]/30 rounded-full animate-pulse"></div>
    </section>
  );
}