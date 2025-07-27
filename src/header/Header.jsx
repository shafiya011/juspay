import React from "react";
import { Input } from "antd";
import SearchIcon from "../assets/searchIcon";
import { HeaderContainer, Container } from "./styles";
import MenuIcon from "../assets/menuIcon";
import StarIcon from "../assets/starIcon";
import SunIcon from "../assets/sunIcon";
import HistoryIcon from "../assets/historyIcon";
import NotificationIcon from "../assets/notificationIcon";
import CommandKeyIcon from "../assets/commandKeyIcon";

const Header = () => {
  return (
    <HeaderContainer id="header_container">
      <Container>
        <MenuIcon />
        <StarIcon />
        <div>Dashboard</div>
        <div>/</div>
        <div>Default</div>
      </Container>
      <Container>
        <Input prefix={<SearchIcon />} suffix={<CommandKeyIcon/>} placeholder="Search" />
        <SunIcon />
        <HistoryIcon />
        <NotificationIcon />
        <div>
          <MenuIcon />
        </div>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
