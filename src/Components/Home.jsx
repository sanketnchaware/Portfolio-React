import React, { useEffect, useState } from "react";
import About from "./About";
// import CutomButton from "./CustomButton";
import Projects from "./Projects";
import Contact from "./Contact";
import Typewriter from "typewriter-effect";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { useActionData } from "react-router-dom";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  // const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   gsap.to(".moving_container", {
  //     xPercent: activeIndex * 100,
  //   });
  // }, [activeIndex]);
  return (
    <div className="snap_parent">
      <div className="snap_child h-screen flex  items-center justify-center flex-col gap-20 ">
        <div className=" gap-4 w-8/12 m-auto flex  items-center justify-between">
          <div className="">
            <p className="text-xl sm:text-2xl">
              <div className="flex text-4xl  sm:text-5xl italic  leading-relaxed     mx-auto">
                <Typewriter
                  options={{
                    strings: ["Frontend", "Backend", "Full Stack Web"],
                    delay: "100",
                    autoStart: true,
                    loop: true,
                  }}
                />
                Developer !
              </div>
              <br className="" />{" "}
              <p className="text-xl  italic ">
                {" "}
                Hi, I am Sanket. A Passionate Frontend React Developer based in
                Bangalore, India.
              </p>
            </p>
          </div>
          <div className="w-4/12">
            <div className="blob  w-full h-72 my-20"></div>
          </div>
        </div>
        {/* <CutomButton title="Projects" /> */}
      </div>

      {/* <div className="h-screen overflow-y-hidden overflow-x-scroll">
        <div className="flex h-screen bg-red-500 moving_container">
          <div className="h-full w-screen bg-pink-200"></div>
          <div className="h-full w-screen bg-pink-200"></div>
          <div className="h-full w-screen bg-pink-200"></div>
          <div className="h-full w-screen bg-pink-200"></div>
        </div>
      </div> */}

      <About />

      <div className="snap_child">
        <Projects />
      </div>
      <div className="snap_child">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
