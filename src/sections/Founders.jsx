/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
const founders = [
  {
    name: "Trevor Madara",
    role: "Co-Founder & CEO",
    bio: "Visionary behind InvodTech, leading platform strategy and SaaS innovation across industries.",
    image: "/assets/trevor.jpg",
    linkedin: "https://www.linkedin.com/in/trevor-madara/",
  },
  {
    name: "Rachel Mureithi",
    role: "Co-Founder & CTO",
    bio: "Technical lead overseeing platform architecture, AI integration, and product development.",
    image: "/assets/ray.jpg",
    linkedin: "#",
  },
];

export default function Founders() {
  return (
    <section
      id="founders"
      className="py-24 bg-linear-to-b from-[#F2D399]/20 to-[#F2E399]/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-[#8C1F33] mb-4">Meet the Founders</h2>
        <p className="text-[#732B1A] max-w-2xl mx-auto">
          The visionaries behind InvodTech, leading our mission to build trust-driven SaaS solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {founders.map((founder, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            className="bg-[#F2F2F2] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 relative"
          >
            {/* Profile Image */}
            <img
              src={founder.image}
              alt={founder.name}
              className="w-32 h-32 rounded-full object-cover mb-4 transform transition-transform duration-300 hover:scale-110"
            />

            {/* Name & Role */}
            <h3 className="text-2xl font-semibold text-[#8C1F33] mb-1">{founder.name}</h3>
            <p className="text-[#732B1A] mb-4">{founder.role}</p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href={founder.linkedin}
                className="text-[#F2E399] hover:text-[#F2D399] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={founder.twitter}
                className="text-[#F2E399] hover:text-[#F2D399] transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            </div>

            {/* Optional floating accent */}
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#D9969B]/50 rounded-full animate-bounce"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}