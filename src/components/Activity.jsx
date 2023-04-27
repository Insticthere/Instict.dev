import React, {useState, useEffect} from "react";
import { getNowPlaying } from "../spotify";

function Activity() {
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        const response = await getNowPlaying();
        if (response.ok) {
          const data = await response?.json();
          if (data.is_playing) {
            const currentTrack = {
              name: data.item.name,
              artist: data.item.artists.map((artist) => artist.name).join(", "),
              image: data.item.album.images[0].url,
              url: data.item.external_urls.spotify,
            };
            setCurrentTrack(currentTrack);
          } else {
            setCurrentTrack(null);
          }
        } else {
          setCurrentTrack(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrentTrack();
    const intervalId = setInterval(fetchCurrentTrack, 5000);
    return () => clearInterval(intervalId);
    }, []);

    return (
      <div className="col-span-1">
        <h1 className="text-white mt-[10px] mb-[10px] text-xl font-extrabold ">Currently listening</h1>
        <div className="flex">
          {currentTrack ? (
            <div className="flex">
              <div className="text-center mr-4">
                <img
                  src={currentTrack.image}
                  alt="album cover"
                  className="rounded-md max-w-[125px] w-[100%] h-auto min-w-[45px]"
                />
              </div>
              <div>
                <h3 className="text-white text-[20px]">Spotify</h3>
                <a
                  className="text-white font-medium text-lg hover:underline  block" href={currentTrack.url} target="_blank" rel="noopener noreferrer">
                  {currentTrack.name}
                </a>
                <p className="text-gray-400 text-[15px]">{currentTrack.artist}</p>
              </div>
            </div>
          ) : (
            <div className="flex align-middle items-center w-fit">
              <div className="text-center mr-2">
                <img
                  src={"/spotify.svg"}
                  alt="Not Playing"
                  className="rounded-md max-w-[35px] w-[100%] h-auto"
                />
              </div>
              <div>
                {/* <h3 className="text-white text-[25px] mt-[1px]">Spotify</h3> */}
                <a
                  className="text-white font-medium text-lg hover:underline" href={"https://open.spotify.com/user/xp36gr2k8ragq465cl5mg2sa9"} target="_blank" rel="noopener noreferrer"> 
                  Not Playing
                </a> - Spotify
              </div>
            </div>
          )}
        </div>
        <div></div>
      </div>
    );
}
  
export default Activity;