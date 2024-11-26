import clsx from "clsx";
import React from "react";

const Button = ({ icon, className, label, type, onClick = () => {} }) => {
  return (
    <button
      type={type || "button"}
      className={clsx(
        "px-3 py-2 rounded-md font-bold text-lg cursor-pointer transition duration-200",
        className
      )}
      onClick={onClick}
    >
      <span>{label}</span>
      {icon && icon}
    </button>
  );
};

export default Button;
