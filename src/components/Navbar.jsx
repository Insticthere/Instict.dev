import React from "react";

function Navbar() {
    
    return (
      <header className="flex justify-between p-[20px] text-white text-[20px]">
        <div>
          <p>Instict</p>
        </div>

        <div>
          <a href="/" className="no-underline hover:underline m-0 ml-[10px] mr-[10px]">About</a>
          <a href="/" className="no-underline hover:underline m-0 ml-[10px] mr-[10px]">About</a>
        </div>
      </header>
    );
  }
  
  export default Navbar;