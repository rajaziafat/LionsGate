import React, { useState } from "react";

function Checkbox({
  className = "flex items-center space-x-2 lg:space-x-3",
  inputClassName,
  name,
  id,
  title,
  type = "checkbox",
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      className={`checkbox ${className} py-2 lg:py-3 px-5 lg:px-6 flex cursor-pointer transition-all duration-[.24s] ${
        isChecked ? "bg-[#E1E6FE]" : "bg-transparent"
      }`}
    >
      <input
        type={type}
        name={name}
        id={id}
        className={`checkbox-type min-w-[14px] lg:min-w-[18px] h-[14px] lg:h-[18px] rounded bg-white-2 ${inputClassName}`}
        checked={isChecked}
        onChange={handleOnChange}
      />
      {title && (
        <span className="text-xs lg:text-sm text-black font-light">
          {title && title}
        </span>
      )}
    </label>
  );
}

export default Checkbox;
