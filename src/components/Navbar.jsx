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
    
  <div className="sticky z-20 backdrop-blur-md min-[900px]:rounded-lg w-full min-[900px]:max-w-[calc(var(--pgwidth)-10px)] m-auto drop-shadow top-0 min-[900px]:top-[15px] py-1 px-3">
    <header className="flex justify-between text-[20px] top-0 z-10 relative items-center min-[900px]:rounded-lg">
      <div className="flex gap-3 pl-1">
        <a className="text-base" href="/">Home</a>
        <a className="text-base" href="/songs">Songs</a>
      </div>
      <div className="rounded-md dark:hover:bg-neutral-700 dark:hover:bg-opacity-10 p-0.5 hover:bg-[#161618]">
        <button onClick={handleDarkModeToggle} className='w-7 h-7 max-sm:h-8 flex align-middle items-center justify-center'>{dark ? <img src="/icons/sun.png" className=" font-extrabold h-5 w-5"></img> : <img src="/icons/moon.png" className="fill-white font-extrabold invert h-5 w-5"></img>}</button>
      </div>
    </header>
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#57575744] dark:bg-[#b1b1b175] z-[-1] min-[900px]:rounded-lg"></div>
  </div>
  );
}

export default Navbar;