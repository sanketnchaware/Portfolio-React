import React from "react";

const Navbar = () => {
  const ShowComponent = () => {
    const element = document.getElementById("theelementsid");

    if (element) {
      window.scroll({
        top: element.scrollTop,
        behavior: "smooth",
      });
    }
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
      <div className="navlinks  hidden sm:flex justify-between  w-4/12  ">
        {["Home", "Work Experiance", "Projects", "About Me"].map((item) => {
          return (
            <p
              id={item}
              onClick={() => {
                ShowComponent(item);
              }}
            >
              {item}
            </p>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
