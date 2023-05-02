import { useState, useEffect } from "react";

function Top() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (
    
  ) => {
    document.getElementsByClassName("App")[0].classList.remove("unhovered");
    document.getElementsByClassName("App")[0].classList.add("hovered");
    setIsHovered(true);
  };

  const handleMouseLeave = (
    
  ) => {
    document.getElementsByClassName("App")[0].classList.remove("hovered");
    document.getElementsByClassName("App")[0].classList.add("unhovered");
    setIsHovered(false);
  };

  useEffect(() => {
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
    
      _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.06}%`;
    
    let x = _depth1;
    elem.style.backgroundPosition = x;
  }}
    
  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} className="flex justify-between content-center flex-row gap-[10px] mt-[10%] mx-auto mt-10px">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-items-center items-center">
          <p className="mr-[10px] text-[7rem] m-0 instict leading-[9rem] font-[750]">Instict</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src="/avatar.jpg" alt="pfp" className="rounded-2xl max-w-[225px] min-w-[125px] w-[100%] h-auto hover:scale-[1.03] hover:origin-top-left ease-in-out duration-300 aspect-square" rel="preload"></img>
      </div>
    </div>
  );
}

export default Top;