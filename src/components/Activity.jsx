import {useState, useEffect} from "react";
import { getNowPlaying, getLastTrack } from "../spotify";
const client_id = import.meta.env.VITE_CLIENTID
const client_secret = import.meta.env.VITE_CLIENTSEC
const refresh_token = import.meta.env.VITE_REFRESHTOK

const basic = btoa(`${client_id}:${client_secret}`)

function Activity() {
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
    try {
      let response = await getNowPlaying(basic, refresh_token);

      if (response.status === 204) {
        let data = await getLastTrack(basic, refresh_token);

        if (!data) return;
        const currentTrack = {
          title: "Last Played",
          name: data.items[0].track.name,
          artist: data.items[0].track.artists[0].name,
          image: data.items[0].track.album.images[0].url,
          url: data.items[0].track.external_urls.spotify,
        };

        setCurrentTrack(currentTrack);
        return;

      } else {
        let data  = await response.json()
        const currentTrack = {
          title: data.is_playing ? "Currently Playing" : "Last Played",
          name: data.item?.name,
          artist: data.item?.artists[0].name,
          image: data.item?.album.images[0].url,
          url: data.item?.external_urls.spotify,
        };
        setCurrentTrack(currentTrack);
      }
    } catch (error) {
      console.log(error)
    }
  };
  
    fetchCurrentTrack();
    const intervalId = setInterval(fetchCurrentTrack, 5500);
    return () => clearInterval(intervalId);
  }, []);

    return (
      <div>
        <hr className="w-full bg-[#f0f8ff2b] border-none h-[1px] mt-3 dark:bg-[#0000006b]"></hr>
        <div className="py-3 sm:py-3 px-1.5">
          {currentTrack ? (
            <div className="pl-1">
            <div className="flex items-center">
              <div className="text-center mr-4 shrink-0">
                <img
                  src={currentTrack.image}
                  alt="album cover"
                  className="rounded-md w-[110px] aspect-square"
                  rel="preload"
                />
              </div>
              <div className="flex flex-col justify-between gap-0.5">
                <a
                  className="font-medium hover:underline block w-fit" href={currentTrack.url} target="_blank" rel="noopener noreferrer">
                  <p className="text-[24px] leading-tight my-auto min-w-[50px]">{currentTrack.name}</p>
                </a>
                <p className="text-gray-400 text-lg dark:text-[#363738]">{currentTrack.artist}</p>
                <div className="text-gray-400 dark:text-[#363738] flex items-center max-w-[300px]">
                  <img src='/icons/spotify.png' className='w-[18px] aspect-square sm:w-5 mr-1.5'></img>
                  <p className="whitespace-nowrap text-base"><span className="underline">{currentTrack.title}</span> on <a href="https://open.spotify.com/user/xp36gr2k8ragq465cl5mg2sa9" target="_blank" rel="noopener noreferrer" className="hover:underline">Spotify</a></p>
                </div>
              </div>
            </div> 
            </div>
          ) : <>
              <a className="font-medium text-lg group gap-2 w-fit flex my-[1%] pl-2" href="https://open.spotify.com/user/xp36gr2k8ragq465cl5mg2sa9" target="_blank" rel="noopener noreferrer">
                <img src='/icons/spotify.png' className='h-7 w-7'></img>
                    <p className="spotifytext group-hover:underline">Not listening to anything</p>
              </a>
              </>
          }
        </div>
        <hr className="w-full bg-[#f0f8ff2b] border-none h-[1px] dark:bg-[#0000006b]"></hr>
      </div>
    );
}
  
export default Activity;