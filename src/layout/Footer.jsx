import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Logo from "/assets/logo.png"; // Replace with your logo

export default function Footer() {
  return (
    <footer className="bg-[#732B1A] text-[#F2F2F2] py-16 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Logo & Tagline */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="InvodTech Logo" className="h-12 w-12" />
            <span className="text-[#F2E399] font-bold text-2xl">InvodTech</span>
          </div>
          <p className="text-[#F2D399] max-w-xs">
            Transforming industries with modern SaaS solutions, transparency, and actionable insights.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-[#F2F2F2] hover:text-[#F2D399] transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="text-[#F2F2F2] hover:text-[#F2D399] transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-[#F2F2F2] hover:text-[#F2D399] transition-colors"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-[#F2E399] font-semibold text-lg mb-2">Quick Links</h3>
          {["Home", "Products", "Philosophy", "Founders", "Pricing", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#D9969B] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Newsletter / Contact */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-[#F2E399] font-semibold text-lg">Stay Updated</h3>
          <p className="text-[#F2D399]">
            Subscribe to get product updates and news.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 rounded-lg bg-[#8C1F33]/30 border border-[#D9969B] text-white placeholder-[#F2D399] focus:outline-none focus:ring-2 focus:ring-[#F2E399]"
            />
            <button
              type="submit"
              className="bg-[#8C1F33] hover:bg-[#D9969B] text-white px-6 py-3 rounded-lg transition hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-[#D9969B]/50 pt-6 text-center text-[#F2D399] text-sm">
        &copy; {new Date().getFullYear()} InvodTech Ltd. All rights reserved.
      </div>
    </footer>
  );
}