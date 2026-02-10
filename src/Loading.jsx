import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  // Floating hearts
  const heartsRef = useRef(
    [...Array(60)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
      size: 12 + Math.random() * 20,
      color: Math.random() > 0.5 ? "#f472b6" : "#ec4899"
    }))
  );

  // Redirect after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#f5ede3] relative overflow-hidden flex items-center justify-center">

      {/* Soft animated blobs */}
      <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 slow-blob top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-pink-400 rounded-full blur-3xl opacity-20 slow-blob bottom-10 right-10"></div>

      {/* Floating hearts */}
      {heartsRef.current.map((heart) => (
        <span
          key={heart.id}
          className="absolute float-heart"
          style={{
            left: `${heart.left}%`,
            bottom: "-20px",
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            color: heart.color
          }}
        >
          💗
        </span>
      ))}

      {/* Center Loading Text */}
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 animate-pulse">
          Preparing Something Special 💘
        </h1>

        <p className="text-gray-600 text-lg">
          Please wait...
        </p>
      </div>

    </div>
  );
}

export default Loading;
