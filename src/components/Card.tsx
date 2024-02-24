type linkType = {
  link: string;
  caption: string;
};

const Card = ({ image, caption, type, link, title }: {image:any, caption:string, type:any, link?:linkType, title?:string}) => {
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
      <img src={image} alt={caption} className="mb-2 w-full"/>
      {title && (
        <h2 className="text-lg py-2 font-bold">{title}</h2>
      )}
      <p className="text-gray-700">{caption}</p>
      {link && (
        <a href={link.link} className="text-blue-600 underline">{link.caption}</a>
      )}
    </div>
  );
};

export default Card;
