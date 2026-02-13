import { useState, useEffect } from "react";
import axios from "axios";

function SecondPage() {
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [round, setRound] = useState(1);
  const [showNextRound, setShowNextRound] = useState(false);

  const [clickAnswers, setClickAnswers] = useState([]);
  const [textAnswers, setTextAnswers] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState(1);
  const [showNoWarning, setShowNoWarning] = useState(false);


  const roundOneQuestions = [
    "Jerosh! Are you ready? 😏",
    "Do you trust me completely? 💕",
    "Are you smiling right now? 😊",
    "Do you feel something special here? ✨",
    "Will you be my Valentine? 💗"
  ];

  const roundTwoQuestions = [
    "Why are you with me? 💭",
    "Favorite memory of us? 🌸",
    "Favorite thing I gave you? ✨",
    "When do you feel most loved? 🌍",
    "New way I can show love? 💌"
  ];

  const questions =
    round === 1 ? roundOneQuestions : roundTwoQuestions;

  // -------------------------
  // SAVE TO DATABASE
  // -------------------------
  const saveToDatabase = async (clickData, textData) => {
    try {
      console.log("Sending to backend:", clickData, textData);

      const res = await axios.post("`${import.meta.env.VITE_API_URL}/api/save`", {
      username: "jerosh",
      round,
      clickAnswers: clickData,
      textAnswers: textData
    });

    console.log("Saved successfully:", res.data);

  } catch (err) {
    console.log("Error saving:", err);
  }
};
  // -------------------------
  // ROUND 1 YES / NO
  // -------------------------
  const handleClickAnswer = async (answer) => {
    const updated = [...clickAnswers, answer];
    setClickAnswers(updated);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      await saveToDatabase(updated, []);
      setAccepted(true);
    }
  };

  // -------------------------
  // ROUND 2 TEXT ANSWERS
  // -------------------------
  const handleNextText = async () => {
    if (!currentInput.trim()) return;

    const updated = [...textAnswers, currentInput];
    setTextAnswers(updated);
    setCurrentInput("");

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      await saveToDatabase([], updated);
      setAccepted(true);
    }
  };

  // -------------------------
  // CHAOS NO BUTTON
  // -------------------------
  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 200) - 100;

    setNoPosition({ x: randomX, y: randomY });
    setYesScale(prev => prev + 0.1);
  };

  // -------------------------
  // NEXT ROUND BUTTON
  // -------------------------
  useEffect(() => {
    if (accepted) {
      const timer = setTimeout(() => {
        setShowNextRound(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [accepted]);

  const startNextRound = () => {
    setRound(prev => prev + 1);
    setStep(0);
    setAccepted(false);
    setShowNextRound(false);
    setClickAnswers([]);
    setTextAnswers([]);
    setYesScale(1);
    setNoPosition({ x: 0, y: 0 });
  };

  // -------------------------
  // UI
  // -------------------------
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-100 to-white animate-bgPulse opacity-70 pointer-events-none"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <span
            key={i}
            className="particle-romantic"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      {showNoWarning && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
    <div className="bg-white rounded-2xl p-8 shadow-2xl w-80 text-center animate-fadeInPage">
      <h2 className="text-xl font-bold text-pink-600 mb-4">
        You can’t press NO 😌
      </h2>

      <p className="text-gray-600 mb-6">
        That option is disabled in this love experiment 💘
      </p>

      <button
        onClick={() => setShowNoWarning(false)}
        className="px-6 py-2 bg-pink-500 text-white rounded-full hover:scale-105 transition"
      >
        Okay fine 💗
      </button>
    </div>
  </div>
)}

      {accepted ? (
        <div className="relative z-10 animate-fadeInPage">
          <h1 className="text-5xl font-bold text-pink-600 mb-6 animate-pulse">
            💗 Your're my valentine now !!! 💗
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            💗Round {round} completed💗
          </p>

          {showNextRound && round < 2 && (
            <button
              onClick={startNextRound}
              className="mt-6 px-10 py-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full text-xl font-semibold shadow-xl hover:scale-110 transition animate-bounce"
            >
              Next Round 😈 →
            </button>
          )}

          {round >= 2 && (
            <h2 className="text-3xl text-pink-500 mt-6">
              💗💗💗 Game Completed 💗💗💗
            </h2>
          )}
        </div>
      ) : (
        <div className="relative z-10 animate-fadeInPage">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-10">
            {questions[step]}
          </h1>

          {/* ROUND 1 */}
          {round === 1 ? (
            <div className="flex gap-10 justify-center relative">

              <button
                onClick={() => handleClickAnswer("YES")}
                style={{ transform: `scale(${yesScale})` }}
                className="px-10 py-4 bg-pink-500 text-white rounded-full text-lg font-semibold shadow-xl hover:scale-110 transition"
              >
                Yes 💗
              </button>

              <button
              onClick={() => setShowNoWarning(true)}
                onMouseEnter={
                  step === questions.length - 1
                    ? moveNoButton
                    : null
                }
                style={{
                  transform:
                    step === questions.length - 1
                      ? `translate(${noPosition.x}px, ${noPosition.y}px)`
                      : "none"
                }}
                className="px-10 py-4 bg-gray-300 text-gray-700 rounded-full text-lg font-semibold shadow-md transition"
              >
                No 🙃
              </button>

            </div>
          ) : (
            /* ROUND 2 */
            <div className="flex flex-col items-center gap-6">

              <textarea
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                className="w-96 p-4 border-2 border-pink-300 rounded-2xl shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-200 transition-all duration-300 bg-white/80 backdrop-blur-md"
                placeholder="Type your answer here 💌"
              />

              <button
                onClick={handleNextText}
                className="px-8 py-3 bg-pink-500 text-white rounded-full text-lg shadow-lg hover:scale-110 transition"
              >
                Next →
              </button>

            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SecondPage;
