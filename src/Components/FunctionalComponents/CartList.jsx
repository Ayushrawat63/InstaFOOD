import { useDispatch, useSelector } from "react-redux";
import { CARD_API, } from "../../common/apiLinks";
import {  removeItem } from "../../Redux/cartSlice";
import { removeInfo } from "../../Redux/restInfoSlice";

const CartList = ({ data }) => {
    // console.log(data);
    const { name, imageId, price, defaultPrice, description } = data.card.info;

    const dispatch = useDispatch();
    const restDetails=useSelector((store)=>store.restInfo);
    const clickAddHandler = () => {
        //dispatch a action
        dispatch(removeItem(data));
    };
    return (
        <>
            <div className="  border-b-[1.5px] border-slate-300  px-6 pt-4 pb-6 flex mb-2 h-36">
                <div className="w-9/12  flex flex-col text-left ">
                <h3 className="font-bold text-xl">{restDetails.name} </h3>
                <span className="text-custom-black">{restDetails.areaName}</span>
                <div className="flex  items-center">
                <img
                        className="w-4 h-4"
                        src={
                            data.card.info.isVeg === 1
                                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1UX6Mympfgzpt8oWeLxiL0t49yU63Y9VTw&usqp=CAU"
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ftUXxbShY5C3ZLf95ZdKQwVNwIjH8HBjgg&usqp=CAU"
                        }
                        alt="veg aur non-veg logo"
                    /><span className="ml-2"> {name} |</span>
                      <span className="font-semibold ml-2">
                        ₹ {price != undefined ? price / 100 : defaultPrice / 100}{" "}
                    </span>
                </div>
                    
                    
                  
                    <span>
                        {/* {(data.card.info.ratings.aggregatedRating===null)? {} :{}} */}
                    </span>
                    <p className="text-gray-400 font-sans text-sm text-ellipsis overflow-hidden h-28 w-full whitespace-nowrap inline ">{description}</p>
                </div>
                <div className=" w-3/12  relative pt-2">
                    {/* Logo item  */}
                    {imageId != undefined ? (
                        <img
                            className="rounded-lg w-20 h-20 absolute left-12"
                            src={CARD_API +restDetails.cloudinaryImageId   }
                        />
                    ) : (
                        " "
                    )}

                    <button
                        className="absolute border-[0.5px] border-gray-300  p-2 rounded-lg  bg-white text-red-500 font-bold text-xs top-16 left-14  hover:bg-slate-200"
                        onClick={clickAddHandler}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </>
    )
}
export default CartList;