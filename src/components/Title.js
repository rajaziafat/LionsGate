import React from "react";

function Title({ title, className, alignment = "center" }) {
  return (
    <h1
      className={`font-bold text-xl sm:text-2xl lg:text-3xl xl:text-5xl uppercase ${className}`}
      style={{ textAlign: alignment }}
    >
      {title}
    </h1>
  );
}

export default Title;
