import React, { useState } from "react";
import CustomButton from "./CustomButton";

const Contact = () => {
  const [params, setParams] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="   h-screen      ">
      <div className="flex w-full h-full items-center">
        <div className="w-full  space-y-8">
          <p className="heading ">Contact Me !</p>

          <form
            onsubmit={handleSubmit}
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
