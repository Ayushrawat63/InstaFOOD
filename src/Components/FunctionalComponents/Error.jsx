import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return (
        <div>
            <h1>opps!!</h1>
            <h1>Something went bad!!</h1>
            <h1>{err.data}</h1>
            <h2>{err.status}:{err.statusText}</h2>
        </div>
    )
}

export default Error;