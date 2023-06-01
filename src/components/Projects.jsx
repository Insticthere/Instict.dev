function Projects() {
  return (
    <div className="px-2 pb-6">
      <h1 className="text-3xl font-['Outfit',sans-serif;] py-2 pl-0.5">
        Projects
      </h1>
      <div className="pt-1 grid sm:grid-cols-2 gap-y-2.5 gap-x-2  grid-cols-1">
        <a 
        className="rounded-lg bg-[#15151ccc] dark:bg-[#b1b1b175] backdrop-blur-sm p-3 sm:p-3.5 flex justify-between border-[#6161612b] border-solid border-t-[2px] hover:-translate-y-0.5 transition"
        href="https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands"
                  target="_blank"
                  rel="noopener noreferrer">
          <div
            className="flex flex-col w-full"
            href="https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands"
          >
            <div>
              <div className="flex w-full justify-between">
                <p className="text-xl leading-none">OPPA</p>
                <a
                  href="https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/link.png"
                    className="h-4 w-4 invert dark:invert-0"
                  ></img>
                </a>
              </div>

              <p className="text-sm py-1.5 text-[#9eaab7] dark:text-[#4e4e4e]">
                A Discord bot for fetching kdrama and actors online.
              </p>
              <p className="text-sm">Node · Djs</p>
            </div>
          </div>
        </a>

        <a 
            className="rounded-lg bg-[#15151ccc] dark:bg-[#b1b1b175] backdrop-blur-sm p-3 sm:p-3.5 flex justify-between border-[#6161612b] border-solid border-t-[2px] hover:-translate-y-0.5 transition"
            href="https://nasa-api-explorer-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                      >
          <div
            className="flex flex-col w-full"
            href="https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands"
          >
            <div>
              <div className="flex w-full justify-between">
                <p className="text-xl leading-none">Nasa-api</p>
                <a
                  href="https://nasa-api-explorer-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/link.png"
                    className="h-4 w-4 invert dark:invert-0"
                  ></img>
                </a>
              </div>

              <p className="text-sm py-1.5 text-[#9eaab7] dark:text-[#4e4e4e]">
                A Nasa api explorer.
              </p>
              <p className="text-sm">Node · React</p>
            </div>
          </div>
        </a>

        <a className="rounded-lg bg-[#15151ccc] dark:bg-[#b1b1b175] backdrop-blur-sm p-3 sm:p-3.5 flex justify-between border-[#6161612b] border-solid border-t-[2px] hover:-translate-y-0.5 transition" href="/">
          <div
            className="flex flex-col w-full"
            href="https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands"
          >
            <div>
              <div className="flex w-full justify-between">
                <p className="text-xl leading-none">My Website</p>
                <a href="/">
                  <img
                    src="/icons/link.png"
                    className="h-4 w-4 invert dark:invert-0"
                  ></img>
                </a>
              </div>

              <p className="text-sm py-1.5 text-[#9eaab7] dark:text-[#4e4e4e]">
                This website I made.
              </p>
              <p className="text-sm">Node · React</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
