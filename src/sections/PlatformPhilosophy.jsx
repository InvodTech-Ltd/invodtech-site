/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";

const pillars = [
  {
    icon: <FaShieldAlt size={36} />,
    title: "Security & Trust",
    description: "Every solution is built with top-tier security and transparency to maintain trust.",
    bg: "from-[#8C1F33]/20 to-[#F2D399]/10",
  },
  {
    icon: <FaRocket size={36} />,
    title: "Rapid Deployment",
    description: "Deploy SaaS solutions fast with AI-assisted development and robust architecture.",
    bg: "from-[#D9969B]/20 to-[#F2E399]/10",
  },
  {
    icon: <FaUsers size={36} />,
    title: "User-Centric Design",
    description: "Intuitive interfaces and seamless experiences for your team and clients.",
    bg: "from-[#732B1A]/20 to-[#8C2E40]/10",
  },
];

export default function PlatformPhilosophy() {
  return (
    <section id="philosophy" className="py-24 bg-[#EBF2F2] relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-[#8C1F33] mb-4">Our Platform Philosophy</h2>
        <p className="text-[#732B1A] max-w-2xl mx-auto">
          Every product we build follows principles that ensure efficiency, transparency, and user satisfaction.
        </p>
      </div>

      {/* Pillar Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 relative">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`relative flex flex-col items-center text-center p-8 rounded-2xl bg-linear-to-br ${pillar.bg} hover:scale-105 hover:shadow-2xl transition-transform duration-300`}
          >
            <div className="mb-4 text-[#8C1F33]">{pillar.icon}</div>
            <h3 className="text-2xl font-semibold text-[#8C1F33] mb-2">{pillar.title}</h3>
            <p className="text-[#732B1A]">{pillar.description}</p>

            {/* Optional floating element */}
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#F2D399]/50 rounded-full animate-bounce"></div>
          </motion.div>
        ))}

        {/* Optional connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="16.6%" y1="100%" x2="50%" y2="50%" stroke="#D9969B" strokeWidth="2" className="opacity-20" />
          <line x1="50%" y1="50%" x2="83.3%" y2="100%" stroke="#D9969B" strokeWidth="2" className="opacity-20" />
        </svg>
      </div>
    </section>
  );
}