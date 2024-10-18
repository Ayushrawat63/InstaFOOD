import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import CartList from "./CartList";

const Cart = () => {
    const navigate = useNavigate();
    const itemCart = useSelector((store) => store.cart.itemInCart);
    const restDetails = useSelector((store) => store.restInfo);
    const dispatch = useDispatch();

    const clickClearHandler = () => {
        dispatch(clearItem());
    };

    let payForKm = 0;
    let totalgst = 0;
    let toPay = 0;
    let totalPayValue = 0;

    if (itemCart.length > 0) {
        payForKm += restDetails.sla.lastMileTravel * 4;
        totalgst += restDetails.sla.lastMileTravel * 10;
        
        for (let i = 0; i < itemCart.length; i++) {
            const { price, defaultPrice } = itemCart[i]?.card?.info;
            totalPayValue += price !== undefined ? price / 100 : defaultPrice / 100;
        }
        toPay += totalPayValue + 5 + payForKm + totalgst;
    }

    return itemCart.length === 0 ? (
        <div className="mb-4 p-4 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                Sorry! Cart is empty...
            </h1>
            <span className="text-lg sm:text-2xl font-bold">
                To add items to cart click on this{" "}
                <button
                    className="p-2 border-2 border-orange-500 rounded-lg hover:text-orange-500 hover:scale-105"
                    onClick={() => navigate("/")}
                >
                    Click
                </button>
            </span>
        </div>
    ) : (
        <div className="bg-slate-200 min-h-screen">
            <div className="container mx-auto p-4">
                <h1 className="text-xl font-bold text-center">Cart</h1>
                
                <div className="flex justify-center my-4">
                    <button
                        className="p-2 bg-black text-white rounded-lg"
                        onClick={clickClearHandler}
                    >
                        Clear Cart
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-evenly">
                    {/* Cart Items Section */}
                    <div className="col-span-12 md:col-span-7 bg-white p-4 rounded-lg shadow-md">
                        {itemCart.map((e) => (
                            <CartList data={e} key={e.card.info.id} />
                        ))}
                    </div>

                    {/* Payment Section */}
                    <div className="col-span-12 md:col-span-5 bg-white p-4 rounded-lg shadow-md">
                        <h1 className="font-bold text-xl text-center mb-4">
                            Payment Section
                        </h1>
                        <h3 className="text-lg font-semibold mb-2">Bill Details</h3>
                        <ul className="border-b-[1.5px] border-slate-300 mb-4">
                            <li className="flex justify-between my-1">
                                <h3>Item Total</h3>
                                <h3>₹{totalPayValue}</h3>
                            </li>
                            <li className="flex justify-between my-1">
                                <h3>Delivery Fee | {restDetails.sla.lastMileTravelString}</h3>
                                <h3>₹{payForKm}</h3>
                            </li>
                            <li className="flex justify-between my-1">
                                <h3>Platform Fee</h3>
                                <h3>₹5.00</h3>
                            </li>
                            <li className="flex justify-between my-1">
                                <h3>GST and Restaurant Charges</h3>
                                <h3>₹{totalgst}</h3>
                            </li>
                        </ul>

                        <div className="flex justify-between my-2">
                            <h3 className="font-bold text-xl">To Pay</h3>
                            <h3 className="font-bold text-xl">₹{toPay}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
