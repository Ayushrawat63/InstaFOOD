import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { Star_API } from "../../common/apiLinks";
import { useState} from "react";



const RestaurantMenu = () => {
  const [showIndex,setShowIndex]=useState(0);
  const params = useParams();
  // console.log(params);
  const { resId } = params;
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo)
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

  // console.log(resInfo?.data?.cards[2]?.card?.card?.info);

  const { cards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  // console.log(cards);
  const newCards = cards.filter((elem) => {
    if (
      elem.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
      return elem;
  });
  // console.log(newCards);

  // newCards.map(elem=>console.log(elem.card?.card?.title));

  // const newCards = cards.filter((elem, i) => {
  //   if (i != 0 && i != cards.length - 1 && i != cards.length - 2) return elem;
  // });
  // console.log(newCards);

  return (
    <div className="text-center w-8/12 mx-auto my-4">
      <h1 className="text-2xl font-extrabold font-sans text-left pl-6 pt-2">
        {name}
      </h1>
      <div className=" mx-auto my-4 px-4 py-8 w-11/12  rounded-xl shadow-2xl text-left border-[1px] border-slate-300 ">
        <div className=" flex items-center ">
          <img src={Star_API} className="w-12 h-12 " alt="star logo"></img>{" "}
          <span className="font-bold text-lg ml-[-6px]">
            {avgRating}({totalRatingsString})
          </span>
          <span className="font-bold text-slate-500 mx-2 text-lg">.</span>
          <span className="font-bold text-lg">{costForTwoMessage}</span>
        </div>
        <span className=" pl-4 text-orange-500 underline font-bold ">
          {cuisines.join(", ")}
        </span>
        <div className=" pl-4 mt-1">
          <span className="block text-base font-semibold">
            Outlet{" "}
            <span className="text-gray-400 font-normal ml-2">{areaName}</span>
          </span>
          <span className="block text-base font-semibold">{sla.slaString}</span>
        </div>
      </div>

      <div className="  mt-10 w-11/12   mx-auto">
        {/* {newCards.map((elem, i) => {
          return (
            <div key={i}>
              <h1>{elem.card.card.title}</h1>
              {elem.card.card.itemCards != undefined
                ? elem.card.card.itemCards.map((ele) => {
                    return (
                      <li key={ele.card.info.id}>
                        {ele.card.info.name} , price in Rs.{" "}
                        {ele.card.info.price / 100 ||
                          ele.card.info.defaultPrice / 100}
                      </li>
                    );
                  })
                : elem.card.card.categories != undefined
                ? elem.card.card.categories[0].itemCards.map((ele) => {
                    return (
                      <>
                        <ul key={ele.card.info.id}>
                          <li>
                            {ele.card.info.name} , price in Rs.{" "}
                            {ele.card.info.price / 100 ||
                              ele.card.info.defaultPrice / 100}
                          </li>
                        </ul>
                      </>
                    );
                  })
                : elem.card.card.carousel.map((elem) => {
                    return (
                      <ul key={elem.dish.info.id}>
                        <li>
                          {elem.dish.info.name} , price in Rs.{" "}
                          {elem.dish.info.price / 100 ||
                            elem.dish.info.defaultPrice / 100}
                        </li>
                      </ul>
                    );
                  })}
            </div>
          );
        })} */}
        <div className="flex justify-center">
          <span> --------------------</span>
          <h4> Menu </h4>
          <span> --------------------</span>
        </div>
        <div className="mt-4 bg-gray-100">
          {newCards.map((elem,i) => (
            <RestaurantCategory
              key={elem.card.card.itemCards[0].card.info.id * 5}
              items={elem}
              showItems={i===showIndex ? true: false}
              setShowItems={()=>{i===showIndex? setShowIndex(null): setShowIndex(i)}}
              details={{name,areaName,sla,cloudinaryImageId }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
