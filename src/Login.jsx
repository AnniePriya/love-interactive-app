import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (
      username === "emu_2910" &&
      password === "naoruemukoli"
    ) {
      navigate("/home");
    } else {
      alert("Wrong credentials 😏 Try again");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
        <h2 className="text-2xl font-bold text-pink-600 mb-6">
          Is this Jerosh Chris Rohan? 💗
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-2 border rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-pink-500 text-white py-2 rounded-full hover:scale-105 transition"
        >
          Enter 💘
        </button>
      </div>
    </div>
  );
}

export default Login;
