import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";
import Songs from "./Songs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./Skills";
import {  useEffect } from "react";

function App() {

  useEffect(() => {
    if (window.innerWidth < 500) return;
    window.addEventListener("mousemove", handleMouseMove1);
    return () => window.removeEventListener("mousemove", handleMouseMove1);
  });

  function handleMouseMove1(event) {
    const elem = document.querySelector(".parallax");
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = event.clientX;
    let _mouseY = event.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.005}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let x = _depth1;
    elem.style.backgroundPosition = x;
  } 

  return (
    <BrowserRouter>
      <div className="App unhovered parallax  w-full text-white dark:font-bold z-10 h-full  dark:text-black dark:bg-[#ffffff] min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col item justify-between flex-1">
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