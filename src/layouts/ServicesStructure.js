import StructureCard from "components/StructureCard";
import React from "react";

function ServicesStructure() {
  return (
    <div>
      <div className="container">
        <h1
          className="text-center text-base md:text-xl uppercase lg:text-2xl xl:text-3xl font-bold mb-12 md:mb-20"
          style={{ lineHeight: 1.5 }}
        >
          A company-wide integration of blockchain analysts and <br /> legal
          personnel is the key to Lionsgate's success
        </h1>

        <div className="grid md:grid-cols-2 items-start xl:items-stretch gap-6">
          <StructureCard
            headerBg="bg-orange-gradient"
            title="Lionsgate services are suitable for both private and corporate clients who also experienced:"
            points={[
              "Wallet hacking",
              "Funds plunged with Celsius, Luna and others",
              "Sudden lost access to their wallet",
            ]}
          />
          <StructureCard
            headerBg="bg-blue-gradient"
            title={
              <span>
                More benefits our clients find with{" "}
                <br className="hidden lg:block" /> Lionsgate are:
              </span>
            }
            points={[
              "Navigating the rabbit hole to locate your funds anywhere ",
              "A speedy process to recovery - Premium Express ",
              "Utilizing the resources available to us, all in one place  ",
              "Legal teams in various territories to combat embezzlers on their land",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesStructure;
