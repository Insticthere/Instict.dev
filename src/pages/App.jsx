import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";
import Songs from "./Songs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./Skills";

function App() {

  return (
    <BrowserRouter>
      <div className="App unhovered parallax  w-full text-white dark:font-bold z-10 h-full  dark:text-black dark:bg-[#fcfcfc] min-h-screen flex flex-col">
        <Navbar />
        <div className="transition flex flex-col item justify-between flex-1">
          <div className="mx-auto max-w-[var(--pgwidth)] w-[95%] min-[2100px]:w-[65vw] min-[2100px]:max-w-7xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;