import { useState } from "react";
import axios from "axios";

export default function ChoiceGame() {
  const [selected, setSelected] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [allChoices, setAllChoices] = useState([]); // ✅ store answers

  const questions = [
    {
      question: "Would you rather?",
      optionA: "see me flirt with someone",
      optionB: "see someone flirt with me 😏"
    },
    {
      question: "Would you rather?",
      optionA: "Delete instagram for a week",
      optionB: "Not talk to me for a week 😏"
    },
    {
      question: "Would you rather?",
      optionA: "Win 10 lakhs",
      optionB: "Magically I show up at your door 😏"
    },
    {
      question: "Would you rather?",
      optionA: "Hug me for 10 sec",
      optionB: "Spend whole day with me 😏"
    },
    {
      question: "Would you rather?",
      optionA: "Talk to me every day for 10 mins",
      optionB: "Once every 3 weeks 😏"
    },
    {
      question: "Would you rather?",
      optionA: "Want me to be clingy 🥰",
      optionB: "Want me to be calm"
    }
  ];

  // 💾 Save to MongoDB
  const saveToDatabase = async (choices) => {
    try {
      await axios.post("`${import.meta.env.VITE_API_URL}/api/save`", {
        username: "jerosh",
        round: "choiceGame",
        clickAnswers: choices,
        textAnswers: []
      });

      console.log("💗 Choice Game saved successfully");
    } catch (err) {
      console.log("❌ Error saving:", err);
    }
  };

  const handleChoice = (choice) => {
    setSelected(choice);

    const updatedChoices = [...allChoices, choice];
    setAllChoices(updatedChoices);

    setTimeout(async () => {
      setSelected(null);

      if (questionIndex < questions.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        // ✅ Save when finished
        await saveToDatabase(updatedChoices);
        setFinished(true);
      }
    }, 800);
  };

  const current = questions[questionIndex];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">

      {finished ? (

        // 💗 THANK YOU SCREEN
        <div className="text-center animate-fadeInPage">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            💗 Thanks for Choosing 💗
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Your choices are safely stored 😌
          </p>

          <button
            onClick={() => {
              setFinished(false);
              setQuestionIndex(0);
              setAllChoices([]);
            }}
            className="px-8 py-3 bg-pink-500 rounded-full text-white hover:scale-110 transition"
          >
            Play Again 🔥
          </button>
        </div>

      ) : (

        <>
          <h1 className="text-3xl md:text-4xl font-semibold mb-16 tracking-wide">
            {current.question}
          </h1>

          <div className="relative w-full max-w-xl flex flex-col items-center">

            {/* OPTION A */}
            <div
              onClick={() => handleChoice("A")}
              className={`choice-box mb-20 ${
                selected === "A" ? "selected" : ""
              }`}
            >
              <span className="choice-label">A</span>
              <p>{current.optionA}</p>
            </div>

            {/* OR Circle */}
            <div className="or-circle">
              OR
            </div>

            {/* OPTION B */}
            <div
              onClick={() => handleChoice("B")}
              className={`choice-box ${
                selected === "B" ? "selected" : ""
              }`}
            >
              <span className="choice-label">B</span>
              <p>{current.optionB}</p>
            </div>

          </div>
        </>
      )}
    </div>
  );
}
