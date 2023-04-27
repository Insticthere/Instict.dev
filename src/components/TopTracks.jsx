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

        <div className="max-[640px]:pt-[5%] col-span-1">
            <div className="flex items-baseline w-fit">
                <h1 className="text-white mt-[10px] mb-[10px] text-xl font-extrabold">Top Tracks</h1>
                <p className="pl-[5px]"> - last month</p>
            </div>
            <div className="overflow-x-scroll">
              <div className="flex">
                {Toptracks.items.map((element, key) => (
                    <div key={key} className="pl-[5px]">
                        <img src={element.album.images[0].url } alt="ok" className="w-[100px] max-w-none rounded-md"></img>
                        <a href={element.external_urls.spotify}><p className="text-[15px]">{element.name}</p></a>
                    </div>))}
              </div>
            </div>
            </div> : <></>
    );
}
  
export default Toptracks;