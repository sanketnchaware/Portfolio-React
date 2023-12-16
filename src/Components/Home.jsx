import React from "react";
import About from "./About";
import CutomButton from "./CustomButton";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="">
      <div className="h-screen flex  items-center justify-center flex-col gap-20 ">
        <div className="text-center">
          <p className="text-2xl">
            <span className=" sm:text-6xl">H</span>
            ello there ! 
           <br className="sm:hidden" />
            I am <span className="text-6xl">Sanket,</span>
            <br />
            <br />
            <p className="w-9/12 leading-relaxed mx-auto">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </p>
        </div>
        <CutomButton title="Projects" />
      </div>

      <About />

      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
