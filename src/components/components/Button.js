import React from "react";

const Button = ({ type, text, onClick }) => {
  const typeStyles = {
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
  };
  const buttonStyle = `${typeStyles[type]} type="button"
  class="inline-block rounded border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700
   transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100
    focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
  data-te-ripple-init`;
  return (
    <div>
      <button onClick={onClick} className={buttonStyle}>
        {text}{" "}
      </button>
    </div>
  );
};

export default Button;
