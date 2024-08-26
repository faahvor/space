import Data from "../Data.js";

const Moon = () => {
  const destinationData = Data[0]?.destinations?.find(
    (dest) => dest.name === "Moon"
  );

  return (
    <div className="flex flex-2 flex-col lg:w-[445px] lg:h-[472px] pt-[4rem] items-center lg:items-start">
      <div>
      <img
        className="lg:h-[390px] lg:w-[390px] w-[300px] h-[300px] pl-[4rem] lg:pt-[5rem]"
        src={destinationData.images.png}
        alt={destinationData.name}
      />
      </div>
      <div>
      <h1 className="lg:text-[100px] text-[80px] uppercase font-belle">
        {destinationData.name}
      </h1>
      <p className="lg:text-[18px] text-[16px] font-barlow leading-[32px] pb-5 w-[35rem] lg:w-auto lg:text-start text-center">
        {destinationData.description}
      </p>
      <div className="flex gap-6">
        <p>
          {" "}
          <span>
            <h3 className="text-[14px] font-con text-[#D0D6F9] uppercase">
              Avg Distance:{" "}
            </h3>{" "}
            <p className="text-[28px] font-belle font-normal">
              {destinationData.distance}
            </p>
          </span>
        </p>
        <p>
          {" "}
          <span>
            <h3 className="text-[14px] font-con text-[#D0D6F9] uppercase">
              Est. Travel Time:
            </h3>{" "}
            <p className="text-[28px] font-belle font-normal">
              {destinationData.travel}
            </p>
          </span>{" "}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Moon;
