import React from "react";

function Navbar() {
  const handleDarkModeToggle = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header className="flex justify-between p-[20px] text-[20px]">
      <div>
        <p className="text-2xl">Instict</p>
      </div>

      <div>
        <button onClick={handleDarkModeToggle}>
          <img src="/lampwhite.png" alt="theme" className="w-[30px] h-[30px] dark:brightness-0 aspect-square"></img>
        </button>
      </div>
    </header>
  );
}

export default Navbar