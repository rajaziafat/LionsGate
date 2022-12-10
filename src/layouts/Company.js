import React from "react";
import SideBySideCard from "SideBySideCard";

function Company() {
  return (
    <SideBySideCard
      title="COMPANY"
      imgWidth="w-full lg:w-[82%]"
      subtitle="We’re reinventing funds recovery from the inside out."
      descs={[
        "Led by an experienced and visionary team, we are on a mission to help people and organizations discover how to retrieve their lost funds within a professional environment that accelerates their trust in a highly delicate process.",
      ]}
      img="images/company.png"
    />
  );
}

export default Company;
