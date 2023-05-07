import { useState, useEffect } from 'react';

function Projects() {
    const [NasarepoUpdated, setNasarepoUpdated] = useState(null);
    useEffect(() => {
        const Nasarepo = 'https://api.github.com/repos/Insticthere/nasa-api-explorer';
    
        fetch(Nasarepo)
          .then(response => response.json())
          .then(data => {
            const lastUpdated = new Date(data.updated_at);
            setNasarepoUpdated(lastUpdated.toLocaleDateString());
          })
          .catch(error => console.error(error));
      }, []);
    return(
        <div className="mx-2 pb-2">
            <hr className="w-full my-4 bg-gray-600 border-none h-[1px]"></hr>
            <h1 className="text-3xl pb-1 font-['Outfit',sans-serif;] text-center">Projects</h1>
            <p className='text-center'>random timepass projects</p>
            <div className="pt-2">
                    <div className="rounded-lg bg-[#1c1c2175] backdrop-blur-sm mb-2">
                        <div className="p-4 flex justify-between z-10 ">
                            <div className='flex flex-col justify-between'>
                                <div className='flex items-center gap-2 mb-1'>
                                    <img src='/avatar.jpg' alt='ok' className='w-4 h-4 rounded-full'></img>
                                    <p className='text-xs'><a href='https://github.com/Insticthere'>Insticthere</a></p>
                                </div>
                                
                                <div>
                                    <p className="text-xl my-1">OPPA</p>
                                    <p className='text-sm pb-0.5'>A Discord bot for fetching kdrama online made using <a href='https://discordjs.dev/'  target="_blank" rel="noreferrer">Discord.js</a></p>
                                    <p className='text-sm'>Djs</p>
                                </div>
                            </div>
                            <div>
                                <a className="fa-solid fa-link" href="https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands" target="_blank" rel="noreferrer"></a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-[#1c1c2175] backdrop-blur-sm mb-2">
                        <div className="p-4 flex justify-between z-10 ">
                            <div className='flex flex-col justify-between'>
                                <div className='flex items-center gap-2 mb-1'>
                                    <img src='/avatar.jpg' alt='ok' className='w-4 h-4 rounded-full'></img>
                                    <p className='text-xs'><a href='https://github.com/Insticthere'>Insticthere</a></p>
                                </div>
                                
                                <div>
                                    <p className="text-xl my-1">Nasa api explorer</p>
                                    <p className='text-sm pb-0.5'>A Nasa api explorer made in react using the <a href='https://api.nasa.gov/'  target="_blank" rel="noreferrer">Nasa Api.</a></p>
                                    <p className='text-sm'>React · Last updated on {NasarepoUpdated}</p>
                                </div>
                            </div>
                            <div>
                                <a className="fa-solid fa-link" href="https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands" target="_blank" rel="noreferrer"></a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Projects;

// <div className="rounded-lg bg-[#1c1c2175] backdrop-blur-sm mb-2">
// <div className="p-4 flex justify-between z-10 ">
//     <div className='flex flex-col justify-between'>
//         <div className='flex items-center gap-2 mb-1'>
//             <img src='/avatar.jpg' alt='ok' className='w-4 h-4 rounded-full'></img>
//             <p className='text-xs'>Insticthere</p>
//         </div>
        
//         <div>
//             <p className="text-xl my-1">Nasa api explorer</p>
//             <p className='text-sm pb-0.5'>A Nasa api explorer made in react using the <a href='https://discordjs.dev/'  target="_blank" rel="noreferrer">nasa api.</a></p>
//             <p className='text-sm'>React · Last updated on {NasarepoUpdated}</p>
//         </div>
//     </div>
//     <div>
//         <a className="fa-solid fa-link" href="https://discord.com/oauth2/authorize?client_id=952146365364977674&permissions=414464658496&scope=bot%20applications.commands" target="_blank" rel="noreferrer"></a>
//     </div>
// </div>
// </div>