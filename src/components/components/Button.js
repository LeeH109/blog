import React from "react";

const Button = ({ type, text, onClick }) => {
  const typeStyles = {
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
  };
  const buttonStyle = `${typeStyles[type]} text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 `;
  return (
    <div>
      <button onClick={onClick} className={buttonStyle}>
        {text}{" "}
      </button>
    </div>
  );
};

export default Button;
