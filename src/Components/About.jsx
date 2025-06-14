import React from "react";

const About = () => {
  return (
    <div className=" w-11/12  lg:w-9/12 m-auto ">
      <div className="flex    lg:min-h-screen items-center">
        <div className=" ">
          <p className="heading">About Me !</p>
          <br />
          <div className="flex justify-center text-lg lg:text-2xl  mx-auto">
            <p className="text-center leading-normal">
              Frontend-focused Full Stack MERN Developer with over 3 years of
              experience crafting responsive, high-performance web applications.
              Highly proficient in React.js, Redux Toolkit, and Tailwind CSS,
              with a strong emphasis on writing clean, maintainable code and
              delivering seamless, user-centric interfaces. While primarily
              focused on frontend development, also takes on backend tasks using
              Node.js, Express, and MongoDB in full-stack and personal projects
              to ensure well-rounded, end-to-end development expertise.
              Committed to building scalable solutions that combine performance,
              accessibility, and modern design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
