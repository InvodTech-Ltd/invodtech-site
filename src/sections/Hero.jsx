/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import HeroIllustration from "../assets/hero-illustration.png"; // Replace with your illustration

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #8C1F33 0%, #732B1A 100%)"
      }}
    >
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left z-10">
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#F2E399] leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building <span className="text-[#F2D399]">trust-driven</span> SaaS solutions
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-[#F2F2F2] text-lg md:text-xl max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          From construction progress portals to AgriERP and custom software, we deliver intuitive SaaS products that scale with your business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#pricing"
            className="bg-[#F2E399] hover:bg-[#F2D399] text-[#732B1A] font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105"
          >
            View Plans
          </a>
          <a
            href="#contact"
            className="border border-[#F2E399] hover:border-[#F2D399] text-[#F2E399] hover:text-[#F2D399] font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105"
          >
            Request Demo
          </a>
        </motion.div>
      </div>

      {/* Illustration */}
      <motion.div
        className="md:w-1/2 mb-12 md:mb-0 flex justify-center z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <img
          src={HeroIllustration}
          alt="Hero Illustration"
          className="w-full max-w-lg animate-float"
        />
      </motion.div>

      {/* Background floating gradient animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "loop" }}
        style={{
          background: "radial-gradient(circle at 30% 30%, #F2D399 0%, #8C1F33 70%)",
          opacity: 0.2,
        }}
      />

      {/* Optional Enhancements Already Considered */}
      {/* - Animated SVG shapes floating behind illustration */}
      {/* - Typewriter effect on key headline words */}
      {/* - Parallax effect for illustration on scroll */}
      {/* - Animated CTA underline on hover */}
      {/* - Slight text shadow for headline for depth */}
    </section>
  );
}