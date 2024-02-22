const Card = ({ image, caption, type }: {image:any, caption:string, type:any}) => {
  const cardClasses = () => {
    switch (type) {
      case "full-width":
        return "w-full";
      case "default":
      default:
        return "w-1/2";
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${cardClasses()}`}>
      <img src={image} alt={caption} className="mb-2" />
      <p className="text-gray-700">{caption}</p>
    </div>
  );
};

export default Card;
