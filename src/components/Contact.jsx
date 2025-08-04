// import "./App.css";

const Contact = () => {
  return (
    <form
      className="w-full flex flex-col items-center justify-around gap-2 max-sm:gap-1 px-4 py-4 pb-12 border border-borderColor rounded-xl text-textColor"
      action="#"
    >
      <h1 className="uppercase text-xl font-bold">Contact Me</h1>
      <div className="flex flex-col w-full justify-around items-center">
        <div className="flex w-full flex-col text-xl mb-4 gap-2">
          <label htmlFor="name" className="text-[15px]">
            Name
          </label>
          <input
            autoComplete="off"
            className="rounded-full w-full text-actionColorc bg-primaryColor border border-borderColor text-[15px] max-sm:text-xs px-4 py-1 max-sm:py-2 outline-none"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="flex w-full flex-col text-xl mb-4 gap-2">
          <label htmlFor="email" className="text-[15px]">
            Email
          </label>
          <input
            autoComplete="off"
            className="rounded-full w-full border border-borderColor bg-primaryColor text-[15px] max-sm:text-xs px-4 py-1 max-sm:py-2 outline-none"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
      </div>
      <div className="flex flex-col mb-4 text-xl w-full gap-2">
        <label htmlFor="message" className="text-[15px]">
          Message
        </label>
        <textarea
          className="rounded-xl text-actionColorc bg-primaryColor border border-borderColor outline-none text-[15px] max-sm:text-xs px-2 py-2"
          rows={"5"}
          name="message"
          id="message"
        ></textarea>
      </div>
      <button className=" bg-primaryColor border border-borderColor text-textColor uppercase px-8 py-2 rounded-full hover:bg-secondaryColor hover:text-textSecond transition-all">
        Submit
      </button>
      
    </form>
  );
};

export default Contact;
