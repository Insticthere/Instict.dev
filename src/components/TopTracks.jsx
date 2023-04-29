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

        <div className="col-span-2 mt-[5%] max-sm:mt-[7%]">
            <div className="flex items-baseline w-fit">
                <h1 className="mt-[10px] mb-[10px] text-xl font-extrabold">Top Tracks</h1>
                <p className="pl-[5px]"> - last month</p>
            </div>
            <div className="overflow-x-auto">
              <div className="flex">
                {Toptracks.items?.map((element, key) => (
                    <div key={key} className="pl-[5px]">
                        <img src={element.album.images[0].url } alt="ok" className="w-[100px] max-w-none rounded-md hover:scale-[1.03] hover:origin-top-left ease-in-out duration-300"></img>
                        <a href={element.external_urls.spotify} className="text-[15px] hover:underline ">{element.name}</a>
                    </div>))}
              </div>
            </div>
            </div> : <></>
    );
}
  
export default Toptracks;