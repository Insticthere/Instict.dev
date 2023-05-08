import { useState, useEffect } from 'react';
import { useLanyardWS,  } from 'use-lanyard';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/en';

dayjs.extend(utc); // Load utc plugin
dayjs.extend(timezone); // Load timezone plugin
dayjs.tz.setDefault('Asia/Kolkata'); 


function Socials() {
  const [currentTrack, setCurrentTrack] = useState(null);  
  const [indianTime, setIndianTime] = useState(dayjs().tz('Asia/Kolkata')); 

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndianTime(dayjs().tz('Asia/Kolkata'));
    }, 500);
    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);

    
  const style = {
      borderColor: currentTrack,
      backgroundColor: currentTrack
    }
    
    return (
      <div className='px-2 mt-5'>
        <div className='flex justify-between items-center'>
          {data ? (
        <div className='w-5 h-5 flex gap-0 items-center relative'>
          <div className="h-[18px] w-[18px] rounded-full flex-shrink-0 group" style={{backgroundColor: style.backgroundColor}}>
          </div>
          <p className='pl-2 h-'>{data.discord_status}</p>  
        </div>) :  <StatusFallback />}

            <div className="flex gap-3 justify-center sm:justify-end">
            <div className="group">
                <a href="https://discordapp.com/users/522317353917087745/" target="_blank" rel="noopener noreferrer" aria-label="discord">
                  <div className="flex items-center">
                    <img src='/icons/discord.png' className='h-8 w-8 hover:scale-[1.1] ease-in-out duration-300 aspect-square'></img>
                  </div>
                </a>
              </div>
              <div className="group">
                <a href="https://github.com/Insticthere" target="_blank" rel="noopener noreferrer" aria-label="github">
                  <div className="flex items-center ">
                    <img src='/icons/github.png' className='h-7 w-7 invert dark:invert-0 hover:scale-[1.1] ease-in-out duration-300 aspect-square'></img>
                  </div>
                </a>
              </div>
              <div className="group">
                <a href="https://open.spotify.com/user/xp36gr2k8ragq465cl5mg2sa9" target="_blank" rel="noopener noreferrer" aria-label="spotify">
                  <div className="flex items-center">
                    <img src='/icons/spotify.png' className='h-7 w-7 hover:scale-[1.1] ease-in-out duration-300 aspect-square'></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <hr className="w-full my-4 bg-gray-600 border-none h-[1px]"></hr>
          <p className="mt-2">{indianTime.format('ddd')} · {indianTime.format('MMM DD')} · {indianTime.format("hh:mm:ss A")}</p>
        </div>
    );
  }
  
export default Socials;

function StatusFallback( ) {
  return(
    <div className='w-5 h-5 flex gap-0 items-center relative animate-pulse'>
      <div className="h-[14px] w-[14px] rounded-full flex-shrink-0 bg-gradient-to-r from-[#151515] to-[#1E1E1E]"></div>
      <div className="h-[14px] w-[60px] rounded-full flex-shrink-0 bg-gradient-to-r from-[#151515] to-[#1E1E1E] mx-2"></div>
    </div>
  )
}