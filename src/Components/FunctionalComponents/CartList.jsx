import { useDispatch, useSelector } from "react-redux";
import { CARD_API } from "../../common/apiLinks";
import { removeItem } from "../../Redux/cartSlice";
import { removeInfo } from "../../Redux/restInfoSlice";

const CartList = ({ data }) => {
    const { name, imageId, price, defaultPrice, description } = data.card.info;

    const dispatch = useDispatch();
    const restDetails = useSelector((store) => store.restInfo);

    const clickAddHandler = () => {
        dispatch(removeItem(data));
    };

    return (
        <>
            <div className="border-b-[1.5px] border-slate-300 px-4 sm:px-6 pt-4 pb-6 flex mb-2 h-auto sm:h-36 flex-col sm:flex-row">
                <div className="w-full sm:w-9/12 flex flex-col text-left mb-4 sm:mb-0">
                    <h3 className="font-bold text-lg sm:text-xl">{restDetails.name}</h3>
                    <span className="text-custom-black text-sm sm:text-base">
                        {restDetails.areaName}
                    </span>
                    <div className="flex items-center mt-2">
                        <img
                            className="w-4 h-4"
                            src={
                                data.card.info.isVeg === 1
                                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1UX6Mympfgzpt8oWeLxiL0t49yU63Y9VTw&usqp=CAU"
                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ftUXxbShY5C3ZLf95ZdKQwVNwIjH8HBjgg&usqp=CAU"
                            }
                            alt="veg or non-veg logo"
                        />
                        <span className="ml-2 text-sm sm:text-base"> {name} |</span>
                        <span className="font-semibold ml-2 text-sm sm:text-base">
                            ₹ {price !== undefined ? price / 100 : defaultPrice / 100}{" "}
                        </span>
                    </div>
                    <p className="text-gray-400 font-sans text-sm text-ellipsis overflow-hidden h-16 sm:h-28 w-full whitespace-normal sm:whitespace-nowrap mt-2 sm:mt-0">
                        {description}
                    </p>
                </div>
                <div className="w-full sm:w-3/12 relative flex sm:block items-center justify-center sm:justify-end pt-2">
                    {imageId !== undefined ? (
                        <img
                            className="rounded-lg w-24 h-24 sm:w-20 sm:h-20 "
                            src={CARD_API + restDetails.cloudinaryImageId}
                            alt="food item"
                        />
                    ) : (
                        " "
                    )}
                    <button
                        className="ml-4 lg:ml-8 lg:top-7 sm:ml-0 sm:absolute border-[0.5px] border-gray-300 p-2 rounded-lg bg-white text-red-500 font-bold text-xs sm:text-sm top-16 left-14 hover:bg-slate-200"
                        onClick={clickAddHandler}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartList;
