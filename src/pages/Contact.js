import Navbar from "layouts/Navbar";
import React from "react";
import Form from "layouts/Form";
import FooterFooter from "layouts/FooterFooter";
import SocialIcons from "layouts/SocialIcons";

function Contact() {
  return (
    <div className="bg-blue min-h-screen pb-16 relative z-10 overflow-hidden">
      <div className="mb-4 md:mb-9">
        <Navbar />
      </div>

      <div className="container">
        <h1 className="text-48px text-white text-center font-bold mb-6 md:mb-10 xl:mb-16">
          CONTACT
        </h1>

        <div className="flex flex-col items-center space-y-1 mb-10 md:mb-14 xl:mb-20">
          <a
            href="tel:+442037699711"
            className="text-24px block w-fit font-bold text-white"
          >
            +44 2037 699 711
          </a>
          <a
            href="mailto:info@lionsgate.network"
            className="text-24px block w-fit font-bold text-white"
          >
            info@lionsgate.network
          </a>
        </div>

        <div className="mb-12 md:mb-16 xl:mb-24">
          <Form />
        </div>

        <div className="mb-12 md:mb-16 xl:mb-24">
          <SocialIcons />
        </div>

        <img
          src="images/contact-img.png"
          className="md:absolute top-[4%] right-[0%] translate-x-1/2 w-[60%] max-w-[1000px] pointer-events-none select-none -z-20 hidden md:block"
          alt=""
        />

        <img
          src="images/contact-img-mobile.png"
          className="max-w-[16rem] w-full mx-auto mb-6 block md:hidden"
          alt=""
        />

        <div className="container">
          <FooterFooter />
        </div>
      </div>
    </div>
  );
}

export default Contact;
