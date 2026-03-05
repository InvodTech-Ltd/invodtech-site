const products = [
  {
    name: "SiteTrust",
    description:
      "Construction transparency platform enabling property owners to monitor verified site updates remotely.",
    status: "In Development",
   // image: "/src/assets/sitetrust-dashboard.png", // placeholder image
  },
  {
    name: "AgriERP",
    description:
      "Farm operations and cooperative management platform for modern agriculture.",
    status: "Coming Soon",
   // image: "/src/assets/agrierp-dashboard.png",
  },
  {
    name: "Custom Software Engineering",
    description:
      "Bespoke software solutions for companies looking to digitize operations and workflows.",
    status: "Available",
   // image: "/src/assets/custom-software.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#732B1A]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#F2E399] text-center mb-16">
          Our Platforms
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {products.map((p, i) => (
            <div
              key={i}
              className="relative group bg-[#8C1F33]/20 border-2 border-transparent rounded-2xl p-6 overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D9969B] via-[#F2E399] to-[#F2D399] opacity-20 blur-lg group-hover:opacity-80 transition-opacity pointer-events-none"></div>

              {/* Product content */}
              <div className="relative z-10 flex flex-col h-full">

                {/* Image / Dashboard Preview */}
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="rounded-lg w-full h-40 object-cover mb-4 shadow-lg"
                  />
                )}

                <h3 className="text-2xl font-semibold text-white">{p.name}</h3>
                <p className="text-[#F2D399] mt-2 flex-1">{p.description}</p>

                {/* Status */}
                <span
                  className={`mt-4 inline-block px-3 py-1 rounded-full text-sm ${
                    p.status === "In Development"
                      ? "bg-[#8C1F33] text-[#F2E399]"
                      : p.status === "Coming Soon"
                      ? "bg-[#D9969B]/40 text-white"
                      : "bg-[#F2E399] text-[#732B1A]"
                  }`}
                >
                  {p.status}
                </span>

                {/* CTA Button */}
                <button className="mt-4 bg-[#8C1F33] hover:bg-[#D9969B] text-white px-4 py-2 rounded-lg transition">
                  Book Demo
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}