import { useContext, useState } from "react";
import { LOGO_API } from "../../common/apiLinks";
import { Link } from "react-router-dom";
import UserContext from "../../common/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [signBtn, setSignBtn] = useState("Sign in");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // subscribing store using selector
  const ItemCart = useSelector((store) => store.cart.itemInCart);

  const { userName } = useContext(UserContext);

  return (
    <header className="flex justify-between px-4 h-24 shadow-lg rounded-lg">
      <div className="relative w-48 h-30">
        <img className="absolute w-40 h-20" src={LOGO_API} />
        <div className="absolute z-10 top-14 left-10 font-bold">
          <span>Insta</span>
          <span>Food</span>
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav
          className={`absolute top-24 lg:top-0  right-0 bg-white w-full p-4 rounded-lg md:relative  md:w-auto md:flex md:justify-center md:items-center md:bg-transparent md:p-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:items-center gap-1 md:flex-row md:space-x-4">
            <li className="font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold">
              <Link to="/about">About us</Link>
            </li>
            <li className="font-bold">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="font-bold">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="font-bold">
              <Link to="/cart">Cart - ({ItemCart.length} items)</Link>
            </li>
            {signBtn === "Sign in" ? (
              ""
            ) : (
              <li className="font-bold">
                <a href="#">{userName}</a>
              </li>
            )}
            <li>
              <button
                className="px-3 py-2 bg-orange-400 text-white font-bold rounded-2xl"
                onClick={() => {
                  signBtn === "Sign in" ? setSignBtn("Sign out") : setSignBtn("Sign in");
                }}
              >
                {signBtn}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;