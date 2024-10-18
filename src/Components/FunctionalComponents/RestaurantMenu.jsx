import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { Star_API } from "../../common/apiLinks";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const params = useParams();
  const { resId } = params;
  const resInfo = useRestaurantMenu(resId);
  
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    costForTwoMessage,
    avgRating,
    cuisines,
    totalRatingsString,
    areaName,
    sla,
    cloudinaryImageId
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const { cards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const newCards = cards.filter((elem) => {
    if (elem.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
      return elem;
    }
  });

  return (
    <div className="w-full sm:w-10/12 md:w-8/12 mx-auto my-4 ">
      <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold font-sans text-left pl-4 pt-2">
        {name}
      </h1>
      <div className="w-full md:w-11/12  mx-auto my-4 p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg text-left border border-slate-300">
        <div className="flex flex-wrap items-center">
          <img src={Star_API} className="w-8 h-8 md:w-12 md:h-12" alt="star logo" />
          <span className="font-bold text-sm sm:text-base md:text-lg ml-2">
            {avgRating} ({totalRatingsString})
          </span>
          <span className="font-bold text-slate-500 mx-2 text-sm sm:text-base md:text-lg">•</span>
          <span className="text-sm sm:text-base   text-orange-500 underline font-bold">{cuisines.join(", ")}</span>
        </div>
        <div className="mt-4 text-sm sm:text-base text-slate-500">
          <span>{areaName}, {sla?.lastMileTravelString}</span>
          <div>{costForTwoMessage}</div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <span>--------------------</span>
        <h4 className="mx-2">Menu</h4>
        <span>--------------------</span>
      </div>

      <div className="mt-4  p-4 sm:p-6">
        {newCards.map((elem, i) => (
          <RestaurantCategory
            key={elem.card.card.itemCards[0].card.info.id * 5}
            items={elem}
            showItems={i === showIndex}
            setShowItems={() => {
              i === showIndex ? setShowIndex(null) : setShowIndex(i);
            }}
            details={{ name, areaName, sla, cloudinaryImageId }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
