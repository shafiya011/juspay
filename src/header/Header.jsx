import React from "react";
import { Input } from "antd";
import SearchIcon from "../assets/searchIcon";
import { HeaderContainer, LeftContainer } from "./styles";
import MenuIcon from "../assets/menuIcon";
import StarIcon from "../assets/starIcon";
import SunIcon from "../assets/sunIcon";
import HistoryIcon from "../assets/historyIcon";
import NotificationIcon from "../assets/notificationIcon";
import CommandKeyIcon from "../assets/commandKeyIcon";

const Header = () => {
  return (
    <HeaderContainer id="header_container">
      <LeftContainer>
        <MenuIcon />
        <StarIcon />
        <div>Dashboard</div>
        <div>/</div>
        <div>Default</div>
      </LeftContainer>
      <LeftContainer>
        <Input prefix={<SearchIcon />} suffix={<CommandKeyIcon/>} placeholder="Search" />
        <SunIcon />
        <HistoryIcon />
        <NotificationIcon />
        <div>
          <MenuIcon />
        </div>
      </LeftContainer>
    </HeaderContainer>
  );
};

export default Header;
