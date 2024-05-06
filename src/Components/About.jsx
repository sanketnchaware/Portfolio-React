import React from "react";
import Card from "./Card";
import CutomButton from "./CustomButton";

const About = () => {
  return (
    <div id="About Me" className=" ">
      <div className="flex  sm:h-screen items-center">
        <div className=" ">
          <p className="heading">About Me !</p>
          <br />
          <div className="flex justify-center text-2xl w-9/12 mx-auto">
            <p className="text-center leading-normal">
              Hi, I am Sanket. A Frontend Focused Full Stack Web Developer based
              in Bangalore, India. A Covid batch graduate with a passion for web
              development. After completing a 6-month full-stack training
              program, I've spent the last 2.2 years working as a frontend
              developer at a Bangalore-based startup. My expertise lies in
              crafting dynamic web experiences using HTML, CSS, JavaScript,
              React, Redux Toolkit, and Tailwind CSS. Check out my projects
              below.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 py-20 sm:h-screen sm:items-start items-center sm:grid-cols-2 justify-between gap-10 w-10/12 mx-auto">
        <div>
          <h1 className="text-2xl sm:text-left text-center">
            Get to know me !
          </h1>

          <br />
          <div className="text-2xl space-y-6 sm:space-y-2 sm:text-left text-center">
            {" "}
            <p>
              Web Applications that leads to the success of the overall product.
              Check out some of my work in the Projects section.
            </p>{" "}
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites.
              Feel free to Connect or Follow me on my Linkedin.
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <br />
            <CutomButton title="Contact" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl sm:text-left text-center">My Skills !</h1>

          <br />
          <div className="flex sm:justify-start justify-center  flex-wrap gap-4  items-center">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "ReactJs",
              "Redux-Toolkit",
              "NodeJs",
              "ExpressJs",
              "MondoDb",
              "Typescript",
              "NextJs",
              "Tailwind CSS",
              "Material UI",
              "NPM",
              "Git",
              "GitHub",
            ].map((skill) => {
              return <Card content={skill} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
