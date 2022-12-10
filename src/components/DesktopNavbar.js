import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { PopupButton } from "@typeform/embed-react";

function DesktopNavbar() {
  return (
    <div className="flex items-center lg:space-x-[100px] bg-transparent z-[140] transition-all duration-[.3s]">
      <button className="flex md:hidden text-white text-2xl">
        <IoClose />
      </button>

      <div className="flex items-center space-x-8">
        <Link
          to="/about"
          className="text-white uppercase text-16px cursor-pointer"
        >
          About
        </Link>
        <ScrollLink
          to="Company"
          offset={-100}
          className="text-white uppercase text-16px cursor-pointer"
        >
          Company
        </ScrollLink>
        <ScrollLink
          to="Services"
          offset={-100}
          className="text-white uppercase text-16px cursor-pointer"
        >
          Services
        </ScrollLink>
        <Link
          to="/jobs"
          className="text-white uppercase text-16px cursor-pointer"
        >
          Jobs
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <Link
          to="/contact"
          offset={-100}
          className="text-white uppercase text-16px cursor-pointer"
        >
          Contact
        </Link>
        {/* <button
      data-tf-popup=""
      data-tf-iframe-props="title=Lionsgate Wizard"
      data-tf-medium="snippet"
      className="rounded-btn text-center md:text-left"
    >
      Use our Wizard
    </button> */}
        <PopupButton
          id="e8zavgJB"
          data-tf-iframe-props="title=Lionsgate Wizard"
          data-tf-medium="snippet"
          className="rounded-btn text-center"
          style={{ whiteSpace: "nowrap" }}
        >
          try our Wizard
        </PopupButton>
      </div>
    </div>
  );
}

export default DesktopNavbar;
