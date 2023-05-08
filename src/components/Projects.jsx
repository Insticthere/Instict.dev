import { useState, useEffect } from 'react';

function Projects() {
    const [nasaRepoUpdated, setNasaRepoUpdated] = useState(null);
    const [webRepoUpdated, setWebRepoUpdated] = useState(null);
    useEffect(() => {
        const Nasarepo = 'https://api.github.com/repos/Insticthere/nasa-api-explorer';
        const webrepo = 'https://api.github.com/repos/Insticthere/Instict.dev';

        fetch(webrepo)
            .then(response => response.json())
            .then(data => {
            const lastUpdated = new Date(data.updated_at);
            setWebRepoUpdated(lastUpdated.toLocaleDateString());
            })
            .catch(error => console.error(error));
    
        fetch(Nasarepo)
          .then(response => response.json())
          .then(data => {
            const lastUpdated = new Date(data.updated_at);
            setNasaRepoUpdated(lastUpdated.toLocaleDateString());
          })
          .catch(error => console.error(error));
        }, []);
    return(
        <div className="mx-2 pb-2">
            <hr className="w-full my-4 bg-gray-600 border-none h-[1px]"></hr>
            <h1 className="text-3xl pb-1 font-['Outfit',sans-serif;] text-center">Projects</h1>
            <p className='text-center'>random timepass projects</p>
            <div className="pt-2">
                <div className="rounded-lg bg-[#34343433] dark:bg-[#b1b1b175] backdrop-blur-sm mb-2 w-full p-4 flex justify-between">
                    <div className='flex flex-col justify-between w-full' href='https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands'>
                        <div className='flex w-full justify-between'>
                            <div className='flex items-center gap-2 mb-1'>
                                <img src='/avatar.jpg' alt='ok' className='w-4 h-4 rounded-full aspect-square' />
                                <p className='text-xs'><a href='https://github.com/Insticthere'>Insticthere</a></p>
                            </div>
                            <a href='https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands' target="_blank" rel="noopener noreferrer">
                                <img src='/icons/link.png' className='h-4 w-4 invert dark:invert-0'></img>
                            </a>
                            
                        </div>
                        <div>
                            <p className="text-xl my-1">OPPA</p>
                            <p className='text-sm pb-0.5'>A Discord bot for fetching kdrama online made using <a href='https://discordjs.dev/'  target="_blank" rel="noreferrer">Discord.js</a></p>
                            <p className='text-sm'>Node · Djs</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg bg-[#34343433] dark:bg-[#b1b1b175] backdrop-blur-sm mb-2 w-full p-4 flex justify-between">
                    <div className='flex flex-col justify-between w-full' >
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
                            <p className="text-xl my-1">Nasa api explorer</p>
                            <p className='text-sm pb-0.5'>A Nasa api explorer made in react using the <a href='https://api.nasa.gov/'  target="_blank" rel="noreferrer">Nasa Api.</a></p>
                            <p className='text-sm'>React · Last updated on {nasaRepoUpdated}</p>
                        </div>  
                    </div>
                </div>
                
                <div className="rounded-lg bg-[#34343433] dark:bg-[#b1b1b175] backdrop-blur-sm mb-2 w-full p-4 flex justify-between">
                    <div className='flex flex-col justify-between w-full' >
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
                            <p className="text-xl my-1">My Website</p>
                            <p className='text-sm pb-0.5'>This website I made.</p>
                            <p className='text-sm'>React · Last updated on {webRepoUpdated}</p>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default Projects;

