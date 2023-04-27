import "./app.css"; 
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import Activity from "../components/Activity"
import Toptracks from "../components/TopTracks"
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
    <div className="App unhovered parallax">
      <Navbar />
      <div ref={contentsRef} className="contents1 max-w-[1000px] w-[95%] grid grid-row-2">
        <div ref={targetRef}>
          <Top />
        </div>
        <div className="grid grid-row-2 sm:grid-cols-2 mt-[5%] gap-[10px]">
          <Activity />
          <Toptracks />
        </div>
      </div>
    </div>
  );
}

export default App;