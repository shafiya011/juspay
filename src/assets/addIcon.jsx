import React from "react";

const AddIcon = ({ darkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      fill={darkMode ? "#ffffff" : "#434343"}
    >
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80z" />
    </svg>
  );
};

export default AddIcon;
