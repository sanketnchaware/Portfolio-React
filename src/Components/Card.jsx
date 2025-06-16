import React from "react";

const Card = ({ content }) => {
  return (
    <div className=" border text-lg lg:text-2xl border-hackingGreen rounded-xl px-4 lg:px-6 py-2 lg:py-3">
      {content}
    </div>
  );
};

export default Card;
