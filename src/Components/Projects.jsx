import React, { useState } from "react";

// const projects = [
//   {
//     name: "LWL8 Website",
//     img: "/images/lwl8.webp",
//     url: "//lwl8.com",
//     description:
//       "LWL8 Website which is an smart bottle selling website which is build using Next.js, Tailwind CSS for building UI and GSAP for animations. ",
//     isPersonal: false,
//     techStack: "Next.js, Tailwind CSS, GSAP, Redux-Toolkit",
//   },
//   {
//     name: "Zaincare",
//     img: "/images/zaincare.webp",
//     url: "//zaincare.com",
//     description:
//       "A rising home healthcare provider, offers personalized care plans and exceptional services delivered by qualified caregivers. Built with React, Tailwind CSS, Sass, and Redux Toolkit.",
//     isPersonal: false,
//     techStack: "React.js, Tailwind CSS, GSAP, Redux-Toolkit",
//   },
//   {
//     name: "Duvet Homes",
//     img: "/images/duvet.webp",
//     description:
//       " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
//     isPersonal: false,
//   },
//   {
//     name: "Sneakout World",
//     img: "/images/sneakout.webp",
//     url: "//sneakoutworld.com",
//     description:
//       "A complete e-commerce website for a brand selling bags, featuring animations, JWT-based authentication, payment integration, and full purchase flow.",
//     isPersonal: false,
//     techStack: "Next.js, Tailwind CSS, GSAP, Redux-Toolkit",
//   },
//   {
//     name: "LMNT Admin Panel and Customer Web App",
//     img: "/images/lmnt.webp",
//     description:
//       "A Gym Management Application, which manages customer sessions and memberships.And a website provided for customers to track their membership details and session schedules, ensuring a streamlined fitness experience for all.",
//     isPersonal: false,
//     techStack: "React.js, Tailwind CSS, Material UI, Redux-Toolkit",
//   },
//   {
//     name: "ApplyUniNow",
//     img: "/images/zaincare.webp",
//     description:
//       " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
//     isPersonal: false,
//   },
//   {
//     name: "Gumazing",
//     img: "/images/zaincare.webp",
//     description:
//       " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
//     isPersonal: false,
//   },
//   {
//     name: "Tavasay",
//     img: "/images/zaincare.webp",
//     description:
//       " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
//     isPersonal: true,
//   },
//   {
//     name: "Freekart",
//     img: "/images/zaincare.webp",
//     description:
//       " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
//     isPersonal: true,
//   },
//   {
//     name: "Portfolio",
//     img: "/images/zaincare.webp",
//     description:
//       " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, in. A numquam vel repellendus dolorum odit impeditsuscipit praesentium facilis libero enim dolor quibusdam vitaeblanditiis, cum quasi exercitationem officiis.",
//     isPersonal: true,
//   },
// ];

const projects = [
  {
    name: "Kahani",
    img: "/images/kahani.webp",
    url: "https://kahani-dev.netlify.app/",
    github: "https://github.com/sanketnchaware/kahani",
    description:
      "A modern story writing platform that allows users to write, publish, and explore creative stories. Built with a rich UI and smooth animations.",
    isPersonal: true,
    techStack: "React.js, Tailwind CSS,Node.js, Express.js, Mongodb",
  },
  {
    name: "Nordstrom Clone",
    img: "/images/nordstorm.webp",
    url: "https://project-nordstrom.netlify.app/",
    github: "https://github.com/sanketnchaware/Project_NordStorm",
    description:
      "A frontend clone of the Nordstrom e-commerce website, featuring a clean UI, category filters, and a responsive layout mimicking a real-world online store.",
    isPersonal: true,
    techStack: "HTML, CSS, React.js, Node.js, Express.js, Mongodb ",
  },
  // {
  //   name: "Flipkart Clone",
  //   img: "/images/flipkart.webp",
  //   url: "https://kahani-dev.netlify.app/",
  //   description:
  //     "A fully functional Flipkart clone with homepage layout, product listings, cart system, and responsive design.",
  //   isPersonal: true,
  //   techStack: "React.js, Tailwind CSS, Redux Toolkit",
  // },
  {
    name: "YouTube Search Engine Mock",
    github: "https://github.com/sanketnchaware/Youtube-Search-Engine-Mock/",
    img: "/images/youtube_mock.webp",
    url: "https://sanketnchaware.github.io/Youtube-Search-Engine-Mock/",
    description:
      "A mini project replicating YouTube’s search and results functionality using the YouTube API, with responsive video cards and dynamic search suggestions.",
    isPersonal: true,
    techStack: "HTML, CSS, Javascript, YouTube API",
  },
  {
    name: "Todo App",
    github: "https://github.com/sanketnchaware/React_Todo",
    img: "/images/todo.webp",
    url: "https://todoapp-sanketnchaware.vercel.app/",
    description: "A lightweight todo application to manage daily tasks.",
    isPersonal: true,
    techStack: "React.js, CSS",
  },
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
            ({ name, img, url, description, github, techStack }, index) => {
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
                    <img src={img} className="  rounded-xl" alt="proj_image" />
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
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            className="underline font-bold font-Outfit"
                            href={url}
                          >
                            See Demo
                          </a>
                        ) : (
                          <></>
                        )}
                        {
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            className="underline"
                            href={github}
                          >
                            Github
                          </a>
                        }
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
