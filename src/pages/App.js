import "./app.css"; 
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import Activity from "../components/Activity"
import Toptracks from "../components/TopTracks"
import Socials from "../components/Socials"
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
          <div className="sm:grid sm:grid-cols-activity mt-3 gap-[10px] pb-[5%]">
            <div>
              <Activity />
            </div>
            <Toptracks />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;