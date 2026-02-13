import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import SecondPage from "./SecondPage";
import Loading from "./Loading";
import Login from "./Login";
import Gallery from "./Gallery";
import LoveNote from "./LoveNote";
import Games from "./Games";
import ChoiceGame from "./pages/Games/ChoiceGame";
import RatingGame from "./pages/Games/RatingGame";
import FunGame from "./pages/Games/FunGame";



function App() {
  return (
    <Routes>

      {/* 1️⃣ First page → Loading */}
      <Route path="/" element={<Loading />} />

      {/* 2️⃣ After loading → Login */}
      <Route path="/login" element={<Login />} />

      {/* 3️⃣ Main Website Layout */}
      <Route path="/home" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="next" element={<SecondPage />} />

        <Route path="gallery" element={<Gallery />} />
  <Route path="love-note" element={<LoveNote />} />
  <Route path="games" element={<Games />} />
  <Route path="games/choice" element={<ChoiceGame />} />
  <Route path="games/rating" element={<RatingGame />} />
  <Route path="games/fun" element={<FunGame />} />



      </Route>

    </Routes>
  );
}

export default App;
