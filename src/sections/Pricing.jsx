import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthly: 6370,
    features: ["Single Platform Access", "Basic Support", "Cloud Hosting"],
  },
  {
    name: "Professional",
    monthly: 12870,
    features: ["Multiple Platforms", "Priority Support", "Analytics Dashboard"],
  },
  {
    name: "Enterprise",
    monthly: null, // Custom
    features: ["All Platforms", "Dedicated Support", "Custom Integrations", "SLA & Security"],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly"); // monthly or yearly

  const toggleBilling = () => {
    setBilling(billing === "monthly" ? "yearly" : "monthly");
  };

  return (
    <section id="pricing" className="py-24 bg-[#732B1A]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#F2E399] mb-4">Pricing & Plans</h2>
        <p className="text-[#F2D399] max-w-3xl mx-auto mb-10">
          Flexible subscription plans to fit the needs of startups, SMEs, and enterprise clients.
        </p>

        {/* Toggle */}
        <div className="flex justify-center mb-12 items-center gap-4">
          <span className={`cursor-pointer ${billing === "monthly" ? "text-white font-semibold" : "text-[#F2D399]"}`} onClick={() => setBilling("monthly")}>Monthly</span>
          <div
            onClick={toggleBilling}
            className="w-12 h-6 bg-[#8C1F33] rounded-full relative cursor-pointer flex items-center"
          >
            <div
              className={`w-6 h-6 bg-[#F2E399] rounded-full shadow-md transform transition-transform ${billing === "yearly" ? "translate-x-6" : "translate-x-0"}`}
            />
          </div>
          <span className={`cursor-pointer ${billing === "yearly" ? "text-white font-semibold" : "text-[#F2D399]"}`} onClick={() => setBilling("yearly")}>Yearly</span>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="relative bg-[#8C1F33]/30 border border-[#D9969B] rounded-2xl p-8 flex flex-col transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-[#F2E399] text-3xl font-bold mb-4">
                {plan.monthly
                  ? billing === "monthly"
                    ? `${plan.monthly.toLocaleString()} KES/mo`
                    : `${(plan.monthly * 10).toLocaleString()} KES/yr`
                  : "Custom"}
              </p>

              <ul className="text-[#F2D399] flex-1 space-y-2 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>

              <button className="mt-auto bg-[#8C1F33] hover:bg-[#D9969B] text-white px-6 py-3 rounded-lg transition">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}