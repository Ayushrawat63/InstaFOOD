import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black py-10">
        <div className="w-5/6 mx-auto  flex flex-col lg:flex-row  justify-between items-start  lg:justify-evenly gap-10">
          {/* Company Info Section */}
          <div >
            <h1 className="text-white text-3xl">InstaFood</h1>
            <span className="text-gray-500 font-bold pt-2 leading-none block">
              © 2024 Bundl Technologies Pvt. Ltd
            </span>
          </div>

          {/* Company Links Section */}
          <div >
            <h1 className="text-white text-xl mb-3">Company</h1>
            <ul>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/about">About</Link>
              </li>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/careers">Careers</Link>
              </li>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </div>

          {/* Contact and Legal Section */}
          <div >
            <h1 className="text-white text-xl mb-3">Contact Us</h1>
            <ul>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/contact">Help & Support</Link>
              </li>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/partner">Partner with Us</Link>
              </li>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/ride">Ride with Us</Link>
              </li>
            </ul>

            <h1 className="text-white text-xl mt-5 mb-3">Legal</h1>
            <ul>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/terms">Terms and Conditions</Link>
              </li>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/cookies">Cookie Policy</Link>
              </li>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/investor">Investor Relations</Link>
              </li>
            </ul>
          </div>

          {/* Delivery Locations Section */}
          <div >
            <h1 className="text-white text-xl mb-3">We Deliver To:</h1>
            <ul>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/bangalore">Bangalore</Link>
              </li>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/gurgaon">Gurgaon</Link>
              </li>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/hyderabad">Hyderabad</Link>
              </li>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/delhi">Delhi</Link>
              </li>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/mumbai">Mumbai</Link>
              </li>
              <li className="text-gray-500 font-bold pt-2 leading-none">
                <Link to="/pune">Pune</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
