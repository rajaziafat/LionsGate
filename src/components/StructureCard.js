import React from "react";
import Point from "./Point";

function StructureCard({ title, headerBg, points }) {
  return (
    <div className="bg-white rounded-xl xl:rounded-30px overflow-hidden">
      <div
        className={`py-3 md:py-4 xl:py-6 px-6 md:px-8 xl:px-14 rounded-xl xl:rounded-30px text-white leading-[1.4] text-sm md:text-base lg:text-lg xl:text-2xl font-bold ${headerBg}`}
      >
        {title}
      </div>

      <div className="px-8 xl:px-14 flex flex-col justify-center space-y-5 py-25px xl:py-0 xl:h-[218px]">
        {points &&
          points.map((point, index) => (
            <Point point={point} fontSize="text-xs lg:text-sm" />
          ))}
      </div>
    </div>
  );
}

export default StructureCard;
