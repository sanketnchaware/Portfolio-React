import React from "react";

const Navbar = () => {
  const ShowComponent = (itemid) => {
    console.log("itemid:", itemid);
    document.querySelector(`.${itemid}`).scrollIntoView({
      behavior: "smooth",
    });

    // if (element) {
    //   window.scroll({
    //     top: element.scrollTop,
    //     behavior: "smooth",
    //   });
    // }
  };
  return (
    <nav className="flex bg-slate-900 fixed top-0  h-auto z-50 backdrop-blur-3xl  w-full px-6 py-4  justify-between drop-shadow-2xl decoration-purple-400">
      <div>
        <p class="text-2xl">Welcome!</p>
      </div>
      <div className="navlinks  hidden sm:flex justify-between   w-fit  ">
        {React.Children.toArray(
          [
            { name: "Home", url: "home" },
            { name: "About Me ", url: "about" },
            { name: "Work Experiance", url: "experiance" },
            { name: "Projects", url: "projects" },
            { name: "Contact Me", url: "contact" },
          ].map(({ name, url }) => {
            return (
              <a
                className="cursor-pointer"
                onClick={() => {
                  document.querySelector(`#${url}`).scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                // href={`#${url}`}
                // onClick={() => {
                //   ShowComponent(url);
                // }}
              >
                {name}
              </a>
            );
          })
        )}
      </div>
    </nav>
  );
};

export default Navbar;
