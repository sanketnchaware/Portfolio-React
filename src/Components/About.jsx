import React from "react";
import Card from "./Card";


const About = () => {
  return (
    <div id="About Me" className="">
      <div id="about" className="flex    sm:min-h-screen items-center">
        <div className=" ">
          <p className="heading">About Me !</p>
          <br />
          <div className="flex justify-center text-lg sm:text-2xl w-11/12 sm:w-9/12 mx-auto">
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

      <div className="grid grid-cols-1 py-20  sm:items-start items-center  justify-between gap-10 w-11/12  mx-auto">
        {/* <div>
          <h1 className="text-2xl font-semibold sm:text-left text-center">
            Get to know me !
          </h1>

          <br />
          <div className="text-xl sm:text-2xl space-y-6 sm:space-y-2 sm:text-left text-center">
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
        </div> */}
        <div>
          <p className="heading   text-center">My Skills !</p>

          <br />
          <div className="flex justify-center  flex-wrap gap-4  items-center">
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
