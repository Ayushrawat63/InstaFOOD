import { Link } from "react-router-dom";
import { DishImageAPI } from "../../common/apiLinks";
const DishList=({data})=>{
    // console.log(data);
    const val=data.action.link;
    const  dishId=val.slice(35,40);
    // console.log(dishId);
    return(
        <><Link  to={`/dishsection/${dishId}`}>
               
        <img className="h-48  w-72 mr-36 px-5 py-4  " src={ DishImageAPI + data.imageId}   alt="dish image" />
        </Link>
          

        </>
    )
}

export default DishList;