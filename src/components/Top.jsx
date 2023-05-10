import { useLanyardWS } from 'use-lanyard';
import { useState, useEffect } from 'react';

function Top() {
  const [currentTrack, setCurrentTrack] = useState(null);  
  const data = useLanyardWS("522317353917087745")

  useEffect(() => {
      let colors = {
          offline: "#747f8d",
          online: "#3ba55d",
          idle: "#faa81a",
          dnd: "#ed4245",
          };

      if (data) {
        console.log(data)
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
    <div  className="flex justify-between content-center flex-row gap-7 mt-[17%] mx-auto mt-10px">
      <div className="sm:flex items-center justify-between w-full flex-row-reverse">
      <img src="/avatar.jpg" className="rounded-xl w-[clamp(190px,24vw,300px)] shrink-0"></img>
        <div className="pt-7">
          <p className="mr-[10px] text-[7rem] m-0 instict leading-none font-[750]">Instict.</p>
          {data ? (
        <div className='flex gap-0 items-center relative'>
          <div className="h-[18px] w-[18px] rounded-full flex-shrink-0 group" style={{backgroundColor: style.backgroundColor}}></div>
          <div>
            <p className='pl-2 inline'>{data.discord_status}{data.kv.instict ? ` · ${data.kv.instict}` : ""}</p>
          </div>
        </div>) :  <StatusFallback />}
        </div>
      </div>
    </div>
  );
}

export default Top;

function StatusFallback( ) {
  return(
    <div className='w-5 h-5 flex gap-0 items-center relative animate-pulse'>
      <div className="h-[18px] w-[18px] rounded-full flex-shrink-0 bg-gradient-to-r from-[#151515] to-[#1E1E1E]"></div>
      <div className="h-[14px] w-[80px] rounded-full flex-shrink-0 bg-gradient-to-r from-[#151515] to-[#1E1E1E] mx-2"></div>
    </div>
  )
}