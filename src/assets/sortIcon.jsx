import React from "react";

const SortIcon = ({darkMode}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="22"
      width="20"
      viewBox="0 0 490 490"
      xml:space="preserve"
      style={{ fill: darkMode ? "white" : "black" }}
    >
      <path d="M85.877 154.014v274.295h45.829V154.014l48.791 67.199 37.087-26.943L108.792 44.46 0 194.27l37.087 26.943zM404.13 335.988V61.691h-45.829V335.99l-48.798-67.203-37.087 26.943 108.8 149.81L490 295.715l-37.087-26.913z" />
    </svg>
  );
};

export default SortIcon;
