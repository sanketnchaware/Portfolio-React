import React, { useRef, useState } from "react";
import CustomButton from "./CustomButton";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const service_id = process.env.REACT_APP_SERVICE_ID;
  const template_id = process.env.REACT_APP_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_PUBLIC_KEY;

  const [params, setParams] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        console.log("Message sent:", result.text);
        alert("Message sent successfully!");
        setParams({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.error("Error:", error.text);
        alert("Failed to send message.");
      }
    );
  };

  return (
    <div className="   h-screen      ">
      <div className="flex w-full h-full items-center">
        <div className="w-full  space-y-8">
          <p className="heading ">Contact Me !</p>

          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col border border-slate-600 rounded-xl gap-6 items-center justify-between w-10/12  p-6 sm:p-10  mx-auto "
          >
            <input
              required
              type="text"
              onChange={handleChange}
              name="name"
              className="w-full"
              placeholder="Enter your name"
              value={params?.name}
            />

            <input
              required
              type="email"
              placeholder="Enter your email address"
              className="w-full"
              onChange={handleChange}
              name="email"
              value={params.email}
            />

            <textarea
              placeholder="Enter your message"
              onChange={handleChange}
              name="message"
              className="w-full"
              value={params.message}
              cols="30"
              rows="5"
            ></textarea>

            <CustomButton title="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
