import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CARD_DETAILS_API } from "../../common/apiLinks";
import { DishImageAPI } from "../../common/apiLinks";
import DishList from "./DishList";
// import useFetchCardDetail from "../../Hooks/useFetchCardDetail";

const styleLink = {
  color: "black",
  textDecoration: "none",
  marginLeft: "20px",
};
const BodyContent = () => {
  const [array, setArray] = useState([]);
  const [copyArray, setCopyArray] = useState([]); 
  const [dish,setDish]=useState([]);
  const [searchValue, setSearchValue] = useState("");
  // console.log("hum first");// it will be printed 2 times by default . first time when  the components is  render and second time  when useEffect render the component again.

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(CARD_DETAILS_API);

    const jsonData = await data.json();
    // console.log(jsonData)
    //optional chaining
    setDish(
      jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    )
    setArray(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setCopyArray(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // console.log(array);

  const clickHandler = () => {
    const newData = array.filter((elem) => {
      return elem.info.avgRating > 4;
    });
    setCopyArray(newData);
  };

  // const showMoreHandler=()=>{
  //   console.log("hello ji")
  // }/

  // condtional rendering
  return array.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-10">
      <div  className=" px-20  ">
         <h1 className="font-extrabold text-2xl my-6 ml-20">What's on your mind?</h1>
         <div className="flex w-11/12  ml-16 overflow-x-scroll">
          {dish.map((elem)=>{
            // console.log(elem)
            return(
              
               <DishList data={elem} key={elem.id}/>
              
              // <DishList key={elem.id} px-6 mx-3 name={elem.action.text} imgID={elem.imageId}/>
            )
            
          })}
         </div>
      </div>
      <div className="  flex justify-center  items-center mt-4 h-20">
        <div className="mx-3 text-xl  ">
          <input
            type="text"
            data-testid="inputBox"
            className=" border-2 mr-3"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          ></input>
          <button
            className=" px-3 py-2 bg-orange-400 text-white font-bold  rounded-2xl"
            onClick={() => {
              // console.log(searchValue);
              const newarray = array.filter((elem) => {
                return elem.info.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
              });
              setSearchValue("")
              setCopyArray(newarray);
            }}
          >
            Search
          </button>
        </div>
        <button className=" px-3 py-2 bg-orange-400 text-white font-bold  rounded-2xl capitalize"
          onClick={() => clickHandler()}>
         rating 4.0+
        </button>
      </div>

      <div className=" grid grid-cols-4 gap-4  m-8 p-14 ">
        {copyArray.map((elem, i) => {
          return (
            <Link
              to={`/restaurant/${elem.info.id}`}
              key={elem.info.id}
              className={`link${i}`}
              style={styleLink}
            >
              {" "}
              <RestaurantCard data={elem.info} />
            </Link>
          );
        })}

        {/* <button className=" w-36 py-3 border-2 ml-[175%]  border-orange-400 rounded-2xl capitalize" onClick={()=>{showMoreHandler()}}>Show more</button> */}
      </div>


    </div>
  );
};

export default BodyContent;
