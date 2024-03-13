import React from "react";
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
    <div className="snap_parent  space-y-44 ">
      <div className="snap_child mt-12 sm:h-screen flex  items-center justify-center flex-col gap-20 ">
        <div className="w-11/12  sm:w-8/12 m-auto">
          <div className=" gap-4  flex sm:flex-row flex-col-reverse items-center  justify-between">
            <div className="">
              <p className="text-xl sm:text-2xl">
                <div className="flex font-extrabold text-2xl  sm:text-4xl italic  leading-relaxed     mx-auto">
                  <Typewriter
                    options={{
                      strings: ["FRONTEND", "BACKEND", "FULL STACK WEB"],
                      delay: "100",
                      autoStart: true,
                      loop: true,
                    }}
                  />
                  DEVELOPER !
                </div>
                <br className="" />{" "}
                <p className="text-2xl sm:w-8/12  italic ">
                  {" "}
                  Hi, I am Sanket. A Frontend Focused Full Stack Web Developer
                  based in Bangalore, India.
                </p>
                <br />
                <div className="flex sm:justify-start justify-center items-center gap-4">
                  <img className="w-6 h-6" src="/icons/linkedin.svg" alt="" />
                  <img className="w-8 h-8" src="/icons/github.svg" alt="" />
                </div>
              </p>
            </div>
            <div className="w-8/12 m-auto sm:w-6/12">
              <div className="blob  grayscale w-full h-60 sm:h-72 my-10 sm:my-20"></div>
            </div>
          </div>
          <div className="text-xl hidden sm:flex items-center justify-between sm:flex-wrap gap-4 w-full sm:w-5/12">
            <p className="font-bold sm:block hidden ">Tech Stack | </p>{" "}
            {/* <img className="w-8 h-8" src="/icons/htm.svg" alt="" /> */}
            {/* <img className="w-8 h-8" src="/icons/css.svg" alt="" /> */}
            {/* <img className="w-8 h-8" src="/icons/js.svg" alt="" /> */}
            <img className="w-10 h-10" src="/icons/mongo.svg" alt="" />
            <img className="w-20 h-20" src="/icons/express.svg" alt="" />
            <img className="w-8 h-8" src="/icons/react.svg" alt="" />
            {/* <img className="w-20 h-20" src="/icons/nextjs.svg" alt="" /> */}
            {/* <img className="w-8 h-8" src="/icons/ts.svg" alt="" /> */}
            <img className="w-8 h-8" src="/icons/nodejs.svg" alt="" />
            {/* <img className="w-10 h-10" src="/icons/sass.svg" alt="" /> */}
          </div>
          {/* <CutomButton title="Projects" /> */}
        </div>
      </div>

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
