import Title from "components/Title";
import React from "react";

function DrivenByExperts() {
  return (
    <div>
      <div className="container">
        <div className="mb-8 md:mb-10 xl:mb-14">
          <Title title="WE ARE DRIVEN BY EXPERTS FROM" className="text-white" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        <div className="px-6 md:px-9 lg:px-50px xl:px-100px py-2 md:py-3 lg:py-4 xl:py-5 bg-orange-gradient rounded-r-full text-right text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-3xl">
          CYBER SECURITY
        </div>
        <div className="px-6 md:px-9 lg:px-50px xl:px-100px py-2 md:py-3 lg:py-4 xl:py-5 bg-orange-gradient rounded-l-full text-left text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-3xl">
          LEGAL
        </div>
      </div>
    </div>
  );
}

export default DrivenByExperts;
