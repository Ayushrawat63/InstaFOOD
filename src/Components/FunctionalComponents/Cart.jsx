import { useDispatch, useSelector } from "react-redux";

import { clearItem } from "../../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import CartList from "./CartList";

const Cart = () => {
    const navigate = useNavigate()
    const itemCart = useSelector((store) => store.cart.itemInCart);
    const restDetails = useSelector((store) => store.restInfo);
    // console.log(restDetails);
    const dispatch = useDispatch()
    const clickClearHandler = () => {
        dispatch(clearItem())
    }

    let payForKm=0;
   let totalgst=0;
   let toPay=0;
    let totalPayValue = 0;
    if (itemCart.length > 0) {
        
        payForKm+= restDetails.sla.lastMileTravel * 4;
         totalgst+=restDetails.sla.lastMileTravel * 10;
         toPay+=totalPayValue+5+payForKm+totalgst;
        for (let i = 0; i < itemCart.length; i++) {
            // console.log(itemCart[0]);
            const { price, defaultPrice } = itemCart[i]?.card?.info

            totalPayValue += (price != undefined) ? price / 100 : defaultPrice / 100;

            // console.log(defaultPrice);

        }
        // console.log("total value of items", totalPayValue);
    }
    
    


    // totalPayValue= itemCart.reducer((e)=>{
    //  console.log(e)
    // })



    return itemCart.length == 0 ? (<div className="mb-4">
        <h1 className="text-3xl font-bold p-4 mx-32 ">Sorry! cart is empty.....</h1>
        <span className="text-2xl font-bold p-2 mx-32  ">To add Items to cart click on this <button className="p-1 m-2 border-2 border-orange-500 rounded-lg hover:text-orange-500 hover:scale-105" onClick={() => { navigate('/') }}>Click</button></span>
    </div>) :
        (
            <>  <div className=" bg-slate-200 h-screen">

          
                <h1 className="text-xl font-bold text-center">Cart</h1>
                <button className="p-2 bg-black text-white rounded-lg text-center absolute  left-[615px]  " onClick={clickClearHandler}>Clear</button>
                <div className="  py-4 px-32 flex justify-evenly my-16  ">
                    <div className="w-7/12  bg-white  ">
                        {itemCart.map((e) => {
                            return (
                                <CartList data={e} key={e.card.info.id} />
                            )
                        })}
                    </div>


                    <div className=" w-4/12 h-60 bg-white">
                        <h1 className="font-bold text-xl text-center">Payment Section</h1>
                        <h3 className="text-lg font-semibold px-3 py-2 ">Bill details</h3>
                        <ul className="px-4  border-b-[1.5px] border-slate-300 ">
                            <li className="flex justify-between my-1"><h3>Item total           </h3> <h3> ₹{totalPayValue}.00 </h3></li>
                            <li className="flex justify-between mb-1"><h3>Delivery Fee |{restDetails.sla.lastMileTravelString}</h3> <h3> ₹{payForKm}.00 </h3></li>
                            <li className="flex justify-between mb-1"><h3>Platform fee          </h3> <h3> ₹5.00 </h3></li>
                            <li className="flex justify-between mb-1"><h3>GST and Restaurant Charges         </h3> <h3> ₹{totalgst}.00</h3></li>
                        </ul>
                          
                          <div className="flex justify-between px-4 my-2">

                        <h3 className="font-bold  text-xl ">To Pay</h3>
                        <h3 className="font-bold  text-xl ">₹{toPay}.00</h3>
                          </div>
                    </div>

                </div>
                </div>

            </>
        )
}

export default Cart;