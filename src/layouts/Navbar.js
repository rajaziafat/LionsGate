import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import DesktopNavbar from "components/DesktopNavbar";
import MobileNavbar from "components/MobileNavbar";

function Navbar({ className }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAbove1024px = useMediaQuery("(min-width:1024px)");

  return (
    <div className={className}>
      <div className="container py-5 xl:py-6 flex items-center justify-between">
        <Link to="/">
          <img
            src="images/logo.png"
            className="w-32 md:w-36 lg:w-40 xl:w-52 min-w-[128px] md:min-w-[144px] lg:min-w-[160px] xl:min-w-[208px]"
            alt=""
          />
        </Link>

        <button
          className="flex lg:hidden text-xl text-white"
          onClick={() => setIsSidebarOpen((val) => !val)}
        >
          <FiMenu />
        </button>

        {isAbove1024px && <DesktopNavbar />}

        {!isAbove1024px && (
          <MobileNavbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
      </div>

      <div className={`black-screen ${isSidebarOpen ? "show" : ""}`}></div>
    </div>
  );
}

export default Navbar;
