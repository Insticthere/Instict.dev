import data from "../data/data.json"

function Things() {
  return (
    <div className="px-2 pb-6 pt-[7%]">
      <h1 className="text-4xl  font-['Outfit',sans-serif;] py-2 pl-0.5">
        Technology I use
      </h1>
      <h1 className="py-0.5 text-lg">Development</h1>
      <div className="pt-1 grid sm:grid-cols-4 gap-y-2.5 gap-x-2 grid-cols-2">
        
        { data.Development.map((element, key) => (
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#202020d5] dark:bg-[#edededb3] backdrop-blur-sm border border-[#313131] dark:border-[#b5b3b3]" key={key}>
                <img src={element.Image} className="aspect-square w-6"></img>
                <p className="text-sm sm:text-base">{element.name}</p>
            </div>
        ))
        }
      </div>

      <h1 className="pb-0.5 pt-5 text-lg">Apps and Services</h1>
      <div className="pt-1 grid sm:grid-cols-4 gap-y-2.5 gap-x-2 grid-cols-2">
          { data.Apps.map((element, key) => (
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#202020d5] dark:bg-[#edededb3] backdrop-blur-sm border border-[#313131] dark:border-[#b5b3b3]" key={key}>
                  <img src={element.Image} className={element.dark ? "aspect-square w-6 invert dark:invert-0":"aspect-square w-6"}></img>
                  <p className="text-sm sm:text-base">{element.name}</p>
              </div>
          ))
          }
      </div>
    </div>
  );
}

export default Things;
