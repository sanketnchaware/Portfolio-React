import React from "react";

const Footer = () => {
  return (
    <div className=" bg-slate-900 text-white ">
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
          <p className="sm:block hidden text-2xl">SOCIAL</p>
          <br />
          <div className="flex items-center justify-between gap-4">
            {[
              {
                image:
                  "https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png",
                url: "/https://www.linkedin.com/in/sanketnchaware/",
              },
              {
                image:
                  "https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png",
                url: "/https://github.com/sanketnchaware",
              },
              // {
              //   image:
              //     "https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png",
              //   url: "#",
              // },
              // {
              //   image:
              //     "https://d33wubrfki0l68.cloudfront.net/493f1aa6da674c05bc606ba5b9e8092b881e8626/67c76/assets/png/yt-ico.png",
              //   url: "#",
              // },
            ].map(({ image, url }) => {
              return (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img className="w-10 h-10" src={image} alt="LinkedIn" />
                </a>
              );
            })}
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
