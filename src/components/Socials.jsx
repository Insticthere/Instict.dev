import React from "react";

function Socials() {
    
    return (
          <div className="flex gap-3  justify-center pt-5 sm:pr-4 sm:justify-end max-md:py-[10%]  ">
            <div className="group">
              <a href="https://github.com/Insticthere" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center">
                      <div
                      className="fa fa-github hover:scale-[1.1] dark:!text-black"
                      style={{
                        fontSize: "30px",
                        color: "white",
                        backgroundColor: "transparent",
                        borderRadius: "100%"
                      }}></div>
                      
                </div>
              </a>
            </div>
            <div className="group" target="_blank" rel="noopener noreferrer">
                      <a href="https://open.spotify.com/user/xp36gr2k8ragq465cl5mg2sa9">
              <div className="flex items-center">
                    <div
                    className="fa fa-spotify hover:scale-[1.1]"
                    style={{
                      fontSize: "30px",
                      color: "#1DB954",
                      backgroundColor: "transparent",
                      borderRadius: "100%"
                    }}></div>
                    
              </div>
              </a>
            </div>
            <div className="group" target="_blank" rel="noopener noreferrer">
            <a href="https://discordapp.com/users/522317353917087745/">
              <div className="flex items-center">
                    <div
                    className="fa-brands fa-discord hover:scale-[1.1] "
                    style={{
                      fontSize: "30px",
                      color: "#5865F2",
                      backgroundColor: "transparent",
                      borderRadius: "100%"
                    }}></div>
                    
              </div>
            </a>
            </div>
            <div className="group">
            <a href="mailto:queriesinstict@gmail.com">
              <div className="flex items-center">
                    <div
                    className="fa fa-envelope hover:scale-[1.1] dark:!text-black"
                    style={{
                      fontSize: "30px",
                      color: "white",
                      backgroundColor: "transparent",
                      borderRadius: "100%"
                    }}></div>
                    
              </div>
            </a>
            </div>
          </div>
    );
  }
  
  export default Socials;

            //   {/* <div className="group w-fit">
            //   <div className="flex items-center  group-hover:bg-custom rounded-full h-12  w-fit test">
            //       <div
            //         className="fa fa-reddit group-hover:scale-110"
            //         style={{
            //           fontSize: "48px",
            //           color: "#fd4500",
            //           backgroundColor: "transparent",
            //           borderRadius: "100%"
            //         }}></div>
            //         <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black px-2">okokok</p>
            //   </div>
            // </div> */}