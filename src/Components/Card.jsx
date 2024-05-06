import React from "react";

const Card = ({ content }) => {
  return (
    <div className=" border text-2xl border-hackingGreen rounded-xl px-6 py-3">
      {content}
    </div>
  );
};

export default Card;
