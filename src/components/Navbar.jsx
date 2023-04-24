import React from "react";

const desgin = {"navbar":{"display":"flex","justifyContent":"space-between","padding":"20px"},
                "leftnavbar":{"color":"white"},
                "rightnavbar":{"alignItems" : "end"},
                "linkStyles" : {"margin":"10px","textDecoration":"none","color":"white"}}

function Navbar() {
    
    return (
        <header style={desgin.navbar}>
        <div style={desgin.leftnavbar}>
          <p>Instict</p>
        </div>

        <div style={desgin.rightnavbar}>
          <a href="/home" style={desgin.linkStyles}>About</a>
          <a href="/" style={desgin.linkStyles}>About</a>
        </div>
      </header>
    );
  }
  
  export default Navbar;