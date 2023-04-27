import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/en';

dayjs.extend(utc); // Load utc plugin
dayjs.extend(timezone); // Load timezone plugin
dayjs.tz.setDefault('Asia/Kolkata'); 

function Top() {
  const [indianTime, setIndianTime] = useState(dayjs().tz('Asia/Kolkata'));
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (event) => {
    document.getElementsByClassName("App")[0].classList.remove("unhovered");
    document.getElementsByClassName("App")[0].classList.add("hovered");
    setIsHovered(true);
  };

  const handleMouseLeave = (event) => {
    document.getElementsByClassName("App")[0].classList.remove("hovered");
    document.getElementsByClassName("App")[0].classList.add("unhovered");
    setIsHovered(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndianTime(dayjs().tz('Asia/Kolkata'));
    }, 1000);
    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);


  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  function handleMouseMove(event) {
    const elem = document.querySelector(".App");
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = event.clientX;
    let _mouseY = event.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.03}%`;
    if (isHovered) {
      _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.06}%`;
    }
    let x = _depth1;
    elem.style.backgroundPosition = x;
  }
    
  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} className="flex flex-row gap-[10px] mt-[10%] mx-auto mt-10px overflow-x max-w-[800px]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-items-center items-center">
          <p className="mr-[10px] text-[5rem] m-0  font-sans leading-[9rem]">Instict</p>
        </div>
        <p className="mt-2">{indianTime.format('YYYY-MM-DD')} · {indianTime.format("hh:mm:ss A")}</p>
      </div>
      <div className="flex justify-center items-center relative">
        <img src="/avatar.jpg" alt="pfp" 
        className="rounded-[11px] h-auto w-[100%] hover:scale-[1.05] hover:origin-top-left ease-in-out duration-300 aspect-square max-w-xs min-w-[300px]" height={"300px"} width={"300px"}></img>
      </div>
    </div>
  );
}

export default Top;