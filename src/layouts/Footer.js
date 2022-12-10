import Title from "components/Title";
import React from "react";
import Form from "./Form";
import FooterFooter from "./FooterFooter";
import SocialIcons from "./SocialIcons";
import Accordion from "components/Accordion";

function Footer({ showQna = false, textBelowForm }) {
  return (
    <>
      <img
        src="images/curved-blue.svg"
        className="-z-50 w-full mb-[-13%]"
        alt=""
      />
      <div className="mt-25px md:pt-0 pb-50px md:py-100px bg-blue relative">
        <div className="container">
          <div className="mb-50px sm:mb-100px xl:mb-150px">
            <div className="mb-50px sm:mb-75px xl:mb-100px">
              <Form />

              {textBelowForm && (
                <p className="text-center text-sm text-white opacity-70 mt-8 max-w-[40rem] mx-auto">
                  {textBelowForm}
                </p>
              )}
            </div>

            <div className="mb-25px xl:mb-50px">
              <Title title="contact us" className="text-white" />
            </div>

            <div>
              <SocialIcons />
            </div>

            {showQna && (
              <div className="mt-28">
                <div className="mb-25px xl:50px">
                  <Title title="Q&A" className="text-white" />
                </div>

                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <Accordion title="How can Lionsgate help me?">
                    <div className="">
                      <p className="text-xs md:text-base text-white opacity-80 max-w-[30rem] font-light">
                        A unique company-wide integration between blockchain
                        experts and legal personnel is the key to Lionsgate's
                        success. The ethical methods and tactics we use to
                        recover your funds are advanced and mostly used by big
                        organizations, financial institutes and governments. We
                        work relentlessly to gettin' you what is yours.
                      </p>
                    </div>
                  </Accordion>
                  <Accordion title="How do I begin the recovery process?">
                    <div className="">
                      <p className="text-xs md:text-base text-white opacity-80 max-w-[30rem] font-light">
                        A unique company-wide integration between blockchain
                        experts and legal personnel is the key to Lionsgate's
                        success. The ethical methods and tactics we use to
                        recover your funds are advanced and mostly used by big
                        organizations, financial institutes and governments. We
                        work relentlessly to gettin' you what is yours.
                      </p>
                    </div>
                  </Accordion>
                  <Accordion title="When will I get my money back?">
                    <div className="">
                      <p className="text-xs md:text-base text-white opacity-80 max-w-[30rem] font-light">
                        A unique company-wide integration between blockchain
                        experts and legal personnel is the key to Lionsgate's
                        success. The ethical methods and tactics we use to
                        recover your funds are advanced and mostly used by big
                        organizations, financial institutes and governments. We
                        work relentlessly to gettin' you what is yours.
                      </p>
                    </div>
                  </Accordion>
                  <Accordion title="Premium Express: How do I join?">
                    <div className="">
                      <p className="text-xs md:text-base text-white opacity-80 max-w-[30rem] font-light">
                        A unique company-wide integration between blockchain
                        experts and legal personnel is the key to Lionsgate's
                        success. The ethical methods and tactics we use to
                        recover your funds are advanced and mostly used by big
                        organizations, financial institutes and governments. We
                        work relentlessly to gettin' you what is yours.
                      </p>
                    </div>
                  </Accordion>
                  <Accordion title="How can I trust Lionsgate?">
                    <div className="">
                      <p className="text-xs md:text-base text-white opacity-80 max-w-[30rem] font-light">
                        A unique company-wide integration between blockchain
                        experts and legal personnel is the key to Lionsgate's
                        success. The ethical methods and tactics we use to
                        recover your funds are advanced and mostly used by big
                        organizations, financial institutes and governments. We
                        work relentlessly to gettin' you what is yours.
                      </p>
                    </div>
                  </Accordion>
                  <Accordion title="Where are you located? ">
                    <div className="">
                      <p className="text-xs md:text-base text-white opacity-80 max-w-[30rem] font-light">
                        A unique company-wide integration between blockchain
                        experts and legal personnel is the key to Lionsgate's
                        success. The ethical methods and tactics we use to
                        recover your funds are advanced and mostly used by big
                        organizations, financial institutes and governments. We
                        work relentlessly to gettin' you what is yours.
                      </p>
                    </div>
                  </Accordion>
                  <Accordion title="Can you tell me more about the company?">
                    <div className="">
                      <p className="text-xs md:text-base text-white opacity-80 max-w-[30rem] font-light">
                        A unique company-wide integration between blockchain
                        experts and legal personnel is the key to Lionsgate's
                        success. The ethical methods and tactics we use to
                        recover your funds are advanced and mostly used by big
                        organizations, financial institutes and governments. We
                        work relentlessly to gettin' you what is yours.
                      </p>
                    </div>
                  </Accordion>
                  <Accordion title="What's the backend process for at Lionsgate?">
                    <div className="">
                      <p className="text-xs md:text-base text-white opacity-80 max-w-[30rem] font-light">
                        A unique company-wide integration between blockchain
                        experts and legal personnel is the key to Lionsgate's
                        success. The ethical methods and tactics we use to
                        recover your funds are advanced and mostly used by big
                        organizations, financial institutes and governments. We
                        work relentlessly to gettin' you what is yours.
                      </p>
                    </div>
                  </Accordion>
                </div>
              </div>
            )}
          </div>

          <FooterFooter arrowUpShow={true} />
        </div>
      </div>
    </>
  );
}

export default Footer;
