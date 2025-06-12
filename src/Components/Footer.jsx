import React from "react";

const Footer = () => {
  return (
    <div className=" bg-white drop-shadow-2xl ">
      <div className="border-b py-20 border-slate-600 sm:flex-row flex-col flex justify-between items-center gap-4 w-10/12 m-auto">
        <div className="w-full">
          <p className="text-2xl sm:text-left text-center">SANKET CHAWARE</p>
          <br />
          <p className=" leading-relaxed  sm:w-1/2 sm:text-left text-center w-full">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between gap-4">
            {[
              {
                image: "/icons/linkedin.svg",
                url: "https://www.linkedin.com/in/sanketnchaware/",
              },
              {
                image: "/icons/github.svg",
                url: "https://github.com/sanketnchaware",
              },
            ].map(({ image, url }) => (
              <a href={url} target="_blank" rel="noopener noreferrer" key={url}>
                <img className="w-10 h-10" src={image} alt="Social Icon" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-center py-8">
        © Copyright {new Date().getFullYear()}. Made by Sanket Chaware
      </p>
    </div>
  );
};

export default Footer;
