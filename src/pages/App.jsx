import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";
import Songs from "./Songs";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="dark:text-black dark:bg-white w-full text-white dark:font-bold z-10 h-full App unhovered parallax min-h-screen">
        <Navbar />
        <div className="mx-auto max-w-[var(--pgwidth)] w-[95%] transition min-[2100px]:w-[65vw] min-[2100px]:max-w-7xl min-h-[calc(80vh)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </BrowserRouter>
  );
}

export default App;