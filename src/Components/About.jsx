import React from "react";

const About = () => {
  return (
    <div
      id="About Me"
      className=" w-11/12  lg:w-9/12 m-auto "
    >
      <div id="about" className="flex    lg:min-h-screen items-center">
        <div className=" ">
          <p className="heading">About Me !</p>
          <br />
          <div className="flex justify-center text-lg lg:text-2xl  mx-auto">
            <p className="text-center leading-normal">
              👋 Hi, I’m Sanket — a Frontend Developer with 3+ years of
              experience crafting clean, performant, and user-friendly web
              interfaces. I specialize in React.js, Redux Toolkit, and Tailwind
              CSS, and I’m passionate about building scalable products that feel
              smooth and intuitive. From optimizing performance to collaborating
              across teams, I bring a problem-solving mindset to every project.
              Scroll down to see some of the work I’m proud of. 👇
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
