import { useState, useEffect } from "react";

function Navbar() {
  const [dark, setDark] = useState(() => {
    const storedDark = localStorage.getItem("dark");
    return storedDark !== null ? JSON.parse(storedDark) : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  const handleDarkModeToggle = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
    
  <div className="sticky top-0 z-10 backdrop-blur-xl rounded-b-xl">  
    <header className="flex justify-between text-[20px] top-0 z-10 p-3 relative items-center rounded-b-xl">
      <div className="flex gap-3">
        <a className="text-base" href="/">/Home</a>
        <a className="text-base" href="/songs">/Songs</a>
      </div>
      <div>
        <button onClick={handleDarkModeToggle} className='w-5 h-5'>{dark ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon w-5 h-5"></i>}</button>
      </div>
    </header>
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#38383842] dark:bg-[#b1b1b175] z-[-1] rounded-b-xl"></div>
  </div>
  );
}

export default Navbar;