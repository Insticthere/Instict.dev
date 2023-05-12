import {useState, useEffect} from "react";
import { getNowPlaying } from "../spotify";
const client_id = import.meta.env.VITE_CLIENTID
const client_secret = import.meta.env.VITE_CLIENTSEC
const refresh_token = import.meta.env.VITE_REFRESHTOK

const basic = btoa(`${client_id}:${client_secret}`)

function Activity(props) {
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        let response = await getNowPlaying(basic,refresh_token);
        if (response.ok) {
          let data = await response.text(); // retrieve the response body as text
          if (data) { // check if the response body is not empty
            data = JSON.parse(data); // parse the response body as JSON
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
            setCurrentTrack(null); // handle empty response body
          }
        } else {
          setCurrentTrack(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrentTrack();
    const intervalId = setInterval(fetchCurrentTrack, 5500);
    return () => clearInterval(intervalId);
    }, []);

    return (
      <div className="px-2">
        <hr className="w-full my-2 bg-gray-600 border-none h-[1px]"></hr>
        
        <div>
          {currentTrack ? (
            <div className="pl-1">
            <p className="pb-2">Currently Playing</p>
            <div className="flex">
              <div className="text-center mr-4 shrink-0">
                <img
                  src={currentTrack.image}
                  alt="album cover"
                  className="rounded-md max-w-[100px] w-[100%] h-auto min-w-[100px]"
                  rel="preload"
                />
              </div>
              <div>
                <h3 className="text-[25px]">Spotify</h3>
                <a
                  className="font-medium text-lg hover:underline block w-fit" href={currentTrack.url} target="_blank" rel="noopener noreferrer">
                  <p className="spotifytext">{currentTrack.name}</p>
                </a>
                <p className="text-gray-400 text-[15px] dark:text-[#4e4e4e]">{currentTrack.artist}</p>
              </div>
            </div> 
            <hr className="w-full my-4 bg-gray-600 border-none h-[1px]"></hr>
            </div>
          ) : 
            (props.visible === "true") ?
              <></>
              : <>
              <a className="font-medium text-lg group gap-2 w-fit flex my-[2%]" href="https://open.spotify.com/user/xp36gr2k8ragq465cl5mg2sa9" target="_blank" rel="noopener noreferrer">
                <img src='/icons/spotify.png' className='h-7 w-7'></img>
                    <p className="spotifytext group-hover:underline">Not listening to anything</p>
              </a>
              </>

          }
        </div>
      </div>
    );
}
  
export default Activity;