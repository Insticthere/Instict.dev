import "./app.css"; 
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import Activity from "../components/Activity"
import React from "react";

function App() {
  return (
    <div className="App unhovered parallax ">
        <Navbar />
        <div className="contents1 max-[420px]:ml-[5px] max-[420px]:mr-[5px] max-w-[1500px] w-[90%] grid">
          <Top />
          <Activity />
        </div>
    </div>
  );
}

export default App;