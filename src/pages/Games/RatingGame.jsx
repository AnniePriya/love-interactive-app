import { useState } from "react";
import axios from "axios";

export default function RatingGame() {
  const [rating, setRating] = useState(3);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [ratingsData, setRatingsData] = useState([]);

  const questions = [
    "How much do you like the idea of me being yours? 😌",
    "How much will you miss me if I disappear for 2 days? 💕",
    "How annoying am I? 😏",
    "How much do you love me? 💘",
    "How much do you like me staring at you? 💘",
    "How possessive are you towards me? 💘",
    "How protective do you feel about me? 💘"
  ];

  const labels = {
    1: "😐 Nop",
    2: "🙂 Slightly",
    3: "🥰 A little much",
    4: "😍 Very much",
    5: "🔥 Very very much!!!!"
  };

  const handleNext = async () => {
    const updatedRatings = [...ratingsData, rating];
    setRatingsData(updatedRatings);

    if (index < questions.length - 1) {
      setIndex(index + 1);
      setRating(3);
    } else {
      // 🔥 SAVE TO DATABASE
      try {
        await axios.post("http://localhost:5000/api/save", {
          username: "jerosh",
          round: "ratingGame",
          clickAnswers: updatedRatings.map(String), // convert to string
          textAnswers: []
        });

        console.log("💗 Rating game saved to DB");
      } catch (err) {
        console.log("❌ Error saving rating game:", err);
      }

      setFinished(true);
    }
  };

  const restartGame = () => {
    setIndex(0);
    setRating(3);
    setRatingsData([]);
    setFinished(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-white flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

      {/* Floating background hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute float-heart text-pink-300"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 20}px`,
              animationDuration: `${5 + Math.random() * 6}s`
            }}
          >
            💗
          </span>
        ))}
      </div>

      {finished ? (
        <div className="animate-fadeInPage z-10">
          <h1 className="text-4xl font-bold text-pink-600 mb-6">
            💖 Rating Completed 💖
          </h1>

          <p className="text-gray-600 mb-6">
            Your honesty has been recorded 😌
          </p>

          <button
            onClick={restartGame}
            className="px-8 py-3 bg-pink-500 text-white rounded-full text-lg font-semibold shadow-xl hover:scale-110 transition"
          >
            Play Again 🔥
          </button>
        </div>
      ) : (
        <div className="z-10 w-full max-w-xl animate-fadeInPage">

          <h1 className="text-3xl md:text-4xl font-semibold text-pink-600 mb-12 transition-all duration-300">
            {questions[index]}
          </h1>

          {/* Rating Label */}
          <div className="mb-6 text-xl font-medium text-pink-500 transition-all duration-300">
            {labels[rating]}
          </div>

          {/* Slider */}
          <div className="relative w-full mb-10">

            <input
              type="range"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full appearance-none rating-slider"
            />

            {/* Marks */}
            <div className="flex justify-between mt-2 text-pink-400 text-sm">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>

          </div>

          <button
            onClick={handleNext}
            className="px-8 py-3 bg-pink-500 text-white rounded-full text-lg font-semibold shadow-xl hover:scale-110 transition"
          >
            Next 💗
          </button>

        </div>
      )}
    </div>
  );
}
