import logo from "../assets/logo.png"

export default function Navbar() {

  return (

    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#732B1A]/80 border-b border-[#8C1F33]">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="InvodTech"
            className="h-9 w-auto"
          />

          <span className="font-bold text-[#F2E399] text-lg">
            InvodTech
          </span>

        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[#F2D399]">

          <a href="#products" className="hover:text-white transition">
            Products
          </a>

          <a href="#platform" className="hover:text-white transition">
            Platform
          </a>

          <a href="#engineering" className="hover:text-white transition">
            Engineering
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </nav>

        {/* CTA */}
        <button className="bg-[#8C1F33] hover:bg-[#D9969B] text-white px-5 py-2 rounded-lg transition">
          Request Demo
        </button>

      </div>

    </header>

  )

}