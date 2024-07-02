const ContactUs=()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl m-3 p-3" >Contact us </h1>
            <form className="m-3 p-3 flex flex-col w-2/6">
                <label htmlFor="name" className="font-bold text-xl">Name</label>
                <input type="text"  className="border-[1.5px] border-black" placeholder="your name"></input>
                <label htmlFor="message"  className="font-bold text-xl">Message</label>

                <input type="text" className="border-[1.5px] border-black" placeholder="your message"></input>
                <button className="bg-black text-white p-2 rounded-lg mt-4 w-2/6">submit</button>
            </form>
        </div>
    )
}
export default  ContactUs;