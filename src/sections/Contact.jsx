export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#732B1A]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-[#F2E399] mb-6">
          Get in Touch
        </h2>

        <p className="text-[#F2D399] mb-12">
          Have questions or want a demo? Fill out the form below and we’ll get back to you promptly.
        </p>

        <form className="bg-[#8C1F33]/30 border border-[#D9969B] rounded-2xl p-10 flex flex-col gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-lg bg-[#732B1A]/60 border border-[#D9969B] text-white placeholder-[#F2D399] focus:outline-none focus:ring-2 focus:ring-[#F2E399]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-lg bg-[#732B1A]/60 border border-[#D9969B] text-white placeholder-[#F2D399] focus:outline-none focus:ring-2 focus:ring-[#F2E399]"
          />

          <select
            className="px-4 py-3 rounded-lg bg-[#732B1A]/60 border border-[#D9969B] text-white placeholder-[#F2D399] focus:outline-none focus:ring-2 focus:ring-[#F2E399]"
            defaultValue=""
          >
            <option value="" disabled>Select Product of Interest</option>
            <option value="sitetrust">SiteTrust</option>
            <option value="agrierp">AgriERP</option>
            <option value="custom">Custom Software</option>
          </select>

          <textarea
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg bg-[#732B1A]/60 border border-[#D9969B] text-white placeholder-[#F2D399] focus:outline-none focus:ring-2 focus:ring-[#F2E399] resize-none h-32"
          />

          <button
            type="submit"
            className="bg-[#8C1F33] hover:bg-[#D9969B] text-white px-6 py-3 rounded-lg transition"
          >
            Submit
          </button>

        </form>

      </div>
    </section>
  );
}