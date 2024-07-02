import { useContext, useState } from "react";
import { LOGO_API } from "../../common/apiLinks";
import { Link } from "react-router-dom";
import UserContext from "../../common/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [signBtn, setSignBtn] = useState("Sign in");

  // subscribing store using selector

  const ItemCart=useSelector((store)=>store.cart.itemInCart)
  // console.log(ItemCart);

  const { userName } = useContext(UserContext);
  //  console.log("Header render")
  //      useEffect(()=>{
  //       console.log("useEffect is used.");
  //      },[signBtn])
  return (
    <>
      <div className="flex justify-between px-24  h-24  shadow-lg rounded-lg ">
        <div className=" relative w-48 h-30">
          <img className=" absolute w-40 h-20" src={LOGO_API} />
          <div className=" absolute z-10 top-14 left-10 font-bold">
            <span>Insta</span>
            <span>Food</span>
          </div>
        </div>

        <div className=" right-0 top-5   w-3/5  mx-4 flex  items-center ">
          <ul className="flex justify-around jus  items-center w-full   ">
            <li className=" font-bold ">
              <Link to="/">Home</Link>
            </li>
            <li className=" font-bold ">
              <Link to="/about">About us</Link>
            </li>
            <li className=" font-bold ">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className=" font-bold ">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className=" font-bold ">
            <Link to="/cart">Cart - ({ItemCart.length} items)</Link>
            </li>
            {signBtn === "Sign in" ? (
              ""
            ) : (
              <li className=" font-bold ">
                <a href="#">{userName}</a>
              </li>
            )}
            <li> 
              <button
                className=" px-3 py-2 bg-orange-400 text-white font-bold  rounded-2xl"
                onClick={() => {
                  signBtn === "Sign in"
                    ? setSignBtn("Sign out")
                    : setSignBtn("Sign in");
                }}
              >
                {signBtn}
              </button>
            </li>    
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
