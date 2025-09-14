import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Experiance from "../Components/Experiance";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

gsap.registerPlugin(ScrollTrigger);

const HomeSection = () => {
  const sectionsRef = useRef([]);
  const DownloadResume = () => {
    const url = "/SANKET NAGANATH CHAWARE_FW11_085_.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "SANKET NAGANATH CHAWARE_FW11_085_.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, scale: 1.01 },
        {
          autoAlpha: 1,
          duration: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play  none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div id="home" className="">
      <div className="bg-white" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="bg-white w-11/12 lg:w-9/12 m-auto lg:py-0 py-20 lg:min-h-screen lg:flex lg:items-center lg:justify-center px-6">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="rounded-full w-64 h-64 lg:w-96 lg:h-96 overflow-hidden shadow-2xl">
                  <img
                    src="/images/profile.webp"
                    alt="Profile"
                    className="w-full h-full object-cover grayscale object-top transition hover:scale-110 scale-105 duration-300"
                  />
                </div>
              </div>
              <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left">
                <p className="text-2xl lg:text-3xl tracking-wide">HI, I AM</p>
                <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                  SANKET CHAWARE!
                </h1>
                <h4 className="text-xl lg:text-3xl font-medium text-[#2E2E2E]">
                  FULL STACK WEB DEVELOPER!
                </h4>
                <div className="flex justify-center lg:justify-start gap-6 pt-6">
                  <button title="Download Resume"
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
                <div className="hidden lg:flex items-center gap-4 pt-4 flex-wrap">
                  <p className="font-semibold text-lg text-[#2E2E2E]">
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
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="bg-[#2E2E2E] text-white lg:py-0 py-20"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <About />
      </div>

      <div
        id="skills"
        className="bg-white text-[#2E2E2E] lg:py-0 py-20"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <Skills />
      </div>

      <div
        id="experiance"
        className="text-white bg-[#2E2E2E] lg:py-0 py-20"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <Experiance />
      </div>

      <div
        id="projects"
        className="bg-white text-[#2E2E2E] lg:py-0 py-20"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <Projects />
      </div>

      <div
        id="contact"
        className="bg-[#2E2E2E] text-white lg:py-0 py-20"
        ref={(el) => (sectionsRef.current[5] = el)}
      >
        <Contact />
      </div>
    </div>
  );
};

export default HomeSection;
