import "./app.css"; 
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import Activity from "../components/Activity"
import Toptracks from "../components/TopTracks"
import Socials from "../components/Socials"
import React, {useRef, useEffect} from 'react';

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
    <div className="">
      <Navbar />
      <div className="max-w-[1000px] mx-auto w-[95%]" ref={contentsRef}>
        <div className="w-fit mx-auto" ref={targetRef}> 
          <Top />
          <Socials />
        </div>
        <div className="mt-[7%] gap-[10px] w-fit grid grid-flow-col  grid-cols-[300px_minmax(auto,_600px)_300px] max-sm:grid-flow-row">
          <Activity />
          <Toptracks />
        </div>
      </div>
    </div>
  );
}

export default App;
