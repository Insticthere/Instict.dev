import { useState, useEffect } from 'react';
import { useLanyardWS,  } from 'use-lanyard';

function Discord() {
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
    <div>
      {data ? (
        <div className=' w-fit'>
            <h1 className='mt-[10px] mb-[10px] text-xl font-extrabold'>Discord</h1>
            <div className='flex gap-3 items-center pt-3'>
                <div className='w-fit relative'>
                    <img className="rounded-full w-24 h-24 aspect-square min-w-[100px] min-h-[100px]" src={"https://cdn.discordapp.com/avatars/522317353917087745/" + data.discord_user.avatar + ".webp?size=100"} alt='pfp'></img>
                    <div>
                        <div className='w-6 h-6 translate-x-[-8px] translate-y-[-1px] border-black rounded-full absolute right-0 bottom-0 border-4 border-solid' style={{backgroundColor: style.backgroundColor}}></div>
                    </div>
                </div>
                <div>
                    <h2 className='text-[25px]'>{data.discord_user.username}#{data.discord_user.discriminator}</h2>
                    <p>{data.discord_status}</p>
                </div>
            </div>
        </div>
        
        ) : <div className=' w-fit'>
                <h1 className='mt-[10px] mb-[10px] text-xl font-extrabold'>Discord</h1>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className="rounded-full w-24 h-24 min-w-[100px] min-h-[100px] aspect-square" src="/avatar.jpg" alt='pfp'></img>
                    </div>
                    <div>
                        <h2 className='text-[25px]'>Instict#0416</h2>
                    </div>
                </div>
            </div>}
    </div>
  );
}

export default Discord;