import "./app.css"; 
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import Activity from "../components/Activity"
import Toptracks from "../components/TopTracks"
import Socials from "../components/Socials"
import Discord from "../components/Discord"
import React, { useRef, useEffect } from 'react';

function App() {
  const targetRef = useRef(null);
  const contentsRef = useRef(null);

  useEffect(() => {
    if (targetRef.current && contentsRef.current) {
      const targetWidth = targetRef.current.offsetWidth;
      contentsRef.current.style.width = `${targetWidth}px`;
    }
  }, [targetRef]);


  return (
    <div className="App unhovered parallax min-w-[100vw] min-h-[100vh] dark:text-black dark:bg-white dark:font-extrabold transition-colors duration-[500] h-full w-full">
      <div className="transition">
        <Navbar />
        <div className="contents1 max-w-[650px] w-[95%] grid grid-row-3 max-xl:max-w-[600px]">
          <div >
            <Top />
            <Socials />
          </div>
          <div className="sm:grid sm:grid-cols-2 mt-[7%] gap-[10px] pb-[5%]">
          
            <Discord />
            <Activity />
            <Toptracks />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;