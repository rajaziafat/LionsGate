import React from "react";
import SideBySideCard from "SideBySideCard";

function RecoverWithUs() {
  return (
    <SideBySideCard
      title="RECOVER WITH US"
      subtitle="In collaborating with our partners in legal, blockchain and local
    authorities, we are confident in our joint effort to recover lost
    funds."
      descs={[
        "We enable our clients to enter into a recovery process that ensures their funds are not neglected and while rapidly scaling up RSR (recovery success rate) with the full support of our multidisciplinary teams. Together, our chances to recover your funds and reach a settlement is greater than ever before.",
      ]}
      img="images/recover-with-us.png"
    />
  );
}

export default RecoverWithUs;
