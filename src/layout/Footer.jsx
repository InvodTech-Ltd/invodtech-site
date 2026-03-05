import logo from "../assets/logo.png"

export default function Footer() {

  return (

    <footer className="border-t border-[#8C1F33] mt-24">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-12">

          <div>

            <div className="flex items-center gap-3">

              <img src={logo} className="h-8" />

              <span className="font-bold text-[#F2E399]">
                InvodTech
              </span>

            </div>

            <p className="text-[#F2D399] mt-4 text-sm">

              Building modern SaaS platforms designed for transparency,
              operational intelligence and digital transformation.

            </p>

          </div>

          <div>

            <h3 className="text-white font-semibold mb-4">
              Products
            </h3>

            <ul className="space-y-2 text-[#F2D399] text-sm">

              <li>SiteTrust</li>
              <li>AgriERP</li>
              <li>Upcoming Platforms</li>

            </ul>

          </div>

          <div>

            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <p className="text-[#F2D399] text-sm">
              Nairobi, Kenya
            </p>

            <p className="text-[#F2D399] text-sm mt-2">
              hello@invodtech.com
            </p>

          </div>

        </div>

        <div className="border-t border-[#8C1F33] mt-10 pt-6 text-center text-[#D9969B] text-sm">

          © {new Date().getFullYear()} InvodTech. All rights reserved.

        </div>

      </div>

    </footer>

  )

}