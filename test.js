import ItemsList from "./ItemsList";

const RestaurantCategory = ({ items, showItems, setShowItems, details }) => {
  const handleClicker = () => {
    setShowItems();
  };

  const { title, itemCards } = items?.card?.card;

  return (
    <>
      <div className="bg-white my-4 p-4 sm:p-6 md:p-8 flex flex-col justify-between items-center shadow-lg rounded-lg w-full">
        <div 
          className="flex justify-between items-center w-full cursor-pointer" 
          onClick={handleClicker}
        >
          <span className="font-bold text-base sm:text-lg md:text-xl">
            {title} ({itemCards.length})
          </span>
          <img
            className="w-4 h-4 md:w-5 md:h-5"
            src={"https://static.thenounproject.com/png/2111581-200.png"}
            alt="toggle arrow"
          />
        </div>
        <div className="flex flex-col w-full mt-2">
          {showItems &&
            itemCards.map((elem) => {
              return (
                <ItemsList key={elem.card.info.name} data={elem} details={details} />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;
