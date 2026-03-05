/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const products = [
  {
    name: "SiteTrust",
    description: "Construction progress portal for transparency and trust.",
    status: "Available",
  },
  {
    name: "AgriERP",
    description: "Enterprise resource planning for agriculture businesses.",
    status: "Coming Soon",
  },
  {
    name: "Custom Software",
    description: "Tailored solutions to fit your business needs.",
    status: "Available",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#59313C] relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-[#ffff] mb-4">Our Products</h2>
        <p className="text-[#ffff] max-w-2xl mx-auto">
          Explore our suite of SaaS solutions built to streamline workflows and scale with your business.
        </p>
      </div>

      {/* Product Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="relative bg-linear-to-br from-[#8C1F33]/20 to-[#D9969B]/10 border border-[#D9969B] rounded-2xl p-8 flex flex-col hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            {/* Coming Soon Badge */}
            {product.status === "Coming Soon" && (
              <div className="absolute top-4 right-4 bg-[#F2E399] text-[#8C1F33] px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                {product.status}
              </div>
            )}

            <h3 className="text-2xl font-semibold text-[#ffff] mb-2">{product.name}</h3>
            <p className="text-[#ffff] flex-1">{product.description}</p>

            {/* Floating Mini Icon */}
            <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-[#F2D399]/50 rounded-full animate-bounce"></div>

            {/* CTA Button */}
            <button className="mt-6 bg-[#8C1F33] hover:bg-[#D9969B] text-white px-6 py-3 rounded-lg transition transform hover:scale-105">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}