import "./app.css"; 
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import React from "react";

function App() {
  return (
    <div className="App unhovered parallax ">

      <div className="main">
        <Navbar />

        <div className="contents1 max-[420px]:ml-[5px] max-[420px]:mr-[5px] ">
          <Top />
          {/* <Activity /> */}
        </div>
      </div>
    </div>
  );
}

export default App;