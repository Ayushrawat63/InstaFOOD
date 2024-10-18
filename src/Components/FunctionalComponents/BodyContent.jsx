import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CARD_DETAILS_API } from "../../common/apiLinks";
import { DishImageAPI } from "../../common/apiLinks";
import DishList from "./DishList";

const styleLink = {
  color: "black",
  textDecoration: "none",
};

const BodyContent = () => {
  const [array, setArray] = useState([]);
  const [copyArray, setCopyArray] = useState([]);
  const [dish, setDish] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(CARD_DETAILS_API);
    const jsonData = await data.json();
    setDish(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    setArray(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setCopyArray(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const clickHandler = () => {
    const newData = array.filter((elem) => elem.info.avgRating > 4);
    setCopyArray(newData);
  };

  return array === undefined || array.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-10">
      <div className="px-4 sm:px-6 md:px-10 lg:px-20">
        <h1 className="font-extrabold text-xl sm:text-2xl my-6 ml-5 sm:ml-10">What's on your mind?</h1>
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-11/12 ml-4 sm:ml-10 overflow-x-scroll">
          {dish?.map((elem) => (
            <DishList data={elem} key={elem.id} />
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-4 h-20">
        <div className="mx-3 text-lg sm:text-xl">
          <input
            type="text"
            data-testid="inputBox"
            className="border-2 mr-3 p-2 w-full sm:w-auto"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="mt-2 sm:mt-0 px-3 py-2 bg-orange-400 text-white font-bold rounded-2xl"
            onClick={() => {
              const newarray = array.filter((elem) =>
                elem.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setSearchValue("");
              setCopyArray(newarray);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="mt-2 sm:mt-0 sm:ml-3 px-3 py-2 bg-orange-400 text-white font-bold rounded-2xl capitalize"
          onClick={clickHandler}
        >
          Rating 4.0+
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 sm:m-8 p-4 sm:p-14">
        {copyArray.map((elem, i) => (
          <Link
            to={`/restaurant/${elem.info.id}`}
            key={elem.info.id}
            className={`link${i}`}
            style={styleLink}
          >
            <RestaurantCard data={elem.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyContent;
