import HowDoWeWorkCard from "components/HowDoWeWorkCard";
import Title from "components/Title";
import React from "react";

function HowDoWeWork() {
  return (
    <div className="container">
      <div className="mb-9 md:mb-20">
        <Title title="HOW DO WE WORK? " />
      </div>

      <div className="grid grid-cols-2 gap-y-10 gap-x-8 lg:gap-0 lg:flex flex-wrap justify-center lg:-mx-6 lg:-my-10">
        <HowDoWeWorkCard
          img="images/work-cards/1.png"
          count={1}
          className="lg:mx-6 lg:my-10"
          desc="Establish trust with a face-to-face video chat with a trusted representative."
        />
        <HowDoWeWorkCard
          img="images/work-cards/2.png"
          count={2}
          className="lg:mx-6 lg:my-10"
          desc="Lionsgate open an official file after gathering vital information about the case. "
        />
        <HowDoWeWorkCard
          img="images/work-cards/3.png"
          count={3}
          className="lg:mx-6 lg:my-10"
          desc="Then we forward the case to a senior analyst on our Blockchain Team to get you approved. "
        />
        <HowDoWeWorkCard
          img="images/work-cards/4.png"
          count={4}
          className="lg:mx-6 lg:my-10"
          desc="We create a plan to resolve the case."
        />
        <HowDoWeWorkCard
          img="images/work-cards/5.png"
          count={5}
          className="lg:mx-6 lg:my-10"
          desc="Lionsgate gets you the best settlement."
        />
        <HowDoWeWorkCard
          img="images/work-cards/6.png"
          count={6}
          className="lg:mx-6 lg:my-10"
          desc="Lionsgate communicate with the fund's holder to resolve the case or to refer it to local or national authorities."
        />

        <div className="col-span-2 w-full lg:col-span-1 flex justify-center lg:mx-6 lg:my-10 lg:w-fit">
          <HowDoWeWorkCard
            img="images/work-cards/7.png"
            count={7}
            desc="Explore your legal options with the help of our Legal Team."
          />
        </div>
      </div>
    </div>
  );
}

export default HowDoWeWork;
