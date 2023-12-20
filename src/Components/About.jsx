import React from "react";
import Card from "./Card";
import CutomButton from "./CustomButton";

const About = () => {
  return (
    <div id="About Me" className="">
      <div>
        <p className="heading">About Me !</p>
        <br />
        <div className="flex justify-center text-2xl w-9/12 mx-auto">
          <p className="text-center leading-normal">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 py-20 sm:h-screen items-center sm:grid-cols-2 justify-between gap-10 w-10/12 mx-auto">
        <div>
          <h1 className="text-2xl sm:text-left text-center">Get to know me !</h1>

          <br />
          <div className="text-lg space-y-6 sm:space-y-2 sm:text-left text-center">
            {" "}
            <p>
              Web Applications that leads to the success of the overall product.
              Check out some of my work in the Projects section.
            </p>{" "}
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming.
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
          <div className="flex sm:justify-start justify-center  flex-wrap gap-4 items-center">
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
