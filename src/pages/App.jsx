import './App.css'
import Navbar from "../components/Navbar";
import Home from "./Home"
import Songs from './Songs';
import Footer from '../components/Footer';
import { useEffect } from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  function handleMouseMove(event) {
    const elem = document.querySelector(".parallax");
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = event.clientX;
    let _mouseY = event.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.03}%`;
    let x = _depth1;
    elem.style.backgroundPosition = x;
  }

  return (
    <BrowserRouter>
        <div className="App unhovered parallax min-w-[100vw] min-h-[100vh] dark:text-black dark:bg-white dark:font-extrabold transition-colors duration-[200ms] h-full w-full pb-9">
            <div className="mx-auto max-w-[650px] w-[95%] max-xl:max-w-[600px] transition">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/songs" element={<Songs/>} />
              </Routes>
            </div>
        </div>
        <Footer/>

    </BrowserRouter>
  );
}

export default App;