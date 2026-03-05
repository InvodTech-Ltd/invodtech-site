/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");
      setSubmitted(true);
      e.target.reset();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#8C1F33] mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in <span className="text-[#F2E399]">Touch</span>
        </motion.h2>
        <motion.p
          className="text-[#732B1A] max-w-2xl mx-auto text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Have questions? Send us a message and we’ll respond promptly.
        </motion.p>
      </div>

      {submitted ? (
        <p className="text-green-600 font-semibold text-center text-xl">
          Thank you! Your message has been sent.
        </p>
      ) : (
        <motion.form
          className="max-w-3xl mx-auto px-6 grid gap-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-[#D9969B] bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-[#F2E399] transition"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-[#D9969B] bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-[#F2E399] transition"
            required
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="px-4 py-3 rounded-lg border border-[#D9969B] bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-[#F2E399] transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg border border-[#D9969B] bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-[#F2E399] transition resize-none"
            rows={5}
            required
          />
          {error && <p className="text-red-600 font-semibold">{error}</p>}
          <button
            type="submit"
            className="bg-[#8C1F33] hover:bg-[#D9969B] text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>
      )}
    </section>
  );
}