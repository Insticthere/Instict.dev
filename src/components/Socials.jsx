import { useState, useEffect } from 'react';
import { useLanyardWS,  } from 'use-lanyard';

function Socials() {
  const [currentTrack, setCurrentTrack] = useState(null);   

  const data = useLanyardWS("522317353917087745");

  useEffect(() => {
      let colors = {
          offline: "#747f8d",
          online: "#3ba55d",
          idle: "#faa81a",
          dnd: "#ed4245",
          };
      if (data) {
          if (data.discord_status in colors) {
              setCurrentTrack(colors[data.discord_status])
              }
      } else {
          return
      }

  }, [data])

    
  const style = {
      borderColor: currentTrack,
      backgroundColor: currentTrack
    }
    
    return (
      <div className='flex justify-between items-baseline sm:px-2'>
        {data ? (<div className='w-6 h-6 flex gap-2 items-center relative '>
            <div className="h-5 w-5 rounded-full flex-shrink-0 group" style={{backgroundColor: style.backgroundColor}}>
            </div>
            <p>{data.discord_status}</p>  
          </div>) : <></>}

          <div className="flex gap-3  justify-center pt-5  sm:justify-end max-sm:py-[7%]  ">
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