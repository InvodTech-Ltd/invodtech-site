const products = [
  {
    name: "SiteTrust",
    description:
      "Construction progress transparency platform enabling property owners to monitor verified site updates remotely.",
    status: "In Development"
  },
  {
    name: "AgriERP",
    description:
      "Farm operations and cooperative management platform for modern agriculture.",
    status: "Coming Soon"
  }
]

export default function Products() {
  return (
    <section id="products" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-[#F2E399] text-center mb-16">
          Our Platforms
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {products.map((p, i) => (

            <div
              key={i}
              className="bg-[#8C1F33]/40 border border-[#D9969B] p-8 rounded-2xl hover:border-[#F2E399] transition"
            >

              <h3 className="text-2xl font-semibold text-white">
                {p.name}
              </h3>

              <p className="text-[#F2D399] mt-4">
                {p.description}
              </p>

              <span className="block mt-6 text-[#F2E399] text-sm">
                {p.status}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}