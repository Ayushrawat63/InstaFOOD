import { CARD_API, Star_API } from "../../common/apiLinks";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, cuisines, sla, costForTwo, locality } = props.data;
  return (
    <>
      <div
        data-testid="restCard"
        className="flex flex-col items-center mb-5 hover:scale-105 transition-transform duration-300"
      >
        <div className="h-32 flex flex-col items-center relative">
          <div className="w-full h-36 sm:w-52 sm:h-36 absolute rounded-2xl bg-light-pattern"></div>
          <img
            className="w-full h-36 sm:w-52 sm:h-36 object-cover rounded-2xl bg-gradient-to-t from-black to-white"
            src={CARD_API + cloudinaryImageId}
            alt={name}
          />
          <span className="absolute top-24 left-4 sm:left-7 text-white text-xl sm:text-2xl font-extrabold font-mono">
            {costForTwo}
          </span>
        </div>

        <div className="mt-5 pl-4 sm:pl-5 text-center sm:text-left">
          <span className="block text-lg sm:text-xl font-bold truncate w-full sm:w-48">{name}</span>
          <span className="text-base sm:text-lg flex items-center justify-center sm:justify-start">
            <img src={Star_API} className="w-5 h-5 sm:w-7 sm:h-7 -ml-1 sm:-ml-2" alt="star logo" />{" "}
            {avgRating}
            <span className="mx-1 font-bold text-lg sm:text-xl">,</span>
            <span className="font-bold">{sla.slaString}</span>
          </span>
          <span className="block text-sm sm:text-base text-custom-black overflow-hidden text-ellipsis whitespace-nowrap w-full sm:w-44">
            {cuisines.join(", ")}
          </span>
          <span className="block text-sm sm:text-base text-custom-black overflow-hidden text-ellipsis whitespace-nowrap w-full sm:w-44 capitalize">
            {locality}
          </span>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
