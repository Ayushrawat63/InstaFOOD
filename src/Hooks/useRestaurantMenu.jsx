import { MENU_API } from "../common/apiLinks";
import { useState ,useEffect } from "react";

const useRestaurantMenu =(resId)=>{
  const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        someApiData();
      }, []);
    
        const someApiData = async () => {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();
        // console.log(jsonData);
        setResInfo(jsonData);
      };
    // console.log(resInfo);
      return resInfo;
}

export default useRestaurantMenu;
