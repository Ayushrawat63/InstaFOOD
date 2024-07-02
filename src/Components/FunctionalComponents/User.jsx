import { useState } from "react";

const User=(props)=>{
    const [count,setCount]=useState(0);
    console.log("update in data")
    const [count2,setCount2]=useState(1);
    return(
        <>
        <div className="User-card"> Using Functional Component
            <h1>Count: {count}  <button onClick={()=>{setCount(count+1)}} >increment by 1</button></h1>
            <h1>Count2: {count2}  <button onClick={()=>{setCount2(count2+2)}} >increment by 2</button></h1>
            <h1>Name: {props.name}</h1>
            <h3>Location: Noida</h3>
            <h3>Email id: Ayushrawat@123gmail.com</h3>
        </div>
        </>
    )
}
export default User;