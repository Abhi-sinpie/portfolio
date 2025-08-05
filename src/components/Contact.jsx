import { useState } from "react";
// import { POST } from "../api/contact-form/route";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("../api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        console.log("Form submitted successfully");
        // Optional: clear form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-around gap-2 max-sm:gap-1 px-4 py-4 pb-12 border border-borderColor rounded-xl text-textColor"
    >
      <h1 className="uppercase text-xl font-bold">Contact Me</h1>
      
      <div className="flex flex-col w-full justify-around items-center">
        <div className="flex w-full flex-col text-xl mb-4 gap-2">
          <label htmlFor="name" className="text-[15px]">Name</label>
          <input
            autoComplete="off"
            className="rounded-full w-full text-actionColorc bg-primaryColor border border-borderColor text-[15px] max-sm:text-xs px-4 py-1 max-sm:py-2 outline-none"
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex w-full flex-col text-xl mb-4 gap-2">
          <label htmlFor="email" className="text-[15px]">Email</label>
          <input
            autoComplete="off"
            className="rounded-full w-full border border-borderColor bg-primaryColor text-[15px] max-sm:text-xs px-4 py-1 max-sm:py-2 outline-none"
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col mb-4 text-xl w-full gap-2">
        <label htmlFor="message" className="text-[15px]">Message</label>
        <textarea
          className="rounded-xl text-actionColorc bg-primaryColor border border-borderColor outline-none text-[15px] max-sm:text-xs px-2 py-2"
          rows="5"
          name="message"
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-primaryColor border border-borderColor text-textColor uppercase px-8 py-2 rounded-full hover:bg-secondaryColor hover:text-textSecond transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
