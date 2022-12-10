import Title from "components/Title";
import React from "react";

function GettingStarted() {
  return (
    <div>
      <div className="container">
        <div className="mb-6 md:mb-8">
          <Title title="Getting started is easy" />
        </div>

        <div className="space-y-6">
          <p className="text-xs md:text-20px text-black leading-[1.6] font-light text-center w-full max-w-[40em] mx-auto">
            Start by launching Lionsgate Wizard™. The wizard help us determine
            the likelihood of successfully retrieving your money. It's
            completely free and will take you about 60 seconds to complete.
          </p>
          <p className="text-xs md:text-20px text-black leading-[1.6] font-light text-center w-full max-w-[40em] mx-auto">
            Based on your feedback, we will provide you with an immediate
            estimation. In the event we believe we can recover your funds
            successfully, a professional agent will then get in touch to provide
            further information about our service. It is our policy to protect
            the confidentiality of your information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
