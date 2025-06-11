import React from "react";

const Experiance = () => {
  return (
    <div className="w-11/12 sm:w-9/12 m-auto sm:min-h-screen  pt-24  ">
      <div className=" space-y-10">
        <p className="heading  w-full">Experience !</p>

        <div className="text-xl sm:text-2xl flex sm:flex-row flex-col mt-10 sm:items-center justify-between">
          <div>
            <p>Associate Software Developer</p>
            <p>Scubeelate Technologies Pvt. Ltd.</p>
          </div>
          <div>
            <p className="flex">
              Feb 2022 - Nov 2024
              <span className="sm:hidden block">, Bangalore, India</span>
            </p>{" "}
            <p className="hidden sm:block">Bangalore, India</p>
          </div>
        </div>

        <ul className="list-disc space-y-4 pl-6 ">
          <li className="text-xl">
            Built and optimized responsive websites using Next.js and Tailwind
            CSS, ensuring fast load times, SEO readiness, and smooth
            cross-device user experiences.
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
