import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_API_YOUR_SERVICE_ID;
    const templateId = import.meta.env.VITE_API_YOUR_TEMPLATE_ID;
    const userId = import.meta.env.VITE_API_YOUR_PUBLIC_KEY;

    if (!serviceId || !templateId || !userId) {
      toast.error("Email service is not configured properly.");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      () => {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      },
      () => toast.error("Something went wrong, try again!")
    );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
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
            name="from_name"
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
            name="to_name"
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
