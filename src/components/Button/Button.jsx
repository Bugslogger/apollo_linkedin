import React from "react";

const Button = ({ className, text, startIcon, endIcon }) => {
  return (
    <button
      className={` ${className} font-medium mx-2 text-font-14 flex rounded justify-center items-center`}
      style={{ height: "32px" }}
    >
      {startIcon} {text} {endIcon}
    </button>
  );
};

export default Button;
