import { useDispatch } from "react-redux";
import { ItemAPI } from "../../common/apiLinks";
import { addItem } from "../../Redux/cartSlice";
import { addInfo } from "../../Redux/restInfoSlice";
const ItemsList = ({ data ,details }) => {
  // console.log(data);
  const { name, imageId, price, defaultPrice, description } = data.card.info;
  // console.log(price);

  //function defination

  const dispatch = useDispatch();
  const clickAddHandler = () => {
    //dispatch a action
    dispatch(addItem(data));
    dispatch(addInfo(details));

  };

  return (
    <>
      <div className="  border-b-[1.5px] border-slate-300 my-4 p-2 flex h-52 ">
        <div className="w-9/12  flex flex-col text-left ">
          <img
            className="w-4 h-4"
            src={
              data.card.info.isVeg === 1
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1UX6Mympfgzpt8oWeLxiL0t49yU63Y9VTw&usqp=CAU"
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ftUXxbShY5C3ZLf95ZdKQwVNwIjH8HBjgg&usqp=CAU"
            }
            alt="veg aur non-veg logo"
          />
          <h3 className="font-semibold">{name}</h3>
          <span className="font-semibold">
            ₹ {price != undefined ? price / 100 : defaultPrice / 100}{" "}
          </span>
          <span>
            {/* {(data.card.info.ratings.aggregatedRating===null)? {} :{}} */}
          </span>
          <p className="text-gray-400 font-sans text-sm">{description}</p>
        </div>
        <div className=" w-3/12  relative pt-2">
          {/* Logo item  */}
          {imageId != undefined ? (
            <img
              className="rounded-lg w-36 h-36 absolute left-4"
              src={ItemAPI + imageId}
            />
          ) : (
            " "
          )}

          <button
            className="absolute border-[0.5px] border-gray-300  px-8 rounded-xl py-2 bg-white text-green-600 font-bold text-lg top-32 right-[45px] hover:bg-slate-200"
            onClick={clickAddHandler}
          >
            Add
          </button>
          <span className="text-gray-400 text-xs absolute top-44 right-14 mt-[-2px] ">
            Customisable
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemsList;
