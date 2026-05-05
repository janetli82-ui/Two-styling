import { getImageURL } from "../../utils/function";
import type { TeaProps } from "../../types/types";


const TeaCard = ({
  id,
  name,
  region,
  flavor,
  benefit,
  price,
  image,
  selectedId, 
  updateFunction,
}: TeaProps) => {
    const heartColor = selectedId.includes(id) ? "❤️" : "🤍";
    const heartClick = () => {
      const newFavorite = !selectedId.includes(id);
      updateFunction(newFavorite ? 1 : -1, id);
    }

  return (
    <div className="flex flex-col items-center border border-blue-200 rounded-2xl">
      <div className="p-6">
        <h4 className="text-1xl font-bold ">Tea name: {name}</h4>
        <img
          src={getImageURL(image)}
          alt={name}
          className="h-50 w-auto object-cover mt-5 mb-5 p-5"
        />
        <p>Region: {region}</p>
        <p>Flavor: {flavor}</p>
        <p>Benefit: {benefit}</p>
        <p>Price: {price}Kr/kg</p>
        <button onClick={heartClick}>
          {heartColor} Favorite
        </button>
      </div>
    </div>
  );
};

export default TeaCard;
