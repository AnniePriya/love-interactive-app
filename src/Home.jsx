import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const heartsRef = useRef(
    [...Array(50)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
      size: 12 + Math.random() * 20,
      color: Math.random() > 0.5 ? "#f472b6" : "#ec4899"
    }))
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5ede3] relative overflow-hidden flex items-center justify-center">
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
            ❤
          </span>
        ))}
        <h1 className="text-3xl font-semibold text-pink-500">
          Wait, It's Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center relative">
      <h1 className="text-6xl font-bold neon-text mb-6">
        Hey Jerosh Chris Rohan !!
      </h1>

      <p className="typewriter text-lg">
        [Warning: This page contains feelings!]
      </p>

      <div className="love-scene">
        <div className="arrow">🏹</div>
        <div className="heart-target">💗</div>

        <button
  onClick={() => navigate("/home/next")}
  className="next-button"
>
  Next →
</button>

      </div>
    </div>
  );
}

export default Home;
