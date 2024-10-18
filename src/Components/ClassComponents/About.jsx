import User from "../FunctionalComponents/User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent contructor")
  }

  componentDidMount() {
    // console.log("parent is mounted.")
  }

  render() {
    // console.log("parent render")
    return (
      <>
        <div className="container mx-auto p-4">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About Us Page
          </h1>

          {/* <User name={"Ayush Rawat"} /> */}

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <UserClass
              name={"first"}
              location={"Noida"}
              className="border rounded-lg p-4 shadow-lg w-full sm:w-1/2"
            />
            {/* Uncomment this if you want multiple UserClass components */}
            {/* <UserClass
              name={"second"}
              location={"Delhi"}
              className="border rounded-lg p-4 shadow-lg w-full sm:w-1/2"
            /> */}
          </div>
        </div>
      </>
    );
  }
}

export default About;
