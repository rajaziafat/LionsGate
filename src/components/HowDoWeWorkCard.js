import React from "react";

function HowDoWeWorkCard({ img, count, desc, className }) {
  return (
    <div
      className={`flex flex-col items-center text-center basis-[240px] ${className}`}
    >
      <div className="w-[50px] lg:w-[80px] xl:w-[110px] h-[50px] lg:h-[80px] xl:h-[110px] flex items-center justify-center">
        <img src={img} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="mt-4 bg-blue-gradient w-6 lg:w-8 xl:w-10 h-6 lg:h-8 xl:h-10 rounded-full flex items-center justify-center">
        <div className="w-[60%] h-[60%] rounded-full bg-white flex items-center justify-center text-[10px] lg:text-xs font-bold text-black">
          {count}
        </div>
      </div>

      <p className="mt-3 text-xs font-normal text-center max-w-[261px]">
        {desc}
      </p>
    </div>
  );
}

export default HowDoWeWorkCard;
