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
    <div className="App unhovered parallax min-w-[100%] min-h-[100%]">
      <Navbar />
      <div className="contents1 max-w-[620px] w-[95%] grid grid-row-2 max-xl:max-w-[500px]">
        <div >
          <Top />
          <Socials />
        </div>
        <div className="sm:grid sm:grid-cols-2 mt-[7%] gap-[10px]">
          <Activity />
          <Toptracks />
        </div>
        
      </div>
    </div>
  );
}

export default App;