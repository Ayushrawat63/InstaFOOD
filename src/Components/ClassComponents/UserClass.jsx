import React, { useContext } from "react";
import UserContext from "../../common/UserContext";
class UserClass extends React.Component {

    constructor(props)
    {
      super(props)
      // console.log(props)
        // console.log(this.props.name + "child contructor");

      // this.state={
      //   count:0,
      //   count2:2,
      // }


      this.state={
        userInfo:{
          name:"dummy",
          location:"Dummy",
          avatar_url:"Dummy"
        }
      }
    }
     
    // handleClicker=()=>{
    //   this.setState({
    //     count:this.state.count+1,
    //    })
    // }

    async componentDidMount(){
      // this is used to run api class  same as useEffect is used in functional components
      // console.log(this.props.name +  "child is mounted.")
     const data =await fetch('https://api.github.com/users/ayushrawat63');
     const jsonData= await data.json();
     this.setState({
      userInfo:jsonData
     })

    //  this.timer=setInterval(()=>{
    //   console.log("hello ji")
    //  },1000)
     
     }
     componentDidUpdate(){
      // console.log(this.props.name +  "child is update.")
      
     }

     componentWillUnmount(){
      clearInterval(this.timer);
      // console.log(this.props.name +  "child is unmounted.")
     }


  render() {
    // const {name,location}=this.props;
    // const {count}=this.state;
    
    // console.log( this.props.name + "child render");
    
    const {name,location,avatar_url}=this.state.userInfo;
    // const {userInfo}= useContext(UserContext);
    return (
      <>
        <div className="User-card"> 
        {/* Using  Class based Component */}
          {/* <h1>Count: {count} <button onClick={()=>{ this.handleClicker()}} >increment by 1</button></h1>
          <h1>Count2: {this.state.count2}</h1> */}
          <img src={avatar_url}></img>
          
          <h1>Name: {name}</h1>
          <h3>Location: {location}</h3>
          <UserContext.Consumer>
          {/* {(data)=><h1>{data.userName}</h1>} */}
                    {/* or */}
          {({userName})=><h1>User: {userName}</h1>}
          </UserContext.Consumer>

          <h3>Email id: Ayushrawat@123gmail.com</h3>
        </div>
      </>
    );
  }
}

export default UserClass;

/**
 * Component life cycle
 *  
 *---< Mounted Phase --->
 *  - Parent 
      -Parent constructor
      -parent render
        -Child
         -first child constructor
         - fisrt child render
         - second child contructor
         - second child render

         -first child mounted
         -scond child mounted
      
      - parent mounted
*---< Update phase--->
   Api call in componentdidmount method ()
   this.setState is called for change in state variable
    componentdid update method() i called
*
*---< Unmount Phase -->
 this phase is called when the component is removed  or unmounted form the page
  componentDidUnmount method() is called
*/
