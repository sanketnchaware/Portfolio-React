import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-white fixed top-0  h-auto z-50 backdrop-blur-3xl  w-full px-6 py-4  justify-between drop-shadow-2xl decoration-purple-400">
      <div className="">
        <button
          onClick={() => {
            document.querySelector(`#home`).scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="text-black bg-white text-xl"
        >
          SAN<span className="bg-black text-white shadow-2xl">KET</span>
        </button>
      </div>
      <div className="navlinks  hidden sm:flex justify-between   w-fit  ">
        {React.Children.toArray(
          [
            { name: "About Me ", url: "about" },
            { name: "Skills ", url: "skills" },
            { name: "Work Experiance", url: "experiance" },
            { name: "Projects", url: "projects" },
            { name: "Contact Me", url: "contact" },
          ].map(({ name, url }) => {
            return (
              <button
                className="cursor-pointer"
                onClick={() => {
                  document.querySelector(`#${url}`).scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {name}
              </button>
            );
          })
        )}
      </div>
    </nav>
  );
};

export default Navbar;
