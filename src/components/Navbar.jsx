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
    <header className="flex justify-between pt-[20px] text-[20px]">
      <div className="flex gap-3">
        <a className="text-md" href="/">/Home</a>
        <a className="text-md" href="/songs">/Songs</a>
      </div>

      <div>
        <button onClick={handleDarkModeToggle} className='w-5 h-5'>{dark ? <i className="fa-regular fa-sun w-5 h-5"></i> : <i className="fa-solid fa-moon w-5 h-5"></i>}</button>
      </div>
    </header>
  );
}

export default Navbar;
