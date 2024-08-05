import React from "react";

const Experiance = () => {
  return (
    <div className="w-11/12 sm:w-9/12 m-auto sm:min-h-screen  pt-24  ">
      <div className=" space-y-10">
        <p className="heading  w-full">Experiance !</p>

        <div className="text-xl sm:text-2xl flex sm:flex-row flex-col mt-10 sm:items-center justify-between">
          <div>
            <p>Associate Software Developer</p>
            <p>Scubeelate Technologies Pvt. Ltd.</p>
          </div>
          <div>
            <p className="flex">
              2022 - present
              <span className="sm:hidden block">, Bangalore, India</span>
            </p>{" "}
            <p className="hidden sm:block">Bangalore, India</p>
          </div>
        </div>

        <ul className="list-disc space-y-4 pl-6 ">
          <li className="text-xl">
            Built responsive and performant user interfaces using ReactJS,
            Redux-Toolkit, NextJS, and Tailwind CSS, delivering seamless
            cross-device experiences - Built responsive and performant user
            interfaces using ReactJS, Redux-Toolkit, NextJS, and Tailwind CSS,
            delivering seamless cross-device experiences.
          </li>
          <li className="text-xl">
            Optimized UI performance, reducing load times and improving key
            interaction speeds for a scalable, user-centric application.
          </li>
          <li className="text-xl">
            Demonstrated project leadership by independently managing multiple
            frontend projects from initiation to deployment.
          </li>
          <li className="text-xl">
            Collaborated effectively with designers and backend engineers to
            ensure the seamless integration of UI elements, fostering
            cross-functional alignment.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experiance;
