import Data from "../Data.js";

const Europa = () => {
  const destinationData = Data[0]?.destinations?.find(
    (dest) => dest.name === "Europa"
  );

  return (
    <div className="flex lg:flex-row flex-col justify-center justify-items-center mx-[2rem] lg:gap-[10rem] mt-[3px] lg:mt-0">
      <div className="flex flex-1 flex-col items-center">
        <h1 className="text-[28px] font-barlow font-normal flex gap-4 md:ml-[-30rem] lg:ml-0">
          <span className="text-[#D0D6F9]">01</span>
          <span className="uppercase">Pick your destination</span>
        </h1>
        <img
          className="lg:h-[390px] lg:w-[390px] md:w-[300px] md:h-[290px] w-[259px] h-[259px] pl-[4rem] lg:pt-[5rem] mr-[4rem] lg:mr-0"
          src={destinationData.images.png} alt={destinationData.name}
        />
      </div>
      <div className="flex flex-2 flex-col lg:w-[445px] lg:h-[472px] pt-[4rem] ml-[10rem]  items-center lg:items-start">
       
        <h1 className="lg:text-[80px]  text-[56px] mt-[1rem] md:mt-[-2rem] lg:mt-[4rem] uppercase font-belle mr-[9rem] lg:mr-0">
          {destinationData.name}
        </h1>
        <div>
          <p className="lg:text-[18px] text-[16px] font-barlow leading-[32px] pb-5 md:w-[573px] w-[327px] lg:w-auto mr-[9rem] lg:mr-0 text-center lg:text-start">
            {destinationData.description}
          </p>
        </div>
        <div className="flex gap-6 mr-[9rem] lg:mr-0">
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

export default Europa;
