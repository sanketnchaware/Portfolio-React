import React from "react";

const Experiance = () => {
  return (
    <div className="w-9/12 m-auto h-screen  pt-24  ">
      <div className="">
        <p className="heading ">Experiance !</p>

        <div className=" text-2xl flex mt-10 items-center  justify-between">
          <div>
            <p>Software Engineer</p>
            <p>Scubeelate Technologies Pvt. Ltd.</p>
          </div>
          <div>
            <p>2022 - present</p> <p>Bangalore, India</p>
          </div>
        </div>
        <br />
        <ul className="list-disc pl-6 space-y-4">
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
