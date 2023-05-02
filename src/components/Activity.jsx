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
        const response = await getNowPlaying(basic,refresh_token);
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
    const intervalId = setInterval(fetchCurrentTrack, 5500);
    return () => clearInterval(intervalId);
    }, []);

    return (
      <div>
        <div>
          {currentTrack ? (
            (props.visible === "true") ? 
            <>
            <p className="pb-2">Currently Playing</p>
            <div className="flex">
              <div className="text-center mr-4">
                <img
                  src={currentTrack.image}
                  alt="album cover"
                  className="rounded-md max-w-[100px] w-[100%] h-auto min-w-[50px]"
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
            <hr className="w-full my-4 bg-slate-800 border-none h-0.5"></hr>
            </>
            : (
              <div className="flex">
              <div className="text-center mr-4">
                <img
                  src={currentTrack.image}
                  alt="album cover"
                  className="rounded-md max-w-[100px] w-[100%] h-auto min-w-[50px]"
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
            )
          ) : 
            (props.visible === "true") ?
              <>
              <hr className="w-full mt-4 bg-slate-800 border-none h-0.5"></hr>
              </>
              : <>
              <a className="font-medium text-lg group gap-2 w-fit flex pt-2" href="https://open.spotify.com/user/xp36gr2k8ragq465cl5mg2sa9" target="_blank" rel="noopener noreferrer">
                                      <div
                                        className="fa fa-spotify bottom-0 flex no-underline"
                                        style={{
                                          fontSize: "30px",
                                          color: "#1DB954",
                                          backgroundColor: "transparent",
                                          borderRadius: "100%"
                                        }}></div>
                    <p className="spotifytext group-hover:underline">Not listening to anything</p>
              </a>
              </>

          }
        </div>
      </div>
    );
}
  
export default Activity;