import Title from "components/Title";
import React from "react";

function SideBySideCard({
  title,
  subtitle,
  descs,
  img,
  imgWidth = "w-full lg:w-[70%]",
}) {
  return (
    <div className="container flex flex-col lg:flex-row items-center justify-between">
      <div className="flex-1 mx-auto md:mx-0">
        <div className="mb-4 md:mb-8 lg:mb-10">
          <Title title={title} className="text-white" alignment="left" />
        </div>

        {subtitle && (
          <p className="text-20px text-white font-light mb-5 md:mb-6">
            {subtitle}
          </p>
        )}

        {descs && (
          <div className="space-x-4">
            {descs.map((item, index) => (
              <p
                key={index}
                className="text-base xl:text-xl text-white font-medium"
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 flex w-full mt-12 lg:mt-0 justify-center lg:justify-end items-center">
        <img src={img} className={`${imgWidth}`} alt="" />
      </div>
    </div>
  );
}

export default SideBySideCard;
