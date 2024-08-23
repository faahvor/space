const Home = () => {
  return (
    <div className="gap-[6rem] lg:bg-desktop bg-mobile bg-cover h-screen md:bg-tablet ">
      <div className="lg:w-[25rem] md:md:w-[35rem] lg:mx-[10rem] md:px-0 px-6">
        <h1 className="text-[19px] tracking-[2.7px]  text-center font-con md:text-[20px] lg:text-[28px] font-normal md:text-center">
          {" "}
          So, you want to travel to
        </h1>
        <p className="text-center font-belle font-normal text-[80px] md:text-[90px] md:text-center lg:text-[90px] uppercase mt-5">
          Space
        </p>
        <p className="text-center font-normal font-barlow text-[15px] md:text-[19px] md:text-center  lg:text-[18px] ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <button className="bg-white text-black  rounded-full text-[32px] font-belle font-normal h-[150px] w-[150px] md:h-[242px] md:w-[242px] lg:h-[274px] lg:w-[274px]">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Home;
