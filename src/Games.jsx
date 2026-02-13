import { useNavigate } from "react-router-dom";

function Games() {
  const navigate = useNavigate();



  const games = [
    {
      title: "This or That 💕",
      desc: "Choose between two options and reveal your vibe.",
      image: "/images/thisorthat.png",
      path: "/home/games/choice"
    },
    {
      title: "Rate Me 😌",
      desc: "Rate different moments from 1 to 5.",
      image: "/images/ratingame.jfif",
      path: "/home/games/rating"
    },
    {
      title: "Memory Surprise 🎁",
      desc: "A little fun challenge made just for you.",
      image: "/images/heart.jpg",
      path: "/home/games/fun"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50 py-20 px-6">

      <h1 className="text-5xl font-bold text-center text-pink-600 mb-16">
        Little Games 🎮💗
      </h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {games.map((game, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={game.image}
              alt=""
              className="w-full h-48 object-cover"
            />

            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-pink-500 mb-2">
                {game.title}
              </h2>

              <p className="text-gray-600 mb-6">
                {game.desc}
              </p>

              <button
                onClick={() => navigate(game.path)}
                className="px-6 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:scale-110 transition"
              >
                Play 💘
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Games;
