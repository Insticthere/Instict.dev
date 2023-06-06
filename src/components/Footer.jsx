function Footer() {

  return (
  <div className="bottom-0 left-0 w-full py-2.5 bg-[#161616] dark:bg-[#dbdbdb]">
        <div className="max-w-[var(--pgwidth)] w-[95%] min-[2100px]:w-[65vw] min-[2100px]:max-w-7xl mx-auto flex items-center gap-2 px-3 underline">
            <a href="https://github.com/Insticthere/Instict.dev">
                <h1 className="leading-[0.9] text-left text-[15px] font-[Poppins,sans-serif] text-[#9eaab7] dark:text-[#2b2b2b]">This site is open source on github</h1>
            </a>
        </div>
    </div>
  );
}

export default Footer;