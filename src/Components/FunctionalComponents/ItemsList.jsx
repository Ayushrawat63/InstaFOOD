import { useDispatch } from "react-redux";
import { ItemAPI } from "../../common/apiLinks";
import { addItem } from "../../Redux/cartSlice";
import { addInfo } from "../../Redux/restInfoSlice";

const ItemsList = ({ data, details }) => {
  const { name, imageId, price, defaultPrice, description } = data.card.info;

  const dispatch = useDispatch();
  const clickAddHandler = () => {
    // Dispatch actions for adding item and restaurant info
    dispatch(addItem(data));
    dispatch(addInfo(details));
  };

  return (
    <>
      <div className="border-b-[1.5px] border-slate-300 my-4 p-2 flex flex-col sm:flex-row h-auto sm:h-52">
        {/* Left side: Item details */}
        <div className="w-full sm:w-9/12 flex flex-col text-left mb-4 sm:mb-0">
          <img
            className="w-4 h-4 mb-2"
            src={
              data.card.info.isVeg === 1
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1UX6Mympfgzpt8oWeLxiL0t49yU63Y9VTw&usqp=CAU"
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ftUXxbShY5C3ZLf95ZdKQwVNwIjH8HBjgg&usqp=CAU"
            }
            alt="veg or non-veg logo"
          />
          <h3 className="font-semibold text-sm sm:text-base md:text-lg">{name}</h3>
          <span className="font-semibold text-sm sm:text-base md:text-lg">
            ₹ {price != undefined ? price / 100 : defaultPrice / 100}
          </span>
          <p className="text-gray-400 font-sans text-xs sm:text-sm overflow-hidden text-ellipsis whitespace-nowrap w-5/6 ">
            {description}
          </p>
        </div>

        {/* Right side: Item image and button */}
        <div className="w-full sm:w-3/12 relative">
          {imageId != undefined ? (
            <img
              className="rounded-lg w-28 h-28 sm:w-36 sm:h-36 mx-auto sm:absolute sm:left-4"
              src={ItemAPI + imageId}
              alt={name}
            />
          ) : (
            " "
          )}

          <button
            className="border-[0.5px] border-gray-300 px-6 sm:px-8 py-2 rounded-xl bg-white text-green-600 font-bold text-sm sm:text-lg mt-2 sm:mt-0 sm:absolute sm:top-32 sm:right-[45px] hover:bg-slate-200"
            onClick={clickAddHandler}
          >
            Add
          </button>
          <span className="text-gray-400 text-xs mt-1 sm:mt-0  sm:absolute sm:top-44 sm:right-14">
            Customisable
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemsList;
