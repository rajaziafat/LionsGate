import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";

function Accordion({ title, children }) {
  const [isAccordionOpen, setIsAccordion] = useState(false);
  const accordionMenuRef = useRef(null);
  const accordionRef = OutsideClickDetector(() => setIsAccordion(false));

  useEffect(() => {
    if (isAccordionOpen) {
      accordionMenuRef.current.style.height =
        accordionMenuRef.current.scrollHeight + "px";
    } else {
      accordionMenuRef.current.style.height = 0;
    }
  }, [isAccordionOpen]);

  return (
    <div
      className="bg-purple rounded sm:rounded-xl lg:rounded-2xl"
      ref={accordionRef}
    >
      <button
        className="flex items-center justify-between w-full space-x-6"
        onClick={() => setIsAccordion((val) => !val)}
      >
        <span className="text-left block text-sm md:text-base xl:text-xl text-white font-medium">
          {title}
        </span>
        <span className="flex">
          <IoMdArrowDropdown
            className={`text-xl md:text-2xl xl:text-3xl text-white transition-all duration-[.3s] ${
              isAccordionOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
      </button>

      <div
        className="h-0 overflow-hidden transition-all duration-[.3s]"
        ref={accordionMenuRef}
      >
        <div className="py-4 md:py-6">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
