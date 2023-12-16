import React from "react";

const CustomButton = ({ title }) => {
  return (
    <button className="focus:opacity-80 text-black text-xl outline-none bg-hackingGreen px-8 py-3 rounded-xl">
      {title}
    </button>
  );
};

export default CustomButton;
