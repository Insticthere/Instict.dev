import { useLanyardWS } from "use-lanyard";
import { useState, useEffect } from "react";

import info from "../data/data.json"

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/en";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault(info.timezn);

function Top() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [indianTime, setIndianTime] = useState(dayjs().tz(info.timezn));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndianTime(dayjs().tz(info.timezn));
    }, 500);
    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);

  const data = useLanyardWS(info.discordid);

  useEffect(() => {
    let colors = {
      offline: "#747f8d",
      online: "#3ba55d",
      idle: "#faa81a",
      dnd: "#ed4245",
    };

    if (data) {
      if (data.discord_status in colors) {
        setCurrentTrack(colors[data.discord_status]);
      }
    } else {
      return;
    }
  }, [data]);

  const style = {
    borderColor: currentTrack,
    backgroundColor: currentTrack,
  };

  return (
    <div className="flex justify-between content-center flex-row gap-7 mt-[20px] sm:mt-[10%] mx-auto px-2">
      <div className="md:flex items-center justify-between w-full flex-row-reverse z-10">
        <img
          src="/avatar.webp"
          className="rounded-xl w-[clamp(175px,25vw,240px)] shrink-1 max-sm:mt-7 max-sm:mb-[5%] bg-black opacity-100 shadow-md"
          alt="Avatar"
        ></img>
          <div>
            <p className="m-0 leading-[0.95] font-[750] text-[clamp(90px,20vw,150px);] font-['Outfit',sans-serif;]">
              {info.Name}
            </p>

            {data ? (
              <div>
                <div className="flex gap-0 items-center relative ml-1 sm:ml-2">
                  <div
                    className="h-[16px] w-[16px] rounded-full flex-shrink-0 group"
                    style={{ backgroundColor: style.backgroundColor }}
                  ></div>
                  <div>
                    <p className="pl-2 inline sm:text-base text-sm text-[#9eaab7] dark:text-[#2b2b2b]">
                      {data.discord_status} ·{" "}
                      {indianTime.format("MMM DD, hh:mm:ss A")}
                    </p>
                  </div>
                </div>
                {data.kv.instict ? 
            <div>
                <p className="px-2 text-lg leading-tight pt-0.5 max-sm:py-1.5">{data.kv.description}</p>
            </div> : ""}

              </div>
            ) : (
              <StatusFallback />
            )}
        </div>
      </div>
    </div>
  );
}

export default Top;

function StatusFallback() {
  return (
    <>
    <div className="w-5 h-5 flex gap-0 items-center relative animate-pulse ml-2">
      <div className="h-[18px] w-[18px] rounded-full flex-shrink-0 bg-gradient-to-r from-[#151515] to-[#1E1E1E]"></div>
      <div className="h-[14px] w-[180px] rounded-full flex-shrink-0 bg-gradient-to-r from-[#151515] to-[#1E1E1E] mx-2"></div>
    </div>   
    </>
  );
}
