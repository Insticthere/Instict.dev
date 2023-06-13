function Footer() {

  return (
  <div className="bottom-0 left-0 w-full py-1.5 bg-[#161616] dark:bg-[#dbdbdb] max-sm:py-2 max-sm:mt-3">
        <div className="max-w-[var(--pgwidth)] w-[95%] min-[2100px]:w-[65vw] min-[2100px]:max-w-7xl mx-auto flex items-center gap-2 px-3 hover:underline">
            <a href="https://github.com/Insticthere/Instict.dev" className="flex items-center gap-2">
                <h1 className="text-left text-sm font-[Poppins,sans-serif] text-[#9eaab7] dark:text-[#2b2b2b]">This site is open source on github</h1>
            </a>
        </div>
    </div>
  );
}

export default Footer;