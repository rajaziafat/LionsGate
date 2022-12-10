import Point from "components/Point";
import Title from "components/Title";
import React from "react";

function ServicesIncludes() {
  return (
    // <div>
    //   <div className="container">
    //     <div className="mb-8 md:mb-12">
    //       <Title title="Lionsgate’s services include " />
    //     </div>

    //     <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-10">
    //       <img
    //         src="images/laptop.png"
    //         className="w-full lg:w-1/2 max-w-[24rem] lg:max-w-none"
    //         alt=""
    //       />

    //       <div className="space-y-6">
    //         <Point point="The use of ethical cyber tools by our team of analysts" />
    //         <Point point="Investigate transactions and trace flow of funds" />
    //         <Point point="Filling an official complaint with local authorities " />
    //         <Point point="Submitting a demand claim to the holder of your funds" />
    //         <Point point="Getting you the best settlement" />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="container">
        <div className="mb-8 md:mb-12">
          <Title title="Roadmap for service" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-10 items-center">
          <div className="space-y-6">
            <Point point="Tracing Our Target on Web3 (Adress) and Web2 (Accounts, URL’s, etc.)" />
            <Point point="Utilizing OSINT (dApps, GitHub,Internal DB and more) " />
            <Point point="Taking official action with local authorities - Worldwide " />
            <Point point="Taking proactive legal measures " />
            <Point point="We obtain the best possible settlement for you" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesIncludes;
