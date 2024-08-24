const Destination = () => {
  return (
    <div className="min-h-screen pt-[6rem] lg:bg-destinationDesktop md:bg-destinationTablet bg-destinationMobile bg-cover bg-center text-white   flex items-end justify-center">
     
      <div className="flex lg:flex-row flex-col justify-center justify-items-center mx-[2rem] lg:gap-[10rem] ">
        
        <div className="flex flex-1 flex-col items-center ">
        <h1 className=" text-[28px] font-barlow font-normal flex gap-4 md:ml-[-30rem] lg:ml-0">
        <span className="text-[#D0D6F9]"> 01</span> <span className="uppercase">pick your destination</span>
      </h1>
          <img
            className="lg:h-[390px] lg:w-[390px] w-[300px] h-[300px] pl-[4rem] lg:pt-[5rem] "
            src="../src/assets/images/destination/image-moon.webp"
            alt=""
          />
        </div>
        <div className="flex flex-2 flex-col lg:w-[445px] lg:h-[472px] pt-[4rem] items-center lg:items-start">
          <div>
            <ul className="flex gap-[2rem] text-[16px] font-con uppercase text-[#D0D6F9] ">
              <li>Moon</li>
              <li>mars</li>
              <li>europa</li>
              <li>titan</li>
            </ul>
          </div>
          <h1 className="lg:text-[100px] text-[80px] uppercase font-belle ">moon</h1>
          <div>
            <p className="lg:text-[18px] text-[16px] font-barlow leading-[32px] pb-5 w-[35rem] lg:w-auto lg:text-start text-center">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites
            </p>
          </div>
          <div className="flex gap-6">
            <span>
              <h3 className="text-[14px] font-con text-[#D0D6F9] uppercase">avg distance</h3>
              <p className="text-[28px] font-belle font-normal">384,400 km</p>
            </span>
            <span>
              <h3 className="text-[14px] font-con text-[#D0D6F9] uppercase">est. travel tim</h3>
              <p className="text-[28px] font-belle font-normal">3 days</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
