import React, { useState } from "react";

import { Link } from "react-router-dom";

const projects = [
  {
    name: "LWL8 Website",
    img: "/images/lwl8.webp",
    url: "//lwl8.com",
    description:
      "LWL8 Website which is an smart bottle selling website which is build using Next.js, Tailwind CSS for building UI and GSAP for animations. ",
    isPersonal: false,
    techStack: "Next.js, Tailwind CSS, GSAP, Redux-Toolkit",
  },
  {
    name: "Zaincare",
    img: "/images/zaincare.webp",
    url: "//zaincare.com",
    description:
      "A rising home healthcare provider, offers personalized care plans and exceptional services delivered by qualified caregivers. Built with React, Tailwind CSS, Sass, and Redux Toolkit.",
    isPersonal: false,
    techStack: "React.js, Tailwind CSS, GSAP, Redux-Toolkit",
  },
  // {
  //   name: "Duvet Homes",
  //   img: "/images/duvet.webp",
  //   description:
  //     " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
  //   isPersonal: false,
  // },
  {
    name: "Sneakout World",
    img: "/images/sneakout.webp",
    url: "//sneakoutworld.com",
    description:
      "A complete e-commerce website for a brand selling bags, featuring animations, JWT-based authentication, payment integration, and full purchase flow.",
    isPersonal: false,
    techStack: "Next.js, Tailwind CSS, GSAP, Redux-Toolkit",
  },
  {
    name: "LMNT Admin Panel and Customer Web App",
    img: "/images/lmnt.webp",
    description:
      "A Gym Management Application, which manages customer sessions and memberships.And a website provided for customers to track their membership details and session schedules, ensuring a streamlined fitness experience for all.",
    isPersonal: false,
    techStack: "React.js, Tailwind CSS, Material UI, Redux-Toolkit",
  },
  // {
  //   name: "ApplyUniNow",
  //   img: "/images/zaincare.webp",
  //   description:
  //     " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
  //   isPersonal: false,
  // },
  // {
  //   name: "Gumazing",
  //   img: "/images/zaincare.webp",
  //   description:
  //     " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
  //   isPersonal: false,
  // },
  // {
  //   name: "Tavasay",
  //   img: "/images/zaincare.webp",
  //   description:
  //     " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
  //   isPersonal: true,
  // },
  // {
  //   name: "Freekart",
  //   img: "/images/zaincare.webp",
  //   description:
  //     " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
  //   isPersonal: true,
  // },
  // {
  //   name: "Portfolio",
  //   img: "/images/zaincare.webp",
  //   description:
  //     " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
  //   isPersonal: true,
  // },
];

const Projects = () => {
  const [projectsCount] = useState(4);
  return (
    <div id="About Me" className="py-24 space-y-10">
      <p className="heading">Projects !</p>

      <div className="flex justify-center text-2xl w-9/12 m-auto">
        <p className="text-center leading-normal">
          Here you will find some of projects that I worked on.
        </p>
      </div>

      <div className="space-y-20">
        {React.Children.toArray(
          projects.map(
            ({ name, img, url, description, isPersonal, techStack }, index) => {
              return (
                <div
                  className={`  shadow-sameshadow  border border-hackingGreen rounded-3xl  p-4 sm:p-10 ${
                    index < projectsCount ? "grid" : "hidden"
                  }   grid-cols-1 sm:grid-cols-2 justify-between gap-10 w-10/12 m-auto`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "order-1" : ""
                    }  rounded-xl w-full h-fit p-2 `}
                  >
                    <img
                      src={img}
                      className="opacity-75   rounded-xl"
                      alt="proj_image"
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="space-y-6">
                      <h1 className="tex-2xl sm:text-3xl font-bold">{name}</h1>
                      <p className="text-base sm:text-xl">{description}</p>

                      <p className="text-base sm:text-xl">
                        <span className="font-bold text-xl">Tech Stack : </span>
                        {techStack}
                      </p>
                      <div className="flex  items-center gap-4">
                        {url ? (
                          <Link
                            target="_blank"
                            className="underline font-bold font-Outfit"
                            to={url}
                          >
                            See Demo
                          </Link>
                        ) : (
                          <></>
                        )}
                        {isPersonal ? (
                          <Link target="_blank" className="underline" to="#">
                            Github
                          </Link>
                        ) : (
                          ""
                        )}
                      </div>
                      {/* <CustomButton title="Case Study" /> */}
                    </div>
                  </div>
                </div>
              );
            }
          )
        )}
      </div>
      {/* {projects.length !== projectsCount ? (
        <div className="flex justify-between items-center">
          <button
            className="underline text-2xl m-auto"
            onClick={() => {
              setProjectsCount(projects.length);
            }}
          >
            View More
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <button
            className="underline text-2xl m-auto"
            onClick={() => {
              setProjectsCount(3);
            }}
          >
            View Less
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Projects;
