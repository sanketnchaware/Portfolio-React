import React from "react";
import About from "./About";
// import CutomButton from "./CustomButton";
import Projects from "./Projects";
import Contact from "./Contact";
// import Typewriter from "typewriter-effect";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Experiance from "./Experiance";
import { Link } from "react-router-dom";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div id="home" className="snap_parent  space-y-44 ">
      <div className="snap_child mt-24 sm:m-auto sm:h-screen flex  items-center justify-center flex-col gap-20 ">
        <div className="w-11/12   sm:w-9/12 m-auto">
          <div className=" gap-4   h-full flex sm:flex-row flex-col-reverse items-center  justify-center">
            <div className="w-full">
              <p className="text-3xl    w-full text-center  "> HI, I AM</p>
              <br />
              <h1 className="text-5xl text-center font-bold">SANKET !</h1>
             
             <br />
              <p className="text-xl sm:text-2xl">
                <p className="flex text-5xl w-8/12  justify-center   leading-relaxed     mx-auto">
                  {/* <Typewriter
                    options={{
                      strings: ["A FRONTEND FOCUSED"],
                      delay: "100",
                      autoStart: true,
                      loop: true,
                    }}
                  /> */}
                  A FRONTEND FOCUSED
                </p>
                <h4 className="text-center">FULL STACK WEB DEVELOPER !</h4>
                <br className="" /> <br />
                <div className="flex  justify-center items-center gap-4">
                  <Link
                    to="/https://drive.google.com/drive/folders/1bDBVfCfoIbI2gzIyDTas3LaQf8kazYvd"
                    className=""
                  >
                    <img className="w-6 h-6" src="/icons/resume.svg" alt="" />
                  </Link>
                  <Link
                    to="/https://www.linkedin.com/in/sanketnchaware/"
                    className=""
                  >
                    <img className="w-6 h-6" src="/icons/linkedin.svg" alt="" />
                  </Link>
                  <Link to="/">
                    <img className="w-8 h-8" src="/icons/github.svg" alt="" />
                  </Link>
                </div>
              </p>
            </div>
          </div>
          <div className="text-xl hidden sm:flex items-center justify-center sm:flex-wrap gap-4 w-full m-auto sm:w-5/12">
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

      <div id="experiance" className="">
        <Experiance />
      </div>

      <div id="projects" className="snap_child">
        <Projects />
      </div>
      <div id="contact" className="snap_child">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
