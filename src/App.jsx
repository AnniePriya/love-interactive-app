import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import SecondPage from "./SecondPage";
import Loading from "./Loading";
import Login from "./Login";
import Gallery from "./Gallery";
import LoveNote from "./LoveNote";



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

        <Route path="/home/gallery" element={<Gallery />} />
        <Route path="love-note" element={<LoveNote />} />


      </Route>

    </Routes>
  );
}

export default App;
