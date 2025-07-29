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
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../Redux/slice";
import MoonIcon from "../assets/moonIcon";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);

  return (
    <HeaderContainer id="header_container">
      <Container>
        <MenuIcon darkMode={darkMode} />
        <StarIcon darkMode={darkMode} />
        <div id="dashboard">Dashboard</div>
        <div>/</div>
        <div>Default</div>
      </Container>
      <Container>
        <Input
        id="header_input"
          style={{ width: "200px", backgroundColor: "#f3f3f3" }}
          prefix={<SearchIcon />}
          suffix={<CommandKeyIcon />}
          placeholder="Search"
        />
        <div
          style={{ cursor: "pointer", display:"flex", alignItems:"center"}}
          onClick={() => dispatch(setDarkMode())}
        >
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </div>
        <HistoryIcon darkMode={darkMode} />
        <NotificationIcon darkMode={darkMode} />

        <MenuIcon darkMode={darkMode} />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
