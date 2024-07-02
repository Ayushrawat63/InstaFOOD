import User from "../FunctionalComponents/User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(props){
  super(props)
  // console.log("parent contructor")
  }
   componentDidMount(){
    // console.log("parent is mounted.")
   }

  render(){
  // console.log("parent  render")
  
    return (
      <>
        <div>
          <h1>About us page</h1>
  
          {/* <User name={"Ayush Rawat"}/> */}
  
          <UserClass name={"first "} location={"Noida"}/>
          {/* <UserClass name={"second "} location={"delhi"}/> */}
        </div>
      </>);
  }
}

// const About = () => {
//   return (
//     <>
//       <div>
//         <h1>About us page</h1>

//         {/* <User name={"Ayush Rawat"}/> */}

//         <UserClass name={"Ayush Rawat"} location={"Noida"}/>
//       </div>
//     </>
//   );
// };

export default About;
