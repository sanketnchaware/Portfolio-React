import React, { useState } from "react";
import Card from "./Card";

const skillsData = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Material UI",
    "Responsive Design",
    "React Router",
    "Figma to Code",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "JWT Authentication",
  ],
  Tools: [
    "Git",
    "GitHub",
    "Postman",
    "NPM",
    "VS Code",
    "ESLint & Prettier",
    "Render / Vercel / Netlify",
  ],
  Capabilities: [
    "Build Responsive UIs",
    "Integrate REST APIs",
    "Implement Authentication (JWT)",
    "Convert Figma to Code",
    "Write Clean & Reusable Code",
  ],
};

const tabs = Object.keys(skillsData);

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-6xl text-center">
        <p className="heading m-auto mb-6">My Skills!</p>

        {/* Tabs */}
        <div className="flex gap-4 flex-wrap justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="flex justify-center flex-wrap gap-4 items-center">
          {skillsData[activeTab].map((skill) => (
            <Card key={skill} content={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
