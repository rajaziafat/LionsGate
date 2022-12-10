import React from "react";

function LostAndRecoveredCard({ heading, title, subtitle, bg }) {
  return (
    <div
      className={`rounded-xl lg:rounded-30px py-4 md:py-6 px-7 md:px-9 flex flex-col items-center text-center ${bg}`}
    >
      <p className="text-center text-[10px] md:text-16px text-white uppercase text-shadow-1 mb-2 md:mb-4">
        {heading}
      </p>

      <h1 className="text-center text-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-2">
        {title}
      </h1>
      <h4 className="text-center uppercase font-bold text-sm md:text-base lg:text-lg xl:text-2xl text-white">
        {subtitle}
      </h4>
    </div>
  );
}

export default LostAndRecoveredCard;
