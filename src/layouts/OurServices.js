import React from "react";
import SideBySideCard from "SideBySideCard";

function OurServices() {
  return (
    <SideBySideCard
      title="OUR SERVICES"
      subtitle="Our speciality is to create a customized roadmap for our clients to a successful money recovery journey via our a-z portfolio of services."
      descs={[
        "Recovering lost funds from the blockchain and returning them to their rightful owners is complex. Three divisions have been established to accomplish this mission. Our blockchain and cyber analysts work closely with our legal experts to ensure that you get your funds back.",
      ]}
      img="images/our-services.png"
    />
  );
}

export default OurServices;
