import { useState } from "react";
import axios from "axios";

function LoveNote() {
  const [reply, setReply] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!reply.trim()) return;

    try {
      await axios.post(
  `${import.meta.env.VITE_API_URL}/api/save-love-note`,
  {
    username: "jerosh",
    message: reply
  }
);

      setSubmitted(true);
    } catch (err) {
      console.log("Error saving love note:", err);
  alert("Server not responding 💔");
}
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50 flex items-center justify-center px-6 overflow-hidden">

      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
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

      <div className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-pink-200 animate-fadeInPage">

        <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">
          A Letter From AnnonceM 💌
        </h1>

        {/* Love Letter */}
        <div className="text-gray-700 leading-relaxed space-y-4 text-lg mb-8">
          <p>
             Jerosh,
          </p>
          <p>
Hey nijama eppo nadakurathu ellam enaku, epudi achunae therila. This is kinda fast but really good. The reason why I liked you nenam kepa adikathi is the first time you went to church with me, na una pathutu enna oru paayan evalo bathiya erukan nu. You might find this funny 😂 but really I liked it!
          </p>
          <p>
            And more, ne sella vishyam la sonalmae purijikura. You know what? You accept and reflect. But sometimes konjam lusu mari tension vara mari joke pananalum 😏😂, I know for sure ne venukunae pana matra. You just want to be in the moment. So innocent and cute, but also mature ah eruka 🥰❤️😘
          </p>
          <p>
            I don’t really know why you chose me! But nijama ethae mari happy ya erukanum and understand each other 
Ne romba real ah eruka, which I love so much. Fakeness romba kami ya eruku in the love you show. This is the first time I feel love through actions 🥺❤️✨ because I never got the feeling of receiving love, and suddenly you gave me… athuvum this Feb 26’.
          </p>
          <p>
That day when I was sad – McDonald’s to road shop – when I told you how I felt, you understood what I felt and your response was 🫶. Aprm ne sona enkita, “unaku happy eruthalum or sad aa eruthalum enkita ne sollu.” This really made me feel like na oru correct person oda erukennu, like Jerosh 😭❤️          </p>
          <p>
Oru oru nalum entha bond unaku enakum romba romba strong ah, beautiful ah, neriya neriyaaa love aaa erukuthu 😭❤️✨💞

Enna ethukum mela solurathunu therila Jerosh, but ethae mari enum neriya pakanum, neriya unkuda. I want to be with you, support you, give you a lot of love, and share your happy and sad moments with you 🤍💯          </p>
       
       <p>
            I want to be with you till the end of everything. I mean it.
You are literally my everything.
Ne than en ellame and un santhosam is mine too!! 🥹❤️

I will keep loving you 🤗💋💖
          </p>
        </div>

        {!submitted ? (
          <div className="flex flex-col gap-6">
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Write your letter back to me 💌"
              className="w-full h-40 p-4 border-2 border-pink-300 rounded-2xl shadow-inner focus:outline-none focus:ring-4 focus:ring-pink-200 transition-all duration-300 bg-white/90"
            />

            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300"
            >
              Send Letter 💘
            </button>
          </div>
        ) : (
          <div className="text-center animate-pulse text-pink-600 text-xl font-semibold">
            💗 Your letter has been sent. I’ll treasure it forever.
          </div>
        )}

      </div>
    </div>
  );
}

export default LoveNote;
