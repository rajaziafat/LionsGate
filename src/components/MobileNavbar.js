import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";
import { PopupButton } from "@typeform/embed-react";

function MobileNavbar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div
      className={`w-full flex flex-col fixed top-0 right-0 bg-blue h-screen z-[140] transition-all duration-[.3s] overflow-y-auto  ${
        isSidebarOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-5 mb-4">
          <img
            src="images/logo.png"
            className="w-32 md:w-36 lg:w-40 xl:w-52 min-w-[128px] md:min-w-[144px] lg:min-w-[160px] xl:min-w-[208px]"
            alt=""
          />

          <button
            className="flex text-white text-2xl"
            onClick={() => setIsSidebarOpen((val) => !val)}
          >
            <IoClose />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-white uppercase text-xl cursor-pointer ${
                isActive ? "opacity-60" : "opacity-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white uppercase text-xl cursor-pointer ${
                isActive ? "opacity-60" : "opacity-100"
              }`
            }
          >
            About
          </NavLink>
          <ScrollLink
            to="Company"
            offset={-100}
            onClick={() => setIsSidebarOpen(false)}
            className="text-white uppercase text-xl cursor-pointer"
          >
            Company
          </ScrollLink>
          <ScrollLink
            to="Services"
            offset={-100}
            onClick={() => setIsSidebarOpen(false)}
            className="text-white uppercase text-xl cursor-pointer"
          >
            Services
          </ScrollLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `text-white uppercase text-xl cursor-pointer ${
                isActive ? "opacity-60" : "opacity-100"
              }`
            }
          >
            Jobs
          </NavLink>

          <NavLink
            to="/contact"
            offset={-100}
            onClick={() => setIsSidebarOpen(false)}
            className={({ isActive }) =>
              `text-white uppercase text-xl cursor-pointer ${
                isActive ? "opacity-60" : "opacity-100"
              }`
            }
          >
            Contact
          </NavLink>

          <div className="pt-8 flex items-center flex-col space-y-6">
            <p className="text-center text-xs text-white">
              Get a free evaluation with Lionsgate Wizard™.
            </p>
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
      </div>
    </div>
  );
}

export default MobileNavbar;
