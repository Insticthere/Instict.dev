import Navbar from "../components/Navbar";
import Home from "./Home";
import Songs from "./Songs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="dark:text-black dark:bg-white w-full text-white dark:font-semibold z-10 h-full App unhovered parallax min-h-screen">
        <Navbar />
        <div className="mx-auto max-w-[var(--pgwidth)] w-[90%] transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/discord" element="lol.com"/>
          </Routes>
        </div>
        
      </div>
      </BrowserRouter>
  );
}

export default App;