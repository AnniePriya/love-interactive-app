import { useEffect, useState } from "react";
import axios from "axios";

function FunGame() {
  const [basketX, setBasketX] = useState(200);
  const [hearts, setHearts] = useState([]);
  const [score, setScore] = useState(0);
  const [miss, setMiss] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Create falling hearts
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 400,
          y: 0,
        },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, [gameOver]);

  // Move hearts down
  useEffect(() => {
    if (gameOver) return;

    const move = setInterval(() => {
      setHearts((prevHearts) =>
        prevHearts.map((heart) => ({
          ...heart,
          y: heart.y + 10,
        }))
      );
    }, 100);

    return () => clearInterval(move);
  }, [gameOver]);

  // Collision detection
  useEffect(() => {
    hearts.forEach((heart) => {
      // Catch
      if (
        heart.y > 450 &&
        heart.x > basketX - 40 &&
        heart.x < basketX + 80
      ) {
        setScore((prev) => prev + 1);
        setHearts((prev) => prev.filter((h) => h.id !== heart.id));
      }

      // Miss
      if (heart.y > 520) {
        setMiss((prev) => prev + 1);
        setHearts((prev) => prev.filter((h) => h.id !== heart.id));
      }
    });
  }, [hearts, basketX]);

  // Game over condition
  useEffect(() => {
    if (miss >= 10) {
      setGameOver(true);
      saveScore();
    }
  }, [miss]);

  const saveScore = async () => {
    try {
      await axios.post("http://localhost:5000/api/save", {
        username: "jerosh",
        round: 3,
        clickAnswers: [],
        textAnswers: [`Catch Game Score: ${score}`],
      });
    } catch (err) {
      console.log("Error saving score:", err);
    }
  };

  // Basket movement
  const moveLeft = () => {
    setBasketX((prev) => Math.max(prev - 30, 0));
  };

  const moveRight = () => {
    setBasketX((prev) => Math.min(prev + 30, 400));
  };

  const restartGame = () => {
    setScore(0);
    setMiss(0);
    setHearts([]);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center relative overflow-hidden">

      <h1 className="text-4xl font-bold text-pink-600 mb-6">
        Catch The Hearts 💗
      </h1>

      <p className="mb-4 text-gray-600">
        Score: {score} | Missed: {miss}
      </p>

      <div className="relative w-[500px] h-[550px] bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Falling Hearts */}
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-3xl"
            style={{ left: heart.x, top: heart.y }}
          >
            💗
          </div>
        ))}

        {/* Basket */}
        <div
          className="absolute bottom-0 text-5xl transition-all"
          style={{ left: basketX }}
        >
          🧺
        </div>
      </div>

      {/* Controls */}
      {!gameOver && (
        <div className="flex gap-6 mt-6">
          <button
            onClick={moveLeft}
            className="px-6 py-2 bg-pink-500 text-white rounded-full"
          >
            ⬅
          </button>
          <button
            onClick={moveRight}
            className="px-6 py-2 bg-pink-500 text-white rounded-full"
          >
            ➡
          </button>
        </div>
      )}

      {/* Game Over Screen */}
      {gameOver && (
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Game Over 💔
          </h2>
          <p className="mb-4">Final Score: {score}</p>
          <button
            onClick={restartGame}
            className="px-6 py-3 bg-pink-500 rounded-full"
          >
            Play Again 💗
          </button>
        </div>
      )}
    </div>
  );
}

export default FunGame;
