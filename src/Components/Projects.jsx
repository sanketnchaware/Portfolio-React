import React, { useState } from "react";

import { Link } from "react-router-dom";

const projects = [
  {
    name: "Zaincare",
    img: "/images/zaincare.webp",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
    isPersonal: false,
  },
  {
    name: "Duvet Homes",
    img: "/images/duvet.webp",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
    isPersonal: false,
  },
  {
    name: "Sneakout World",
    img: "/images/sneakout.webp",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
    isPersonal: false,
  },
  {
    name: "LMNT",
    img: "/images/zaincare.webp",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
    isPersonal: false,
  },
  {
    name: "ApplyUniNow",
    img: "/images/zaincare.webp",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
    isPersonal: false,
  },
  {
    name: "Gumazing",
    img: "/images/zaincare.webp",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
    isPersonal: false,
  },
  {
    name: "Tavasay",
    img: "/images/zaincare.webp",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
    isPersonal: true,
  },
  {
    name: "Freekart",
    img: "/images/zaincare.webp",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
    isPersonal: true,
  },
  {
    name: "Portfolio",
    img: "/images/zaincare.webp",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
    isPersonal: true,
  },
];

const Projects = () => {
  const [projectsCount, setProjectsCount] = useState(3);
  return (
    <div id="About Me" className="py-24 space-y-10">
      <p className="heading">Projects !</p>

      <div className="flex justify-center text-2xl w-9/12 m-auto">
        <p className="text-center leading-normal">
          Here you will find some of projects that I worked on.
        </p>
      </div>

      {React.Children.toArray(
        projects.map(({ name, img, description, isPersonal }, index) => {
          return (
            <div
              className={`${
                index < projectsCount ? "grid" : "hidden"
              }   grid-cols-1 sm:grid-cols-2 justify-between gap-10 w-10/12 m-auto`}
            >
              <div className="border border-hackingGreen rounded-xl w-full h-fit p-2 ">
                <img src={img} className="rounded-xl" alt="proj_image" />
              </div>
              <div className="flex items-center">
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold">{name}</h1>
                  <p className="text-xl">{description}</p>

                  <div className="flex items-center gap-4">
                    <Link className="underline font-Outfit" to="#">
                      See Demo
                    </Link>
                    {isPersonal ? (
                      <Link className="underline" to="#">
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
        })
      )}

      {projects.length !== projectsCount ? (
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
      )}
    </div>
  );
};

export default Projects;
