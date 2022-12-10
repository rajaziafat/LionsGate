import { PopupButton } from "@typeform/embed-react";
import LostAndRecoveredCard from "components/LostAndRecoveredCard";
import Title from "components/Title";
import React from "react";

function LostAndRecovered() {
  return (
    <div>
      <div className="container">
        <div className="mb-9 md:mb-50px">
          <div className="mb-4 xl:mb-8">
            <Title title="LOST & RECOVERED" />
          </div>
          <p className="text-center text-sm xl:text-16px font-light">
            Get a free evaluation of your recovery chances by using our wizard
          </p>
        </div>

        <div className="grid sm:grid-cols-2 max-w-[14rem] sm:max-w-[26rem] md:max-w-[30rem] mx-auto lg:mx-0 lg:max-w-none lg:grid-cols-4 gap-4 lg:gap-6 mb-50px md:mb-75px">
          <LostAndRecoveredCard
            bg="bg-orange-gradient"
            heading="Total Lost in 2021"
            title="+$14"
            subtitle="BILLION USD"
          />
          <LostAndRecoveredCard
            bg="bg-blue-gradient"
            heading="Total Recovered"
            title="+$450"
            subtitle="MILLION USD"
          />
          <LostAndRecoveredCard
            bg="bg-orange-gradient"
            heading="Wallets Worldwide "
            title="+83"
            subtitle="MILLION WALLETS"
          />
          <LostAndRecoveredCard
            bg="bg-blue-gradient"
            heading="Lionsgate’s Success Rate"
            title="83%"
            subtitle="AND RISING"
          />
        </div>

        <div className="flex items-center space-x-6 justify-center">
          {/* <a href="/" className="rounded-btn">
            Use our Wizard
          </a> */}
          <PopupButton
            id="e8zavgJB"
            data-tf-iframe-props="title=Lionsgate Wizard"
            data-tf-medium="snippet"
            className="rounded-btn"
          >
            try our Wizard
          </PopupButton>
          {/* <a href="/" className="text-16px text-black uppercase">
            contact
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default LostAndRecovered;
