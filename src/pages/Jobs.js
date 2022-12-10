import JobForm from "components/JobForm";
import FooterFooter from "layouts/FooterFooter";
import Navbar from "layouts/Navbar";
import React from "react";

function Jobs() {
  return (
    <div>
      <Navbar className="bg-blue" />

      <div className="container py-8 sm:py-12 pb-16 lg:pb-20">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 lg:mb-14">
          JOBS
        </h1>

        <div className="space-y-12 md:space-y-16 max-w-[44rem] mx-auto">
          <div>
            <h2
              className="uppercase text-center text-lg lg:text-xl xl:text-2xl text-black font-bold mb-5 lg:mb-6"
              style={{ lineHeight: 1.5 }}
            >
              Let's solve some of the biggest trust problems for online
              investors.
            </h2>

            <p className="text-center text-base lg:text-lg xl:text-xl font-light text-black">
              It's time to see where you fit in. Find out why Lionsgate attracts
              the finest and brightest from around the world. We would love to
              have you aboard!
            </p>
          </div>
          <div>
            <h2
              className="uppercase text-center text-lg lg:text-xl xl:text-2xl text-black font-bold mb-5 lg:mb-6"
              style={{ lineHeight: 1.5 }}
            >
              Subscribe for updates on vacancies
            </h2>

            <p className="text-center text-base lg:text-lg xl:text-xl font-light text-black">
              Be the first to hear about Lionsgate's new career opportunities by
              entering your details here
            </p>
          </div>
        </div>
      </div>

      <img
        src="images/curved-blue.svg"
        className="-z-50 w-full mb-[-13%]"
        alt=""
      />
      <div className="mt-25px md:pt-0 pb-50px md:py-20 bg-blue relative">
        <div className="mb-16">
          <div className="container">
            <div className="w-full max-w-[280px] lg:max-w-[345px] mx-auto">
              <JobForm />
            </div>
          </div>
        </div>

        <div className="container">
          <FooterFooter />
        </div>
      </div>
    </div>
  );
}

export default Jobs;
