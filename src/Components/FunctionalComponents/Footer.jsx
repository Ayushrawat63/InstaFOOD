import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <>
        <div className="bg-black h-96">
        <div className=" h-80 w-5/6 mx-auto flex  justify-evenly pt-10  ">
        <div>
              <h1 className="text-white text-3xl">InstaFood</h1>
              <span className="text-gray-500  font-bold pt-2 leading-none w-44 block">© 2024 Bundl  Technologies Pvt. Ltd</span>
        </div>
        <div>
              <h1 className="text-white text-xl">Company</h1>
              <ul>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/about">About</Link>
                </li>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/about">Careers</Link>
                </li>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/about">Team</Link>
                </li>
              
              </ul>
        </div>
        <div>
              <h1 className="text-white text-xl">Contact us</h1>
              <ul>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Help & support</Link>
                </li>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Partner with us</Link>
                </li>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Ride with us</Link>
                </li>
              </ul>
              <h1 className="text-white text-xl mt-5">Legal</h1>
              <ul>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Terms and Conditions</Link>
                </li>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Cookiee Policy</Link>
                </li>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Privacy Policy</Link>
                </li>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Invester Relations</Link>
                </li>
              </ul>
        </div>
        <div>
              <h1 className="text-white text-xl">We deliver to:</h1>
              <ul>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Banglore</Link>
                </li>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Gurgaon</Link>
                </li>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Hyderabad</Link>
                </li>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Delhi</Link>
                </li>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Mumbai</Link>
                </li>
                <li className="text-gray-500  font-bold pt-2 leading-none w-44 block">
                    <Link to="/contact">Pune</Link>
                </li>
              </ul>
        </div>
        </div>
        </div>
        </>
    )
}

export default Footer;