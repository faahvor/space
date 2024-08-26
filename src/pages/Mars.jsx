import Data from "../Data.js";

const Mars = () => {
  const destinationData = Data[0]?.destinations?.find(
    (dest) => dest.name === "Mars"
  );

  return (
    <div className="flex lg:flex-row flex-col justify-center justify-items-center mx-[2rem] lg:gap-[10rem]">
      <div className="flex flex-1 flex-col items-center">
        <h1 className="text-[28px] font-barlow font-normal flex gap-4 md:ml-[-30rem] lg:ml-0">
          <span className="text-[#D0D6F9]">01</span>
          <span className="uppercase">Pick your destination</span>
        </h1>
        <img
          className="lg:h-[390px] lg:w-[390px] w-[300px] h-[300px] pl-[4rem] lg:pt-[5rem]"
          src={destinationData.images.png} alt={destinationData.name}
        />
      </div>
      <div className="flex flex-2 flex-col lg:w-[445px] lg:h-[472px] pt-[4rem] items-center lg:items-start">
       
        <h1 className="lg:text-[100px] text-[80px] uppercase font-belle">
          {destinationData.name}
        </h1>
        <div>
          <p className="lg:text-[18px] text-[16px] font-barlow leading-[32px] pb-5 w-[35rem] lg:w-auto lg:text-start text-center">
            {destinationData.description}
          </p>
        </div>
        <div className="flex gap-6">
          <span>
            <h3 className="text-[14px] font-con text-[#D0D6F9] uppercase">
              Avg Distance:
            </h3>
            <p className="text-[28px] font-belle font-normal">
              {destinationData.distance}
            </p>
          </span>
          <span>
            <h3 className="text-[14px] font-con text-[#D0D6F9] uppercase">
              Est. Travel Time:
            </h3>
            <p className="text-[28px] font-belle font-normal">
              {destinationData.travel}
            </p>
          </span>
        </div>
      </div>
    </div>
    // <div>
    //   <h1>{destinationData.name}</h1>
    //   <img src={destinationData.images.png} alt={destinationData.name} />
    //   <p>{destinationData.description}</p>
    //   <p>Avg Distance: {destinationData.distance}</p>
    //   <p>Est. Travel Time: {destinationData.travel}</p>
    // </div>
  );
};

export default Mars;
