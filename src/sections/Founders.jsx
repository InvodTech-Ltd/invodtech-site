const founders = [
  {
    name: "Trevor Madara",
    role: "Co-Founder & CEO",
    bio: "Visionary behind InvodTech, leading platform strategy and SaaS innovation across industries.",
    image: "/src/assets/trevor.jpg",
    linkedin: "https://www.linkedin.com/in/trevor-madara/",
  },
  {
    name: "Rachel Mureithi",
    role: "Co-Founder & CTO",
    bio: "Technical lead overseeing platform architecture, AI integration, and product development.",
    image: "/src/assets/ray.jpg",
    linkedin: "#",
  },
];

export default function Founders() {
  return (
    <section id="founders" className="py-24 bg-[#732B1A]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-[#F2E399] mb-6">
          Meet the Founders
        </h2>

        <p className="text-[#F2D399] max-w-3xl mx-auto mb-16">
          Our founders bring together vision, technical expertise, and a passion for transforming industries with modern SaaS solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {founders.map((f, i) => (
            <div
              key={i}
              className="bg-[#8C1F33]/30 border border-[#D9969B] rounded-2xl p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-32 h-32 object-cover rounded-full border-2 border-[#F2E399] mb-4"
              />

              <h3 className="text-2xl font-semibold text-white">{f.name}</h3>
              <span className="text-[#F2D399] text-sm">{f.role}</span>

              <p className="text-[#F2D399] text-center mt-4">{f.bio}</p>

              {f.linkedin && (
                <a
                  href={f.linkedin}
                  target="_blank"
                  className="mt-4 text-[#F2E399] hover:text-[#D9969B] transition"
                >
                  LinkedIn
                </a>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}