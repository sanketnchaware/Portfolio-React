import React from "react";

import CustomButton from "./CustomButton";

const Projects = () => {
  return (
    <div id="About Me" className="space-y-10">
      <p className="heading">Projects !</p>

      <div className="flex justify-center text-2xl w-9/12 m-auto">
        <p className="text-center leading-normal">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>

      {[1, 2, 3, 4].map((item, index) => {
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-10 w-10/12 m-auto">
            <div className="border border-hackingGreen rounded-xl w-full h-60">
              {/* <img
                src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg"
                alt="proj_image"
              /> */}
            </div>
            <div className="space-y-6">
              <h1 className="text-2xl">Project {index + 1}</h1>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
                in. A numquam vel repellendus dolorum odit impedit suscipit
                praesentium facilis libero enim dolor quibusdam vitae
                blanditiis, cum quasi exercitationem officiis.
              </p>
              <CustomButton title="Case Study" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
