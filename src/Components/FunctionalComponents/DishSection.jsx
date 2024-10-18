import { Link, useParams } from "react-router-dom";
import useDishData from "../../Hooks/useDishData";
import Shimmer from "./Shimmer";
import RestaurantCard from "../FunctionalComponents/RestaurantCard";

const styleLink = {
  color: "black",
  textDecoration: "none",
  marginLeft: "4px",
};

const DishSection = () => {
  const params = useParams();
  const { dishId } = params;
  const cards = useDishData(dishId);

  const newCards = cards.filter((elem, i) => {
    if (i !== 0 && i !== 1) return elem;
  });

  return cards.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 pt-5 mx-4 sm:mx-8 md:mx-10 mb-10">
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            {cards[0].card.card.title}
          </h1>
          <p className="font-medium text-lg sm:text-xl mt-3 text-custom-black">
            {cards[0].card.card.description}
          </p>
        </div>

        <div className="mt-8">
          <h1 className="font-bold text-xl sm:text-2xl mb-5">
            Restaurants to explore
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {newCards.map((elem, i) => {
              return (
                <Link
                  key={elem.card.card.info.id}
                  to={`/restaurant/${elem.card.card.info.id}`}
                  className={`dish${i}`}
                  style={styleLink}
                >
                  <RestaurantCard data={elem.card.card.info} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DishSection;
