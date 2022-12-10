import { PopupButton } from "@typeform/embed-react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import Scroll from "react-scroll";

function Hero() {
  return (
    <div className="relative z-10">
      <div className="container pt-8 lg:pt-50px xl:pt-75px">
        <div className="mx-auto w-full">
          <div className="mb-8 md:mb-10 xl:mb-50px">
            <h1
              className="text-center uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 xl:mb-8"
              style={{ lineHeight: 1.3 }}
            >
              recover your lost <br />
              crypto funds
              {/* RECOVERY SERVICE <br /> FOR YOUR LOST FUNDS */}
            </h1>

            <p className="text-center mx-auto md:max-w-none md:mx-0 text-white opacity-80 text-xs md:text-base xl:text-2xl font-medium tracking-widest mb-8">
              Get a free evaluation with Lionsgate Wizard™.
            </p>

            {/* <a href="/" className="rounded-btn w-fit mx-auto">
              Use our Wizard
            </a> */}
            <PopupButton
              id="e8zavgJB"
              data-tf-iframe-props="title=Lionsgate Wizard"
              data-tf-medium="snippet"
              className="rounded-btn text-center mx-auto"
            >
              try our Wizard
            </PopupButton>
          </div>

          <img
            src="images/laptop.png"
            className="w-full mb-25px max-w-[400px] md:max-w-[500px] lg:max-w-[620px] xl:max-w-[826px] mx-auto"
            alt=""
          />

          <button
            className="flex mx-auto text-3xl md:text-4xl xl:text-5xl"
            onClick={() =>
              Scroll.scroller.scrollTo("trusted", { offset: -100 })
            }
          >
            <BiChevronDown />
          </button>
        </div>
      </div>

      <img
        src="images/curved.svg"
        className="absolute left-0 bottom-0 w-full -z-50"
        alt=""
      />
    </div>
  );
}

export default Hero;
