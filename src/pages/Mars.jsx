import Data from "../Data.js";

const Mars = () => {
  const destinationData = Data[0]?.destinations?.find(
    (dest) => dest.name === "Mars"
  );

  if (!destinationData) {
    return <div>Destination not found</div>;
  }

  return (
    <div>
      <h1>{destinationData.name}</h1>
      <img src={destinationData.images.png} alt={destinationData.name} />
      <p>{destinationData.description}</p>
      <p>Avg Distance: {destinationData.distance}</p>
      <p>Est. Travel Time: {destinationData.travel}</p>
    </div>
  );
};

export default Mars;
