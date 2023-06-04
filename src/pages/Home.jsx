import Top from "../components/Top";
import Activity from "../components/Activity"
import Socials from "../components/Socials"
import Projects from "../components/Projects";
import { useState, useEffect } from "react";


function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (
    
  ) => {
    if (window.innerWidth < 500) return;
    document.getElementsByClassName("App")[0].classList.remove("unhovered");
    document.getElementsByClassName("App")[0].classList.add("hovered");
    setIsHovered(true);
  };

  const handleMouseLeave = (
    
  ) => {
    if (window.innerWidth < 500) return;
    document.getElementsByClassName("App")[0].classList.remove("hovered");
    document.getElementsByClassName("App")[0].classList.add("unhovered");
    setIsHovered(false);
  };

  useEffect(() => {
    if (window.innerWidth < 500) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  function handleMouseMove(event) {
    if (isHovered) {
    const elem = document.querySelector(".parallax");
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = event.clientX;
    let _mouseY = event.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.03}%`;
  
    
    let x = _depth1;
    elem.style.backgroundPosition = x;
  }}

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
      50 - (_mouseY - _h) * 0.03
    }%`;
    let x = _depth1;
    elem.style.backgroundPosition = x;
  }


  return (
      <>
        <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          <Top />
          <Socials />
        </div>
        <div className="mt-3">
            <Activity visible="false"/>
            <Projects />
        </div>
      </>
  );
}

export default Home;