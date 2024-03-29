import React from "react";

import CustomButton from "./CustomButton";

const Projects = () => {
  return (
    <div id="About Me" className="space-y-10">
      <p className="heading">Projects !</p>

      <div className="flex justify-center text-2xl w-9/12 m-auto">
        <p className="text-center leading-normal">
          Here you will find some of projects that I worked on.
        </p>
      </div>

      {[
        {
          name: "Zaincare",
          img: "/images/zaincare.webp",
          description:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
        },
        {
          name: "Duvet Homes",
          img: "/images/duvet.webp",
          description:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
        },
        {
          name: "Sneakout World",
          img: "/images/sneakout.webp",
          description:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
        },
        // {
        //   name: "Zaincare",
        //   img: "/images/zaincare.webp",
        //   description:
        //     " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
        // },
        // {
        //   name: "Zaincare",
        //   img: "/images/zaincare.webp",
        //   description:
        //     " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
        // },
      ].map(({ name, img, description }, index) => {
        return (
          <div className="grid  grid-cols-1 sm:grid-cols-2 justify-between gap-10 w-10/12 m-auto">
            <div className="border border-hackingGreen rounded-xl w-full h-fit p-2 ">
              <img src={img} className="rounded-xl" alt="proj_image" />
            </div>
            <div className="flex items-center">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">{name}</h1>

                <p className="text-xl">{description}</p>
                <CustomButton title="Case Study" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
