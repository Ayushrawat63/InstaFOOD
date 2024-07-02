const Shimmer=()=>{
    return(<>
       <div className=" w-5/6 mx-auto">
        <div className="px-12">
            <h1 className="bg-slate-200 w-64 h-10 rounded-lg my-5"></h1>
            <ul  className="flex justify-around overflow-hidden">
                <li className="w-48 h-44 bg-slate-200 rounded-lg mr-5 "></li>
                <li className="w-48 h-44 bg-slate-200  rounded-lg mr-5 "></li>
                <li className="w-48 h-44 bg-slate-200  rounded-lg mr-5 "></li>
                <li className="w-48 h-44 bg-slate-200   rounded-lg mr-5"></li>
                <li className="w-48 h-44 bg-slate-200  rounded-lg mr-5"></li>
            </ul>
        </div>
        <div className="flex justify-center mt-5 ">
            <button className="h-10 w-44 rounded-lg bg-slate-200 mx-2"></button>
            <button className="h-10 w-44 rounded-lg bg-slate-200 mx-2"></button>
        </div>
        <div className="  grid grid-cols-4 gap-8  my-16  px-12">
            <div className="w-52 h-36 bg-slate-200 rounded-lg "></div>
            <div className="w-52 h-36 bg-slate-200 rounded-lg "></div>
            <div className="w-52 h-36 bg-slate-200 rounded-lg "></div>
            <div className="w-52 h-36 bg-slate-200 rounded-lg "></div>
            <div className="w-52 h-36 bg-slate-200 rounded-lg "></div>
            <div className="w-52 h-36 bg-slate-200 rounded-lg "></div>
            <div className="w-52 h-36 bg-slate-200 rounded-lg "></div>
            <div className="w-52 h-36 bg-slate-200 rounded-lg "></div>
        </div>
       </div>
    </>)
}
export default Shimmer;
