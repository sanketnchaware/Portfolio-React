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
        {/* <p>Welcome!</p> */}

        <img
          className="border border-hackingGreen grayscale w-10 shadow-md  shadow-hackingGreen h-10 m-auto  rounded-full"
          src="https://sanketnchaware-portfolio.vercel.app/static/media/sanket.e4a21a68cfc936bc36cc.jpg"
          alt="profile_photo"
        />
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
