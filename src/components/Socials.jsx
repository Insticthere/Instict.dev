function Socials() {
   
  return (
    <div className='px-2 sm:my-3 my-2'>
      <div className='flex justify-between items-center'>
      <div></div>
      <div className="flex gap-3 items-end">
          <div className="group">
              <a href="https://discordapp.com/users/522317353917087745/" target="_blank" rel="noopener noreferrer" aria-label="discord">
                <div className="flex items-center">
                  <img src='/icons/discord.png' className='h-[22px] w-[22px] sm:h-[26px] sm:w-[26px] hover:scale-[1.1] ease-in-out duration-300 aspect-square'></img>
                </div>
              </a>
            </div>
            <div className="group">
              <a href="https://github.com/Insticthere" target="_blank" rel="noopener noreferrer" aria-label="github">
                <div className="flex items-center ">
                  <img src='/icons/github.png' className='h-[22px] w-[22px] sm:h-[25px] sm:w-[25px] invert dark:invert-0 hover:scale-[1.1] ease-in-out duration-300 aspect-square'></img>
                </div>
              </a>
            </div>
          </div>
        </div>
                  
      </div>
  );
}

export default Socials;