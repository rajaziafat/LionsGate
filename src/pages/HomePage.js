import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import TrustedCompanies from "layouts/TrustedCompanies";
import LostAndRecovered from "layouts/LostAndRecovered";
import GettingStarted from "layouts/GettingStarted";
import ServicesIncludes from "layouts/ServicesIncludes";
import ServicesStructure from "layouts/ServicesStructure";
import OurServices from "layouts/OurServices";
import RecoverWithUs from "layouts/RecoverWithUs";
import Company from "layouts/Company";
import DrivenByExperts from "layouts/DrivenByExperts";
import Footer from "layouts/Footer";
import HowDoWeWork from "layouts/HowDoWeWork";
import { PopupButton } from "@typeform/embed-react";

function HomePage() {
  return (
    <div id="home">
      <div className="bg-blue mb-50px sm:mb-75px lg:mb-100px">
        <Navbar />
        <Hero />
      </div>
      <div className="mb-75px sm:mb-100px lg:mb-150px" id="trusted">
        <TrustedCompanies />
      </div>

      <div className="mb-75px sm:mb-100px lg:mb-150px">
        <HowDoWeWork />
      </div>

      <div className="mb-75px lg:mb-100px">
        <LostAndRecovered />
      </div>
      <div className="mb-75px lg:mb-100px">
        <GettingStarted />
      </div>
      <div className="mb-75px lg:mb-100px">
        <ServicesIncludes />
      </div>
      <div>
        <ServicesStructure />
      </div>

      <div className="mb-50px md:mb-75px lg:mb-100px xl:mb-150px">
        <div className="bg-blue">
          <img src="images/curved-down.svg" className="w-full" alt="" />
          <div
            className="py-50px md:py-100px xl:py-125px z-20 relative"
            style={{ paddingBottom: 0 }}
          >
            <div className="mb-75px sm:mb-100px" id="Services">
              <OurServices />
            </div>
            <div className="mb-75px sm:mb-100px">
              <RecoverWithUs />
            </div>
            <div className="mb-75px sm:mb-100px" id="Company">
              <Company />
            </div>
            <DrivenByExperts />
          </div>
        </div>
        <img
          src="images/curved-blue-down.svg"
          className="-z-50 w-full mt-[-6%]"
          alt=""
        />
      </div>

      <div className="mb-50px md:mb-75px lg:mb-100px xl:mb-150px">
        <div className="container">
          <h2
            className="text-center text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold max-w-[26em] uppercase w-full mx-auto"
            style={{ lineHeight: 1.5 }}
          >
            With Lionsgate Recovery Wizard, you can begin recovering your funds,
            starting today.
          </h2>

          <PopupButton
            id="e8zavgJB"
            data-tf-iframe-props="title=Lionsgate Wizard"
            data-tf-medium="snippet"
            className="rounded-btn text-center mx-auto mt-8"
          >
            try our Wizard
          </PopupButton>
        </div>
      </div>

      <div id="Contact">
        <Footer
          showQna={true}
          textBelowForm="By submitting this form you agree to store your personal data in
                our system so we can respond to your enquiry. We are 100%
                committed to protecting your privacy in accordance to GDPR and
                CCPA. You can read more in our Privacy Policy and T&C."
        />
      </div>
    </div>
  );
}

export default HomePage;
