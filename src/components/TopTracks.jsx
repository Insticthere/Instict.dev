import {useState, useEffect} from "react";
import { getTopTracks } from "../spotify";

const client_id = import.meta.env.VITE_CLIENTID
const client_secret = import.meta.env.VITE_CLIENTSEC
const refresh_token = import.meta.env.VITE_REFRESHTOK

const basic = btoa(`${client_id}:${client_secret}`)

function Toptracks(props) {
  const [Toptracks, setToptracks] = useState(null);

    useEffect(() => {
      const fetchTopTracks = async () => {
        try {
          const response = await getTopTracks(basic, refresh_token, props.term);
          setToptracks(response)
          console.log(response)
        } catch (error) {
          console.error(error);
        }
      };
      fetchTopTracks();
      }, [props.term]);
    
    return (
        <div className="mt-8">
          <div className="flex items-baseline overflow-hidden ">
            <h1 className="mt-[10px] mb-[10px] text-xl font-extrabold">Top Tracks</h1>
            <p className="pl-[5px]"> - {props.name}</p>
          </div>
          <div className="relative w-[98vw] mx-[calc(-49vw+325px)] max-xl:mx-[auto] max-xl:w-[100vw] ">
              <div className="grid grid-flow-col grid-rows-2 overflow-x-auto gap-2">
                {Toptracks ?  Toptracks.items?.map((element, key) => (
                  <a href={element.external_urls.spotify} key={key}>
                    <div className="group col-span-1 row-span-1 snap-start relative overflow-hidden rounded-md">
                      <img src={element.album.images[0].url } alt={element.name} className="w-[200px] max-w-none group-hover:scale-[1.02] group-hover:blur-[0.5px] duration-100 group-hover:brightness-50"></img>
                      <div className="absolute inset-2">
                        <p className="text-lg hidden group-hover:block overflow-ellipsis dark:text-white">{element.name}</p>
                        <p className="text-xs hidden group-hover:block overflow-ellipsis dark:text-white">{element.artists[0].name}</p>
                      </div>
                    </div>
                  </a>)) : <Fallback />}
              </div>
          </div>
        </div>
    )
}
  
export default Toptracks;

function Fallback() {
  return (
    <>
    {Array(20).fill(0).map((_,i) =>
    <div className="group col-span-1 row-span-1 overflow-hidden grid w-[200px] h-[200px] scrollbar-hide" key={i}>
      <div className=" w-[200px] h-[200px] scrollbar-hide">
        <div className=" max-w-none bg-[#151515] w-[200px] h-[200px] rounded scroll scrollbar-hide"></div>
      </div>
    </div>)}
  
    </>

  )

}