const ContactUs = () => {
    return (
      <div className="p-4">
        <h1 className="font-bold text-2xl sm:text-3xl m-3 p-3 text-center">Contact Us</h1>
        <form className="m-3 p-3 flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
          <label htmlFor="name" className="font-bold text-lg sm:text-xl mb-2">Name</label>
          <input
            type="text"
            className="border-[1.5px] border-black p-2 mb-4 rounded-md"
            placeholder="Your name"
          />
          
          <label htmlFor="message" className="font-bold text-lg sm:text-xl mb-2">Message</label>
          <textarea
            className="border-[1.5px] border-black p-2 mb-4 rounded-md h-24 resize-none"
            placeholder="Your message"
          ></textarea>
  
          <button className="bg-black text-white p-2 rounded-lg mt-4 w-full sm:w-2/4 md:w-1/3 mx-auto">
            Submit
          </button>
        </form>
      </div>
    );
  };
  export default ContactUs;
  