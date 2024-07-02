import { useState,useEffect } from "react";
import { dishDataAPI } from "../common/apiLinks";

const useDishData=(dishId)=>{
   const [card,setCard]=useState([]);

     useEffect(()=>{
      fetchDishData();
    },[])
    const fetchDishData= async ()=>{
        const data=await fetch(dishDataAPI + dishId)
        const jsonData= await data.json();

        // console.log(jsonData);

        setCard(jsonData.data.cards);
    }
    return card;
}

export default useDishData;