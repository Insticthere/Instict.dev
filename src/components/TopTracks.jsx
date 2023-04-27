import React, {useState, useEffect} from "react";
import { getTopTracks } from "../spotify";

function Toptracks() {
    
  const [Toptracks, setToptracks] = useState(null);

    useEffect(() => {
      const fetchTopTracks = async () => {
        try {
          const response = await getTopTracks();
          setToptracks(response)
        } catch (error) {
          console.error(error);
        }
      };
      fetchTopTracks();
      }, []);
    
    return (
        Toptracks ? 

        <div className=" overflow-x-auto" >
            <div className="flex items-baseline">
                <h1 className="text-white mt-[10px] mb-[10px] text-xl font-extrabold">Top Tracks</h1>
                <p> - last month</p>
            </div>
            <div className="flex">
              {Toptracks.items.map((element, key) => (
                  <div key={key}>
                      <img src={element.album.images[0].url } alt="ok" className="w-[100px] max-w-none"></img>
                      {element.name}
                  </div>))}
            </div>
            </div> : <></>
    );
}
  
export default Toptracks;