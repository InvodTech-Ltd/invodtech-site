import { FaEye, FaRobot, FaClock } from "react-icons/fa";

const pillars = [
  {
    title: "Transparency",
    description:
      "Every action, progress update, and metric is visible to stakeholders in real-time.",
    icon: <FaEye size={32} className="text-[#F2E399]" />,
  },
  {
    title: "Automation",
    description:
      "Our platforms reduce manual effort by automating workflows across industries.",
    icon: <FaRobot size={32} className="text-[#F2E399]" />,
  },
  {
    title: "Real-time Insights",
    description:
      "Actionable dashboards provide instant insights for better decision making.",
    icon: <FaClock size={32} className="text-[#F2E399]" />,
  },
];

export default function PlatformPhilosophy() {
  return (
    <section className="py-24 bg-[#732B1A]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-[#F2E399] mb-6">
          Our Platform Philosophy
        </h2>

        <p className="text-[#F2D399] max-w-3xl mx-auto mb-16">
          InvodTech builds SaaS platforms with a focus on transparency, automation, and delivering actionable insights in real-time.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-[#8C1F33]/30 border border-[#D9969B] rounded-2xl p-8 transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-[#F2D399]">{p.description}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}