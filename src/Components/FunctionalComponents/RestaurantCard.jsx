import { CARD_API ,Star_API } from "../../common/apiLinks";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, cuisines, sla, costForTwo,locality} = props.data;
  // console.log(props.data)
//   console.log(id);
  return (
    <>
      <div data-testid="restCard" className=" flex flex-col    mb-5 hover:scale-  ">
        <div className=" h-32 flex flex-col items-center  relative  ">
          <div className=" w-52 h-36 absolute rounded-2xl bg-light-pattern "></div>
          <img className="  w-52 h-36 object-cover rounded-2xl  bg-gradient-to-t from-black to-white " src={CARD_API + cloudinaryImageId} alt="" />
          <span className="  absolute top-24 left-7 text-white text-2xl  font-extrabold font-mono  ">{costForTwo}</span>
        </div>

        <div className="mt-5 pl-5 ">
          <span className="block text-xl font-bold truncate w-48 ">{name}</span>
          <span className="text-lg  flex ">
          <img src={Star_API} className="w-7 h-7 -ml-2 " alt="star logo"></img>{" "}
            {avgRating}
            <span className="mx-1 font-bold text-xl ">,</span>
            <span className="font-bold">{sla.slaString}</span>
            
          </span>
          <span className=" block overflow-hidden text-ellipsis whitespace-nowrap text-custom-black w-44 ">{cuisines.join()}</span>
          <span className="text-custom-black block overflow-hidden text-ellipsis whitespace-nowrap w-44   capitalize">{locality}</span>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
