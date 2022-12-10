import SocialIcon from "components/SocialIcon";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { GrReddit } from "react-icons/gr";

function SocialIcons() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-10 justify-center">
      <SocialIcon
        href="https://www.facebook.com/LionsGateWizard/"
        target="_blank"
        Icon={() => (
          <FaFacebook className="text-base lg:text-xl xl:text-2xl text-blue" />
        )}
      />
      <SocialIcon
        href="https://twitter.com/_Lionsgate"
        target="_blank"
        Icon={() => <FaTwitter className="text-20px text-blue" />}
      />
      <SocialIcon
        href="https://www.linkedin.com/company/lions-gate/?viewAsMember=true"
        target="_blank"
        Icon={() => (
          <FaLinkedinIn className="text-base lg:text-xl xl:text-2xl text-blue" />
        )}
      />
      {/* <SocialIcon
      href="/"
      target="_blank"
      Icon={() => (
        <FaMediumM className="text-base lg:text-xl xl:text-2xl text-blue" />
      )}
    /> */}
      <SocialIcon
        href="https://t.me/+h-NhDmCil8AwM2Ux"
        target="_blank"
        Icon={() => (
          <FaTelegramPlane className="text-base lg:text-xl xl:text-2xl text-blue" />
        )}
      />
      {/* <SocialIcon
      href="/"
      target="_blank"
      Icon={() => (
        <HiMail className="text-base lg:text-xl xl:text-2xl text-blue" />
      )}
    /> */}
      <SocialIcon
        href="https://www.reddit.com/user/_Lionsgate_/"
        target="_blank"
        Icon={() => (
          <GrReddit className="text-base lg:text-xl xl:text-2xl text-blue" />
        )}
      />
    </div>
  );
}

export default SocialIcons;
