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
          className="rounded-lg bg-[#1b1b1bd5] dark:bg-[#edededb3] shadow-md backdrop-blur-sm p-3 sm:p-3.5 flex justify-between border-[#9e9d9d21] dark:border-[#b5b3b3] border-solid border-t-[2px] hover:-translate-y-0.5 transition"
          href={element.link}
          key={key} 
          target={element.newpage ? "_blank" : "_self"}  // Use "_blank" for a new page or "_self" for the same page
          rel={element.newpage ? "noopener noreferrer" : ""}
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
                  alt="link"
                ></img>
              </div>

              <p className="text-sm py-1.5 text-[#9eaab7] dark:text-[#2b2b2b]">
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
