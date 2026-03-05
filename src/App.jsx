import React from "react";

// Components
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App font-sans bg-[#F2F2F2] text-[#732B1A]">
      {/* Main Layout */}
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;