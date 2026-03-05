/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    monthly: 49,
    yearly: 490,
    features: ["1 Project", "Basic Analytics", "Email Support"],
    featured: false,
  },
  {
    name: "Pro",
    monthly: 99,
    yearly: 990,
    features: ["5 Projects", "Advanced Analytics", "Priority Support"],
    featured: true,
  },
  {
    name: "Enterprise",
    monthly: 199,
    yearly: 1990,
    features: ["Unlimited Projects", "Custom Analytics", "Dedicated Support"],
    featured: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" className="py-24 bg-[#F2F2F2] relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-[#8C1F33] mb-4">Pricing Plans</h2>
        <p className="text-[#732B1A] max-w-2xl mx-auto">
          Choose a plan that scales with your business. Switch between monthly and yearly billing.
        </p>

        {/* Billing Toggle */}
        <div className="mt-6 inline-flex items-center bg-[#8C1F33]/20 rounded-full p-1">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${
              billing === "monthly" ? "bg-[#8C1F33] text-[#F2E399]" : "text-[#8C1F33]"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${
              billing === "yearly" ? "bg-[#8C1F33] text-[#F2E399]" : "text-[#8C1F33]"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`relative flex flex-col p-8 rounded-2xl border ${
              plan.featured ? "bg-linear-to-br from-[#D9969B]/20 to-[#F2E399]/10 border-[#D9969B]" : "bg-[#F2F2F2] border-[#D9969B]"
            } hover:scale-105 hover:shadow-2xl transition-transform duration-300`}
          >
            {/* Featured Badge */}
            {plan.featured && (
              <div className="absolute top-4 right-4 bg-[#F2E399] text-[#8C1F33] px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                Featured
              </div>
            )}

            <h3 className="text-2xl font-semibold text-[#8C1F33] mb-2">{plan.name}</h3>
            <p className="text-[#732B1A] text-xl font-bold mb-4">
              ${billing === "monthly" ? plan.monthly : plan.yearly}
              <span className="text-sm font-normal text-[#732B1A]">/{billing}</span>
            </p>

            <ul className="flex-1 mb-6 space-y-2 text-[#732B1A]">
              {plan.features.map((feat, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2 text-[#8C1F33]">•</span> {feat}
                </li>
              ))}
            </ul>

            <button className="bg-[#8C1F33] hover:bg-[#D9969B] text-white px-6 py-3 rounded-lg transition transform hover:scale-105">
              Get Started
            </button>

            {/* Optional floating element */}
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#F2D399]/50 rounded-full animate-bounce"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}