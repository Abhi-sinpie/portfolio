import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const serviceId = import.meta.env.VITE_API_YOUR_SERVICE_ID;
  const templateId = import.meta.env.VITE_API_YOUR_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_API_YOUR_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Message sending! Please wait...");

    if (!serviceId || !templateId || !publicKey) {
      toast.error("EmailJS configuration missing");
      toast.dismiss(loadingToast);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          toast.success("Email sent successfully");
          toast.dismiss(loadingToast);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Error sending email");
          toast.dismiss(loadingToast);
        }
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
          <label htmlFor="name" className="text-[15px]">
            Name
          </label>
          <input
            autoComplete="off"
            className="rounded-full w-full text-actionColorc bg-primaryColor border border-borderColor text-[15px] max-sm:text-xs px-4 py-1 max-sm:py-2 outline-none"
            type="text"
            id="name"
            name="user_name"
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
            name="user_email"
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
          rows="5"
          name="message"
          id="message"
          required
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