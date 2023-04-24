import React, { useState, useEffect } from "react";

function Top() {

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
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove)});
  
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
        <div
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove} 
        className="flex m-auto pt-[10%]">
          <div >
            <p style={{"fontFamily": "Roboto,sans-serif"}} className="text-[75px] m-0 md:text-[110px] 2xl:text-[125px] max-[420px]:text-[50px]">Instict</p>
            <p style={{paddingLeft: "7px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat nisi at eros ultrices rhoncus. Nunc vitae varius ipsum, at sagittis lorem.</p>
          </div>
          <div style={{width: "20px", height: "10%"}}>
          </div>
          <div>
            <img
              src="https://i.ibb.co/xmMtYjv/avatar2.jpg"
              alt="pfp"
              className="rounded-[11px] h-[100px] md:h-[200px] "
            ></img>
          </div>
        </div>
    );
  }
  
  export default Top;