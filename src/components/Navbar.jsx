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
    
  <div className="sticky z-20 backdrop-blur-md sm:rounded-md w-full max-w-[calc(var(--pgwidth)+10px)] m-auto drop-shadow top-0 sm:top-[10px]">
    <header className="flex justify-between text-[20px] top-0 z-10 p-2 relative items-center sm:rounded-md">
      <div className="flex gap-3 pl-1">
        <a className="text-sm sm:text-base" href="/">/Home</a>
        <a className="text-sm sm:text-base" href="/songs">/Songs</a>
      </div>
      <div>
        <button onClick={handleDarkModeToggle} className='w-7 h-7 max-sm:h-8 flex align-middle items-center justify-center'>{dark ? <img src="/icons/sun.png" className=" font-extrabold h-5 w-5"></img> : <img src="/icons/moon.png" className="fill-white font-extrabold invert h-5 w-5"></img>}</button>
      </div>
    </header>
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#44444444] dark:bg-[#b1b1b175] z-[-1] sm:rounded-md"></div>
  </div>
  );
}

export default Navbar;