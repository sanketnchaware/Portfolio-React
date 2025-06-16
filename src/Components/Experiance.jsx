import React from "react";

const Experiance = () => {
  return (
    <div className="w-11/12 lg:w-9/12 m-auto lg:min-h-screen  flex items-center  ">
      <div className=" space-y-10">
        <p className="heading m-auto  w-full">Experience !</p>

        <div className="text-lg lg:text-xl flex lg:flex-row flex-col mt-10 lg:items-center justify-between">
          <div>
            <p>Associate Software Developer</p>
            <p>Scubeelate Technologies Pvt. Ltd.</p>
          </div>
          <div>
            <p className="flex">
              Feb 2022 - Nov 2024
              <span className="lg:hidden block">, Bangalore, India</span>
            </p>{" "}
            <p className="hidden lg:block">Bangalore, India</p>
          </div>
        </div>

        <ul className="list-disc space-y-4 pl-6 ">
          <li className="text-xl">
            Built and optimized responsive websites using Next.js and Tailwind
            CSS, ensuring fast load times and smooth cross-device user
            experiences.
          </li>
          <li className="text-xl">
            Developed admin dashboards using React.js and TypeScript,
            implementing scalable component architecture and enhancing developer
            productivity and code reliability.
          </li>
          <li className="text-xl">
            Translated Figma and Sketch designs into pixel-perfect, responsive
            interfaces, improving UI consistency and boosting user satisfaction.
          </li>
          <li className="text-xl">
            Integrated RESTful APIs and collaborated with backend engineers and
            product teams to deliver seamless data flows and dynamic features
            across applications.
          </li>
          <li className="text-xl">
            Improved performance and interactivity using techniques like lazy
            loading, code splitting, and asset optimization—resulting in a
            measurable drop in page load times.
          </li>
          <li className="text-xl">
            Occasionally implemented backend features using Node.js, Express,
            and MongoDB, including authentication with JWT and basic CRUD
            functionality to support frontend requirements.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experiance;
