import { useState } from "react";
import { Outlet } from "react-router-dom";


import {
  Heart,
  Lock,
  Star,
  Sparkles,
  Key,
  MapPin,
  Globe,
  Menu,
  X,
  Gamepad2,
  Image
} from "lucide-react";

function Layout() {
  const [activeMemory, setActiveMemory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const memories = [
    { id: 1, icon: Heart, type: "image", src: "/images/one.jpeg", text: "Where it all began." },
    { id: 2, icon: Globe, type: "video", src: "/images/2.mp4", text: "A special day." },
    { id: 3, icon: Star, type: "image", src: "/images/3.jpeg", text: "There is something special about you." },
    { id: 4, icon: Sparkles, type: "image", src: "/images/4.jpeg", text: "This was a good day and pretty picture" },
    { id: 5, icon: Key, type: "image", src: "/images/5.jpeg", text: "Funny Photo but Serious moment." },
    { id: 6, icon: MapPin, type: "image", src: "/images/six.jpeg", text: "<3" },
    { id: 7, icon: Lock, type: "image", src: "/images/7.jpeg", text: "Remember this?" }
  ];


  return (
    <div className="min-h-screen bg-[#f5ede3] relative overflow-x-hidden">

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-24 bg-white/20 backdrop-blur-lg border-r border-white/30 flex flex-col items-center pt-8 gap-8 z-20">
        <div className="text-center mb-4">
          <p className="text-xs tracking-widest text-gray-500">HOVER</p>
          <p className="text-sm font-semibold text-pink-500 neon-side">
            FOR YOU
          </p>
        </div>

        {memories.map((memory) => {
          const Icon = memory.icon;
          return (
            <div
              key={memory.id}
              onMouseEnter={() => setActiveMemory(memory)}
              onMouseLeave={() => setActiveMemory(null)}
              className="cursor-pointer hover:scale-125 transition"
            >
              <Icon size={28} className="text-gray-500" />
            </div>
          );
        })}
      </div>

      {/* Preview Panel */}
      {activeMemory && (
  <div className="fixed left-32 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-2xl p-5 w-[340px] shadow-2xl z-30">

    <div className="w-full h-72 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">

      {activeMemory.type === "image" ? (
        <img
          src={activeMemory.src}
          alt=""
          className="max-w-full max-h-full object-contain"
        />
      ) : (
        <video
          src={activeMemory.src}
          controls
          autoPlay
          className="max-w-full max-h-full object-contain"
        />
      )}

    </div>

    <p className="text-center text-gray-700 text-sm mt-4">
      {activeMemory.text}
    </p>

  </div>
)}

      {/* Hamburger */}
      <div className="fixed top-6 right-8 z-40">
        <button onClick={() => setMenuOpen(true)}>
          <Menu size={30} className="text-pink-500" />
        </button>
      </div>

      {/* Slide Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/90 backdrop-blur-xl shadow-2xl border-l border-pink-200 z-50 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setMenuOpen(false)}>
            <X size={26} className="text-pink-500" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-10 mt-16 text-pink-600">
          <div className="flex items-center gap-4 cursor-pointer hover:scale-110 transition">
            <Gamepad2 size={28} />
            <span className="text-xl font-semibold">Games</span>
          </div>

          <div className="flex items-center gap-4 cursor-pointer hover:scale-110 transition">
            <Image size={28} />
            <span className="text-xl font-semibold">Gallery</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )}

{/* Page Content */}
<Outlet />

      {/* PREMIUM FOOTER */}
      <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white mt-24 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 shadow-2xl">

            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Created exclusively for JCRohan
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                A private experience created just for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-6">Products</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>Love 2.0</li>
                  <li>Butterflies.exe</li>
                  <li>Long Nights</li>
                  <li>Future Memories</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-6">Info</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>Privacy: You are safe here</li>
                  <li>Terms: No ghosting</li>
                  <li>Support: Always here</li>
                  <li>Version: Valentine 2026</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-6">Legals</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>Terms & Feelings</li>
                  <li>Privacy Policy</li>
                  <li>No Ghosting Clause</li>
                  <li>License to Love</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 my-12"></div>

            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>
                <strong>
                  Made with Keyboard, VSCode, React+Vite, MongoDB, Tailwind and definitely with love.
                </strong>
              </p>

              <div className="flex gap-2 mt-4 md:mt-0 items-center">
                <span className="text-[#f9a8d4] font-medium">
                  AnnonceM
                </span>
                <span className="text-white">
                  © 2026
                </span>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default Layout;
