import React, { useRef } from "react";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Checkbox from "./Checkbox";

function Select({ id, name, options, placeholder }) {
  const selectRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((val) => !val)}
        ref={selectRef}
        name={name}
        className="form-input hide-icon cursor-pointer flex items-center justify-between space-x-4"
        id={id}
      >
        <p className="font-medium text-xs lg:text-sm opacity-40 ellipsis select-none pointer-events-none">
          Which scenario best describes your case? alsjkljlasdasd;l
        </p>

        <button className="min-w-[1.8em] h-[1.8em] flex items-center justify-center text-[8px] xl:text-xs text-white rounded-full bg-blue">
          <AiFillCaretDown
            className={`${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-[.24s]`}
          />
        </button>
      </div>

      <div
        className={`absolute top-[120%] left-0 w-full bg-white rounded-2xl py-2 transition-all duration-[.24s] z-50 overflow-hidden ${
          isOpen
            ? "translate-y-[0px] opacity-100 pointer-events-auto"
            : "translate-y-[-10px] opacity-0 pointer-events-none"
        }`}
      >
        <Checkbox id="1" title="My funds got desappeared" />
        <Checkbox id="2" title="My wallet’s been hacked" />
        <Checkbox id="3" title="There was a protocol breach" />
        <Checkbox id="4" title="other" />
      </div>
    </div>
  );
}

export default Select;

{
  /* <div className="relative">
<select
  onChange={(e) => setValue(e.target.value)}
  ref={selectRef}
  name={name}
  className="form-input hide-icon cursor-pointer"
  placeholder="select"
  id={id}
  // value={placeholder}
>
  <option
    className="font-medium text-xs lg:text-sm"
    value={placeholder}
    disabled
    hidden
    selected
  >
    {placeholder}
  </option>

  {options &&
    options.map((option, index) => {
      return (
        <option
          className="font-medium text-xs lg:text-sm"
          key={index}
          value={option.title}
        >
          {option.title}
        </option>
      );
    })}
</select>

<button className="w-[1.8em] h-[1.8em] flex items-center justify-center text-[8px] xl:text-xs text-white rounded-full bg-blue absolute top-1/2 -translate-y-1/2 right-5 pointer-events-none">
  <AiFillCaretDown />
</button>
</div> */
}
