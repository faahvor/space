const Home = () => {
  return (
    <div className="lg:bg-desktop bg-mobile bg-cover bg-center   md:bg-tablet h-screen flex items-center justify-center">
      <div className="  flex lg:flex-row flex-col justify-center justify-items-center lg:mx-auto   text-white    lg:gap-[20rem]  ">
        <div className=" md:w-[35rem]   md:px-0 px-6 lg:h-[450px] lg:w-[382px] text-center lg:text-left">
          <h1 className="text-[19px] tracking-[3.38px]  mt-[6rem]   font-con md:text-[28px]   font-normal">
            {" "}
            So, you want to travel to
          </h1>
          <p className=" font-belle font-normal text-[80px] md:text-[90px] md:text-center lg:text-[120px] uppercase   ">
            Space
          </p>
          <p className=" font-normal font-barlow text-[15px] md:text-[16px] mx-[5rem] md:mx-auto  ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="md:mt-[2rem] lg:mt-[10rem] mt-[2rem] text-center lg:text-start ">
          <button className="bg-white  text-black uppercase  rounded-full text-[32px] font-belle font-normal h-[220px] w-[220px] md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] ">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
