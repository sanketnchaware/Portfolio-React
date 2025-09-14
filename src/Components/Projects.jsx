import { useState } from "react";
import CustomButton from "./CustomButton";

const projects = [
  {
    id: 1,
    title: "Kahani",
    description:
      "A responsive and user-friendly web application that enables users to write, publish, and read original stories across genres. Focused on intuitive UX and interactive features for storytelling.",
    type: "personal",
    image: "/images/kahani.webp",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "https://kahani-dev.netlify.app/",
    githubUrl: "https://github.com/sanketnchaware/kahani",
  },
  {
    id: 2,
    title: "YouTube Search Engine Mock",
    description:
      "A mini project replicating YouTube’s search and results functionality using the YouTube API, with responsive video cards and dynamic search suggestions.",
    type: "personal",
    image: "/images/youtube_mock.webp",
    technologies: ["HTML", "CSS", "JavaScript", "YouTube API"],
    liveUrl: "https://sanketnchaware.github.io/Youtube-Search-Engine-Mock/",
    githubUrl: "https://github.com/sanketnchaware/Youtube-Search-Engine-Mock",
  },
  {
    id: 3,
    title: "Todo App",
    description: "A lightweight todo application to manage daily tasks.",
    type: "personal",
    image: "/images/todo.webp",
    technologies: ["React.js", "CSS"],
    liveUrl: "https://todoapp-sanketnchaware.vercel.app/",
    githubUrl: "https://github.com/sanketnchaware/React_Todo",
  },
  {
    id: 4,
    title: "LWL8 Website",
    description:
      "Smart bottle selling website built using Next.js, Tailwind CSS for UI, and GSAP for animations.",
    type: "company",
    image: "/images/lwl8.webp",
    technologies: ["Next.js", "Tailwind CSS", "GSAP", "Redux Toolkit"],
    liveUrl: "https://lwl8.com",
  },
  {
    id: 5,
    title: "Zaincare",
    description:
      "A rising home healthcare provider, offering personalized care plans and exceptional services delivered by qualified caregivers. Built with React, Tailwind CSS, Sass, and Redux Toolkit.",
    type: "company",
    image: "/images/zaincare.webp",
    technologies: ["React.js", "Tailwind CSS", "Sass", "Redux Toolkit"],
    liveUrl: "https://zaincare.com",
  },

  {
    id: 6,
    title: "Sneakout World",
    description:
      "A complete e-commerce website for a brand selling bags, featuring animations, JWT-based authentication, payment integration, and full purchase flow.",
    type: "company",
    image: "/images/sneakout.webp",
    technologies: ["Next.js", "Tailwind CSS", "GSAP", "Redux Toolkit"],
    liveUrl: "https://sneakoutworld.com",
  },
  {
    id: 7,
    title: "LMNT Admin Panel and Customer Web App",
    description:
      "A Gym Management Application that manages customer sessions and memberships. Also includes a customer-facing website for tracking membership details and session schedules.",
    type: "company",
    image: "/images/lmnt.webp",
    technologies: ["React.js", "Tailwind CSS", "Material UI", "Redux Toolkit"],
  },

  //   {
  //     id: 11,
  //     title: "Tavasay",
  //     description:
  //       "A project focusing on personalized web experiences, built with modern UI and UX practices.",
  //     type: "personal",
  //     image: "/images/zaincare.webp",
  //     technologies: ["React.js", "Tailwind CSS"],
  //   },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.type === activeFilter
  );

  const filterButtons = [
    { key: "all", label: "All Projects" },
    { key: "personal", label: "Personal" },
    { key: "company", label: "Company" },
  ];

  return (
    <section className=" lg:py-20 py-4  space-y-6 lg:space-y-10">
      <p className="heading m-auto">Projects !</p>

      <div className="w-11/12 m-auto">
        {/* Header */}

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-div/50 backdrop-blur-lg  rounded-full p-2 gap-2">
            {filterButtons.map(({ key, label }) => (
              <button
                key={key}
                variant={activeFilter === key ? "default" : "ghost"}
                onClick={() => setActiveFilter(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all ${
                  activeFilter === key
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-xl group overflow-hidden bg-glass backdrop-blur-lg border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <div className="lg:block hidden relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700  group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Project Type Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold 
                    ${
                      project.type === "personal"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }
                  `}
                >
                  {project.type === "personal" ? "Personal" : "Company"}
                </div>
              </div>

              <div className=" p-4 lg:p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="text-xs px-3 py-1 border rounded-full text-muted-foreground bg-secondary/30"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <CustomButton title="Live Demo" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <CustomButton title="Code" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No projects found for the selected filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
