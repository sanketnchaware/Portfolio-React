import React from "react";

const About = () => {
  return (
    <div className=" w-11/12  lg:w-9/12 m-auto ">
      <div className="flex    lg:min-h-screen items-center">
        <div className=" ">
          <p className="heading m-auto">About Me !</p>
          <br />
          <div className="flex justify-center text-lg lg:text-2xl  mx-auto">
            <p className="text-center leading-normal">
              Frontend-focused Full Stack MERN Developer with 3+ years of
              experience building responsive, high-performance web applications.
              Skilled in React.js, Redux Toolkit, and Tailwind CSS, with a
              strong focus on clean, maintainable code and intuitive user
              interfaces. Comfortable handling backend tasks with Node.js,
              Express, and MongoDB in full-stack and personal projects.
              Passionate about creating scalable, accessible, and modern digital
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
