export default function Hero() {

  return (

    <section className="relative py-36 overflow-hidden">

      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8C1F33]/40 via-[#D9969B]/30 to-[#732B1A] blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

        {/* Left Content */}
        <div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">

            Building Industry

            <span className="block bg-gradient-to-r from-[#F2E399] to-[#F2D399] text-transparent bg-clip-text">

              Transparency Platforms

            </span>

          </h1>

          <p className="mt-6 text-[#F2D399] text-lg">

            InvodTech builds modern SaaS platforms that help industries
            operate with transparency, accountability and real-time insight.

          </p>

          <div className="flex gap-4 mt-10">

            <button className="px-6 py-3 bg-[#8C1F33] hover:bg-[#D9969B] rounded-lg text-white transition">

              Explore Products

            </button>

            <button className="px-6 py-3 border border-[#F2D399] hover:bg-[#8C1F33] rounded-lg text-white transition">

              Book Demo

            </button>

          </div>

        </div>

        {/* Right Side UI Card */}
        <div className="bg-[#8C1F33]/40 border border-[#D9969B] p-8 rounded-2xl backdrop-blur">

          <h3 className="text-[#F2E399] font-semibold mb-4">
            Platform Focus
          </h3>

          <ul className="space-y-3 text-[#F2D399]">

            <li>• Construction Transparency (SiteTrust)</li>

            <li>• Agricultural Operations Platforms</li>

            <li>• Enterprise SaaS Solutions</li>

            <li>• Custom Software Engineering</li>

          </ul>

        </div>

      </div>

    </section>

  )

}