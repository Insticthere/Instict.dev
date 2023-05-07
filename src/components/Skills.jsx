function Skills() {
    return(
        <>
            <div className="px-2">
                <hr className="w-full my-4 bg-gray-600 border-none h-[1px]"></hr>
                <h1 className="font-['Outfit',sans-serif;] text-3xl text-center">My Skills</h1>
                <div className="grid grid-cols-5 sm:grid-cols-6 gap-4 pt-5">
                    <div className="group relative">
                        <img src="https://skillicons.dev/icons?i=js" className="w-full h-full group-hover:scale-[1.02] group-hover:blur-[0.3px] duration-150 ease-in-out group-hover:brightness-50"></img>
                        <div className="absolute inset-2 flex items-end">
                            <p className="hidden group-hover:block overflow-ellipsis dark:text-white text-base">JS</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <img src="https://skillicons.dev/icons?i=html" className="w-full h-full group-hover:scale-[1.02] group-hover:blur-[0.3px] duration-150 ease-in-out group-hover:brightness-50"></img>
                        <div className="absolute inset-2 flex items-end">
                            <p className="hidden group-hover:block overflow-ellipsis dark:text-white text-base">HTML</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <img src="https://skillicons.dev/icons?i=css" className="w-full h-full group-hover:scale-[1.02] group-hover:blur-[0.3px] duration-150 ease-in-out group-hover:brightness-50"></img>
                        <div className="absolute inset-2 flex items-end">
                            <p className="hidden group-hover:block overflow-ellipsis dark:text-white text-base">CSS</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <img src="https://skillicons.dev/icons?i=nodejs" className="w-full h-full group-hover:scale-[1.02] group-hover:blur-[0.3px] duration-150 ease-in-out group-hover:brightness-50"></img>
                        <div className="absolute inset-2 flex items-end">
                            <p className="hidden group-hover:block overflow-ellipsis dark:text-white text-base">Node Js</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <img src="https://skillicons.dev/icons?i=react" className="w-full h-full group-hover:scale-[1.02] group-hover:blur-[0.3px] duration-150 ease-in-out group-hover:brightness-50"></img>
                        <div className="absolute inset-2 flex items-end">
                            <p className="hidden group-hover:block overflow-ellipsis dark:text-white text-base">React</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <img src="https://skillicons.dev/icons?i=bots" className="w-full h-full group-hover:scale-[1.02] group-hover:blur-[0.3px] duration-150 ease-in-out group-hover:brightness-50"></img>
                        <div className="absolute inset-2 flex items-end">
                            <p className="hidden group-hover:block overflow-ellipsis dark:text-white text-base">Djs</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <img src="https://skillicons.dev/icons?i=vscode" className="w-full h-full group-hover:scale-[1.02] group-hover:blur-[0.3px] duration-150 ease-in-out group-hover:brightness-50"></img>
                        <div className="absolute inset-2 flex items-end">
                            <p className="hidden group-hover:block overflow-ellipsis dark:text-white text-base">VS Code</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <img src="https://skillicons.dev/icons?i=python" className="w-full h-full group-hover:scale-[1.02] group-hover:blur-[0.3px] duration-150 ease-in-out group-hover:brightness-50"></img>
                        <div className="absolute inset-2 flex items-end">
                            <p className="hidden group-hover:block overflow-ellipsis dark:text-white text-base">Python</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;