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
          image: data.items[0].track.album.images[0].url || data.items[0].track.album.images[1].url,
          url: data.items[0].track.external_urls.spotify,
          artisturl : data.items[0].track.artists[0].external_urls.spotify
        };

        setCurrentTrack(currentTrack);
        return;

      } else {
        let data  = await response.json()
        const currentTrack = {
          title: data.is_playing ? "Currently Playing" : "Last Played",
          name: data.item?.name,
          artist: data.item?.artists[0].name,
          image: data.item?.album.images[1].url || data.item?.album.images[0].url,
          url: data.item?.external_urls.spotify,
          artisturl : data.item?.artists[0].external_urls.spotify
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
              <div className="text-center mr-4 shrink-0 ">
                <img
                  src={currentTrack.image}
                  alt="album cover"
                  className="rounded-md w-[110px] aspect-square shadow-xl"
                  rel="preload"
                />
              </div>
              <div className="flex flex-col justify-between gap-0.5">
                <a
                  className="font-medium hover:underline block w-fit" href={currentTrack.url} target="_blank" rel="noopener noreferrer">
                  <p className="text-xl sm:text-[22px] leading-tight my-auto min-w-[50px]">{currentTrack.name}</p>
                </a>
                <a href={currentTrack.artisturl} className="w-fit hover:underline" target="_blank" rel="noopener noreferrer">
                  <p className="text-gray-400 text-lg dark:text-[#2b2b2b]">{currentTrack.artist}</p>
                </a>
                <div className="text-gray-400 dark:text-[#2b2b2b] flex items-center max-w-[300px]">
                  <img src='/icons/spotify.png' className='w-[18px] aspect-square sm:w-5 mr-1.5' alt="sptfy"></img>
                  <p className="text-lg"><span className="underline">{currentTrack.title}</span> on <a href="https://open.spotify.com/user/xp36gr2k8ragq465cl5mg2sa9" target="_blank" rel="noopener noreferrer" className="hover:underline">Spotify</a></p>
                </div>
              </div>
            </div> 
            </div>
          ) : 
          <>
          <div className="pl-1">
          <div className="flex items-center">
            <div className="text-center mr-4 shrink-0">
              <img
                src="icons/emptysong.jpg"
                alt="album cover"
                className="rounded-md w-[110px] aspect-square shadow-xl"
                rel="preload"
              />
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-lg sm:text-[20px] leading-tight my-auto min-w-[50px]">Not listening to anything</p>
              <p className="text-gray-400 text-lg dark:text-[#2b2b2b]">-</p>
              <div className="text-gray-400 dark:text-[#2b2b2b] flex items-center max-w-[300px]">
                <img src='/icons/spotify.png' className='w-[18px] aspect-square sm:w-5 mr-1.5' alt="sptfy"></img>
                <a href="https://open.spotify.com/user/xp36gr2k8ragq465cl5mg2sa9" target="_blank" rel="noopener noreferrer" className="hover:underline"><p className="text-lg">No track currently playing</p></a>
              </div>
            </div>
          </div>
        </div>
        </>}         
        </div>
        <hr className="w-full bg-[#f0f8ff2b] border-none h-[1px] dark:bg-[#0000006b]"></hr>
      </div>
    );
}
  
export default Activity;