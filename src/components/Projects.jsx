function Projects() {
    return(
        <div className="px-2">
            <h1 className="text-3xl font-['Outfit',sans-serif;] py-2 pl-0.5">Projects</h1>
            <div className="pt-2 grid sm:grid-cols-2 gap-2 grid-cols-1">

                <div className="rounded-lg bg-[#44444444] dark:bg-[#b1b1b175] backdrop-blur-sm w-full p-3 sm:p-3.5 flex justify-between">
                    <div className='flex flex-col w-full' href='https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands'>
                        <div>
                            <div className='flex w-full justify-between'>
                                <p className="text-xl leading-none">OPPA</p>
                                <a href='https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands' target="_blank" rel="noopener noreferrer">
                                    <img src='/icons/link.png' className='h-4 w-4 invert dark:invert-0'></img>
                                </a>
                            </div>
                            
                            <p className='text-sm py-1.5 text-[#9eaab7] dark:text-[#4e4e4e]'>A Discord bot for fetching kdrama and actors online.</p>
                            <p className='text-sm'>Node · Djs</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg bg-[#44444444] dark:bg-[#b1b1b175] backdrop-blur-sm w-full p-3 sm:p-3.5 flex justify-between">
                    <div className='flex flex-col w-full' href='https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands'>
                        <div>
                            <div className='flex w-full justify-between'>
                                <p className="text-xl leading-none">Nasa-api</p>
                                <a href='https://nasa-api-explorer-xi.vercel.app/' target="_blank" rel="noopener noreferrer">
                                    <img src='/icons/link.png' className='h-4 w-4 invert dark:invert-0'></img>
                                </a>
                            </div>
                            
                            <p className='text-sm py-1.5 text-[#9eaab7] dark:text-[#4e4e4e]'>A Nasa api explorer.</p>
                            <p className='text-sm'>Node · React</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg bg-[#44444444] dark:bg-[#b1b1b175] backdrop-blur-sm w-full p-3 sm:p-3.5 flex justify-between">
                    <div className='flex flex-col w-full' href='https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands'>
                        <div>
                            <div className='flex w-full justify-between'>
                                <p className="text-xl leading-none">My Website</p>
                                <a href="/">
                                    <img src='/icons/link.png' className='h-4 w-4 invert dark:invert-0'></img>
                                </a>
                            </div>
                            
                            <p className='text-sm py-1.5 text-[#9eaab7] dark:text-[#4e4e4e]'>This website I made.</p>
                            <p className='text-sm'>Node · React</p>
                        </div>
                    </div>
                </div>

                

                
                
                {/* <div className="rounded-lg bg-[#44444444] dark:bg-[#b1b1b175] backdrop-blur-sm w-full p-3 sm:p-3.5 flex justify-between">
                    <div className='flex flex-col w-full' >
                        <div className='flex w-full justify-between'>
                            <div className='flex items-center gap-2 mb-1'>
                                <img src='/avatar.jpg' alt='ok' className='w-4 h-4 rounded-full' />
                                <p className='text-xs'><a href='https://github.com/Insticthere'>Insticthere</a></p>
                            </div>
                            <a href='https://github.com/Insticthere/Instict.dev' target="_blank" rel="noopener noreferrer">
                            <img src='/icons/link.png' className='h-4 w-4 invert dark:invert-0 aspect-square'></img>
                            </a>
                        </div>
                        <div>
                            <p className="text-xl">My Website</p>
                            <p className='text-sm pb-0.5'>This website I made.</p>
                            <p className='text-sm'>React · Last updated on {webRepoUpdated}</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg bg-[#44444444] dark:bg-[#b1b1b175] backdrop-blur-sm w-full p-3 sm:p-3.5 flex justify-between">
                    <div className='flex flex-col w-full' >
                        <div className='flex w-full justify-between'>
                            <div className='flex items-center gap-2 mb-1'>
                                <img src='/avatar.jpg' alt='ok' className='w-4 h-4 rounded-full aspect-square' />
                                <p className='text-xs'><a href='https://github.com/Insticthere'>Insticthere</a></p>
                            </div>
                            <a href='https://nasa-api-explorer-xi.vercel.app/' target="_blank" rel="noopener noreferrer">
                            <img src='/icons/link.png' className='h-4 w-4 invert dark:invert-0'></img>
                            </a>
                            
                        </div>
                        <div>
                            <p className="text-xl">Nasa api explorer</p>
                            <p className='text-sm pb-0.5'>A Nasa api explorer made in react using the <a href='https://api.nasa.gov/'  target="_blank" rel="noreferrer">Nasa Api.</a></p>
                            <p className='text-sm'>React · Last updated on {nasaRepoUpdated}</p>
                        </div>  
                    </div>
                </div> */}
                    
            </div>
        </div>
    )
}

export default Projects;

