import React from "react";

const MenuIcon = ({darkMode}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 -960 960 960"
      width="20px"
      fill= {darkMode ?"#ffffff" :"#1f1f1f"}
    >
      <g transform="scale(-1,1) translate(-960,0)">
        <path d="M173-178q-27.64 0-47.32-19.03T106-245v-469q0-28.05 19.68-48.03Q145.36-782 173-782h614q27.64 0 47.32 19.97Q854-742.05 854-714v469q0 28.94-19.68 47.97Q814.64-178 787-178H173Zm513-425h101v-112H686v112Zm0 180h101v-113H686v113ZM173-245h446v-470H173v470Zm513 0h101v-111.5H686V-245Z" />
      </g>
    </svg>
  );
};

export default MenuIcon;
