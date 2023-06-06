import data from "../data/data.json"

function Projects() {
  return (
    <div className="px-2 pb-6">
      <h1 className="text-3xl font-['Outfit',sans-serif;] py-2 pl-0.5">
        Projects
      </h1>
      <div className="pt-1 grid sm:grid-cols-2 gap-y-2.5 gap-x-2  grid-cols-1">
        { data.projects.map((element, key) => (
          <a
          className="rounded-lg bg-[#202020d5] dark:bg-[#d6d6d6b3] backdrop-blur-sm p-3 sm:p-3.5 flex justify-between border-[#9e9d9d21] dark:border-[#a0a0a0] border-solid border-t-[2px] hover:-translate-y-0.5 transition"
          href={element.link}
          key={key}
          >
          <div
            className="flex flex-col w-full"
          >
            <div>
              <div className="flex w-full justify-between">
                <p className="text-xl leading-none">{element.name}</p>
                <img
                  src="/icons/link.png"
                  className="h-4 w-4 invert dark:invert-0"
                ></img>
              </div>

              <p className="text-sm py-1.5 text-[#9eaab7] dark:text-[#363738]">
              {element.description}
              </p>
              <p className="text-sm">{element.tools}</p>
            </div>
          </div>
        </a>
        ))
        }
      </div>
    </div>
  );
}

export default Projects;
