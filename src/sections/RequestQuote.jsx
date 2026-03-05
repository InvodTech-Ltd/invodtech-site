/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company.value,
      requirements: e.target.requirements.value,
    };

    try {
      const res = await fetch("/api/request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send request");
      setSubmitted(true);
      e.target.reset();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section
      id="request-quote"
      className="relative py-24 bg-linear-to-br from-[#F2D399]/20 to-[#F2E399]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#8C1F33] mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Request a <span className="text-[#F2E399]">Quote</span>
        </motion.h2>
        <motion.p
          className="text-[#732B1A] max-w-2xl mx-auto text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Share your requirements and we’ll provide a tailored solution for your business.
        </motion.p>
      </div>

      {submitted ? (
        <p className="text-green-600 font-semibold text-center text-xl">
          Thank you! We will contact you shortly.
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
            name="company"
            type="text"
            placeholder="Company / Organization"
            className="px-4 py-3 rounded-lg border border-[#D9969B] bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-[#F2E399] transition"
          />
          <textarea
            name="requirements"
            placeholder="Project Requirements / Details"
            className="px-4 py-3 rounded-lg border border-[#D9969B] bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-[#F2E399] transition resize-none"
            rows={5}
            required
          />
          {error && <p className="text-red-600 font-semibold">{error}</p>}
          <button
            type="submit"
            className="bg-[#8C1F33] hover:bg-[#D9969B] text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Submit Request
          </button>
        </motion.form>
      )}

      <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#F2E399]/30 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#D9969B]/30 rounded-full animate-pulse"></div>
    </section>
  );
}