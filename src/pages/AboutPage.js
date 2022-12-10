import useMediaQuery from "hooks/useMediaQuery";
import FooterFooter from "layouts/FooterFooter";
import Navbar from "layouts/Navbar";

function AboutPage() {
  const isAbove1024px = useMediaQuery("(min-width:1024px)");

  return (
    <div className="relative">
      <Navbar className="bg-blue" />
      <div className="mb-16 sm:mb-20 xl:mb-150px">
        <div className="container pt-8 sm:pt-12">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 lg:mb-16">
            ABOUT
          </h1>

          <div className="lg:w-50% text-left">
            <h2 className="text-lg lg:text-xl xl:text-2xl text-black font-bold mb-5 lg:mb-9">
              We're Lionsgate.
            </h2>

            <div className="space-y-6 mb-14 md:mb-20">
              <p className="text-base lg:text-lg xl:text-xl font-light text-black">
                In 2022, Lionsgate was founded with the vision of creating an
                independent currency of trust for individual investors.{" "}
              </p>

              <p className="text-base lg:text-lg xl:text-xl font-light text-black">
                As a digital platform, we provide professional money recovery
                services to investors worldwide. Our goal is to lead this
                category by Q2 of 2023.{" "}
              </p>

              <p className="text-base lg:text-lg xl:text-xl font-light text-black">
                Lionsgate offers investors access to some of the best blockchain
                analysts and legal advisors in the industry.{" "}
              </p>

              <p className="text-base lg:text-lg xl:text-xl font-light text-black">
                Our main goal at Lionsgate is to foster trust and inspire
                confidence among crypto investors in a highly opaque
                environment.
              </p>

              <p className="text-base lg:text-lg xl:text-xl font-light text-black">
                Lionsgate uses Game Theory and Wisdom of Crowds to effectively
                recover investors' funds.{" "}
              </p>

              <p className="text-base lg:text-lg xl:text-xl font-light text-black">
                With offices in Tel Aviv, London, Kiev, and New York, we're here
                to gettin’ you what’s yours.{" "}
              </p>
            </div>

            <p className="text-base lg:text-lg xl:text-xl font-light text-black">
              We're hiring!
            </p>
          </div>
        </div>
      </div>

      {isAbove1024px ? (
        <>
          <img
            src="images/about-banner.png"
            className="absolute top-0 right-[0] w-[46%] max-w-[700px] -z-50 hidden lg:block"
            alt=""
          />

          <div className="mb-100px">
            <div className="container">
              <FooterFooter textColor="text-black" />
            </div>
          </div>
        </>
      ) : (
        <>
          <img
            src="images/curved-blue.svg"
            className="-z-50 w-full mb-[-13%]"
            alt=""
          />
          <div className="mt-25px md:pt-0 pb-50px md:py-20 bg-blue relative">
            <div className="mb-6">
              <div className="container">
                <img
                  src="images/mobile-about.png"
                  className="w-full max-w-[18rem] mx-auto"
                  alt=""
                />
              </div>
            </div>

            <div className="container">
              <FooterFooter />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutPage;
