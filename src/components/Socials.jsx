import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/en';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Kolkata'); 


function Socials() {
  const [indianTime, setIndianTime] = useState(dayjs().tz('Asia/Kolkata'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndianTime(dayjs().tz('Asia/Kolkata'));
    }, 500);
    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);
    
    return (
      <div className='px-2 mt-5'>
        <div className='flex justify-between items-center'>
        <p className="mt-2  ">{indianTime.format('ddd')} · {indianTime.format('MMM DD')} · {indianTime.format("hh:mm:ss A")}</p>
        <div className="flex gap-3 items-end">
        
            <div className="group">
                <a href="https://discordapp.com/users/522317353917087745/" target="_blank" rel="noopener noreferrer" aria-label="discord">
                  <div className="flex items-center">
                    <img src='/icons/discord.png' className='h-[26px] w-[26px] hover:scale-[1.1] ease-in-out duration-300 aspect-square'></img>
                  </div>
                </a>
              </div>
              <div className="group">
                <a href="https://github.com/Insticthere" target="_blank" rel="noopener noreferrer" aria-label="github">
                  <div className="flex items-center ">
                    <img src='/icons/github.png' className='h-[26px] w-[26px] invert dark:invert-0 hover:scale-[1.1] ease-in-out duration-300 aspect-square'></img>
                  </div>
                </a>
              </div>
              <div className="group">
                <a href="https://open.spotify.com/user/xp36gr2k8ragq465cl5mg2sa9" target="_blank" rel="noopener noreferrer" aria-label="spotify">
                  <div className="flex items-center">
                    <img src='/icons/spotify.png' className='h-[26px] w-[26px] hover:scale-[1.1] ease-in-out duration-300 aspect-square'></img>
                  </div>
                </a>
              </div>
            </div>
            

          </div>          
          <hr className="w-full my-4 bg-gray-600 border-none h-[1px]"></hr>
        </div>
    );
  }
  
export default Socials;