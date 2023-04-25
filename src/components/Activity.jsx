import React, {useState, useEffect} from "react";

var userName = "Insticthere";

function Activity() {
const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    // Helper function to fetch the currently scrobbled track
    const fetchCurrentTrack = async () => {
      try {
        // Make a request to the Last.fm API to get the currently playing track
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${userName}&api_key=${process.env.REACT_APP_LASTFM_API}&format=json&limit=1`
        );
        const data = await response.json();

        // Get the first track from the response and set it as the current track
        const currentTrack = data.recenttracks.track[0];
        setCurrentTrack(currentTrack);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the current track initially and then set up an interval to fetch it every 5 seconds
    fetchCurrentTrack();
    const intervalId = setInterval(fetchCurrentTrack, 1500);

    return () => clearInterval(intervalId);
    }, []);
    
    return (
      <div className="ml-[5px] mt-[10%]">
        <h1 className="text-white mt-[10px] mb-[10px] text-xl font-extrabold">Currently listening</h1>
        <div className="flex">
          {currentTrack && (
            <div className="flex">
              <div className="text-center mr-4">
                <img
                  src={currentTrack.image[3]["#text"]}
                  alt="album cover"
                  className="rounded-md max-w-[125px] w-[100%] h-auto"
                />
              </div>
              <div>
                <h3 className="text-white text-[25px]">Spotify</h3>
                <a
                  className="text-white font-medium text-lg hover:underline" href={currentTrack.url} target="_blank" rel="noopener noreferrer">
                  {currentTrack.name}
                </a>
                <p className="text-gray-400 text-[15px]">{currentTrack.artist["#text"]}</p>
              </div>
            </div>
          )}
        </div>
    </div>

    );
}
  
export default Activity;