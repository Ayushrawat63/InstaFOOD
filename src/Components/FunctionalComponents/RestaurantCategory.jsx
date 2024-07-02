import ItemsList from "./ItemsList";

const RestaurantCategory = ({ items , showItems ,setShowItems,details }) => {

  // console.log(items);

  

  const handleClicker =()=>{
     setShowItems();
  }
  const { title, itemCards } = items?.card?.card;
  //    console.log(title)

  return (
    <>
      <div className="bg-white my-4 flex flex-col  justify-between items-center px-3 py-4 shadow-lg rounded-lg " >
        <div className="flex justify-between  w-full cursor-pointer" onClick={handleClicker}>
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <img
            className="w-5 h-5 "
            src={"https://static.thenounproject.com/png/2111581-200.png"}
            alt="top-down arrow"
          />
        </div>
        <div className="flex  flex-col w-full">
          {showItems && itemCards.map((elem) =>{return(
            <ItemsList key={elem.card.info.name} data={elem}  details={details}  />
          )})}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;
