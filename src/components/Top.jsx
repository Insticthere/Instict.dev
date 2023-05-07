function Top() {

    
  return (
    <div  className="flex justify-between content-center flex-row gap-[10px] mt-[10%] mx-auto mt-10px">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-items-center items-center">
          <p className="mr-[10px] text-[7rem] m-0 instict leading-[9rem] font-[750]">Instict</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src="/avatar.jpg" alt="pfp" loading="lazy"  className="rounded-2xl max-w-[225px] min-w-[125px] w-[100%] h-auto hover:scale-[1.03] hover:origin-top-left ease-in-out duration-300 aspect-square" rel="preload"></img>
      </div>
    </div>
  );
}

export default Top;