import React from "react";

const FillterIcon = ({darkMode}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
           fill= {darkMode ?"#ffffff" :"#434343"}

    >
      <path d="M400-240v-80h160v80zM240-440v-80h480v80zM120-640v-80h720v80z" />
    </svg>
  );
};

export default FillterIcon;
