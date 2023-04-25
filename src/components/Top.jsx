import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/en';

dayjs.extend(utc); // Load utc plugin
dayjs.extend(timezone); // Load timezone plugin
dayjs.tz.setDefault('America/New_York'); 

function Top() {
  const [localTime, setLocalTime] = useState(dayjs()); // Use state to store the local time
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
      setLocalTime(dayjs()); // Update the local time every second
    }, 1000);
    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);

  function handleMouseMove(event) {
    const elem = document.querySelector(".parallax");
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
    <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} className="flex justify-center content-center flex-row gap-[1.25rem] mt-[10%] mx-auto mt-10px ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-items-center items-center">
          <p className="mr-[10px] text-[6rem] m-0  font-sans sm:text-[7rem] lg:text-[8.4rem] ">Instict</p>
        </div>
        <p>{localTime.format('YYYY-MM-DD')} · {localTime.format("hh:mm:ss A")} </p>
      </div>
      <div>
        <img src="https://i.ibb.co/xmMtYjv/avatar2.jpg" alt="pfp" className="rounded-[11px] max-w-[275px] w-[100%] h-auto hover:scale-[1.05] hover:origin-top-left ease-in-out duration-300"></img>
      </div>
    </div>
  );
}

export default Top;