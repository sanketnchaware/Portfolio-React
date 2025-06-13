import React from "react";
import About from "./About";
// import CutomButton from "./CustomButton";
import Projects from "./Projects";
import Contact from "./Contact";
// import Typewriter from "typewriter-effect";
// import gsap from "gsap/dist/gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Experiance from "./Experiance";
import Skills from "./Skills";

const Home = () => {
  // gsap.registerPlugin(ScrollTrigger);

  const DownloadResume = () => {
    const url = "/resume.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "SANKET_CHAWARE_FULLSTACK_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="snap_parent  space-y-10 sm:space-y-44 ">
      <div className=" mt-24 sm:m-auto sm:min-h-screen flex  items-center justify-center flex-col gap-20 ">
        <div className="w-11/12  flex   sm:w-9/12 m-auto">
          <div className=" gap-4    h-full flex sm:flex-row flex-col-reverse items-center  justify-center">
            <div className="h-full w-full mt-8 sm:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center px-6 sm:px-16">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8 text-center sm:text-left">
                <p className="text-2xl sm:text-3xl tracking-wide">HI, I AM</p>

                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
                  SANKET CHAWARE!
                </h1>

                <h4 className="text-xl sm:text-3xl font-medium text-black">
                  FULL STACK WEB DEVELOPER!
                </h4>

                {/* Social & Resume */}
                <div className="flex justify-center sm:justify-start gap-6 pt-6">
                  <button
                    onClick={DownloadResume}
                    className="hover:scale-110 transition"
                  >
                    <img
                      className="w-7 h-7"
                      src="/icons/resume.svg"
                      alt="Resume"
                    />
                  </button>

                  <a
                    href="https://www.linkedin.com/in/sanketnchaware/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                  >
                    <img
                      className="w-7 h-7"
                      src="/icons/linkedin.svg"
                      alt="LinkedIn"
                    />
                  </a>

                  <a
                    href="https://github.com/sanketnchaware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                  >
                    <img
                      className="w-8 h-8"
                      src="/icons/github.svg"
                      alt="GitHub"
                    />
                  </a>
                </div>

                {/* Tech Stack */}
                <div className="hidden sm:flex items-center gap-4 pt-4 flex-wrap">
                  <p className="font-semibold text-lg text-black">
                    Tech Stack |
                  </p>
                  <img
                    className="w-10 h-10"
                    src="/icons/mongo.svg"
                    alt="MongoDB"
                  />
                  <img
                    className="w-20 h-10 object-contain"
                    src="/icons/express.svg"
                    alt="Express"
                  />
                  <img className="w-9 h-9" src="/icons/react.svg" alt="React" />
                  <img
                    className="w-9 h-9"
                    src="/icons/nodejs.svg"
                    alt="Node.js"
                  />
                </div>
              </div>

              {/* Profile Image */}
              <div className="flex justify-center sm:justify-end">
                <div className="rounded-full w-64 h-64 sm:w-96 sm:h-96 overflow-hidden shadow-2xl">
                  <img
                    src="/images/new_profile.webp"
                    alt="Profile"
                    className="w-full h-full object-cover grayscale  object-top transition hover:scale-110 scale-105 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />

      <div id="skills" className="">
        <Skills />
      </div>

      <div id="experiance" className="">
        <Experiance />
      </div>

      <div id="projects" className=" ">
        <Projects />
      </div>
      <div id="contact" className=" ">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
