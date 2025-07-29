import { Menu, Tabs } from "antd";
import { styled } from "styled-components";

export const MenuContainer = styled.div`
  width: 16%;
  border-right: 1px solid rgba(5, 5, 5, 0.06);
  background: #fff;
  ${(props) =>
    props?.darkMode &&
    `
  background-color:black;
  color:white;`}
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 10px;
  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 8px;
  }
  span {
    font-weight: 500;
  }
`;

export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin: 0px 0px 0px 10px;
  }
  .ant-tabs-nav::before {
    border-bottom: 0px;
  }
  .ant-tabs-tab {
    font-size: 13px;
    color: #c0c0c0;
  }
  .ant-tabs-ink-bar {
    display: none !important;
  }
  ul {
    margin: 0px;
  }
  li {
    cursor: pointer;
    color: ${(props) => (props?.darkMode ? "white" : "black")};
    margin-bottom: 7px;
  }
  ul li::marker {
    color: #e6e6e6 !important;
  }
`;

export const StyledMenu = styled(Menu)`
  border: none;
  background: ${(props) => (props.darkMode ? "black" : "white")};
  color: ${(props) => (props.darkMode ? "white" : "black")};

  .ant-menu-title-content {
    margin: 0px !important;
  }
  .ant-menu-item,
  .ant-menu-submenu-title {
    padding-left: 30px !important;
    display: flex;
    align-items: center;
    color: ${(props) => (props.darkMode ? "white" : "black")};
    height: 28px;
  }
  .ant-menu-sub {
    background: none !important;
    margin-left: 25px;
  }

  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu-item-selected {
    background: ${(props) =>
      props.darkMode ? "#323232" : "#f3f3f3"} !important;
    color: ${(props) => (props.darkMode ? "white" : "black")} !important;
    border-radius: 6px;
    position: relative;
  }

  .ant-menu-item-selected::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 60%;
    background-color: ${(props) => (props.darkMode ? "#c6c7f8" : "#000")};
    border-radius: 5px;
  }

  .ant-menu-submenu-arrow {
    margin-left: 12px;
    color: ${(props) => (props.darkMode ? "#9a9a9a" : "#f3f3f3")};
    transition: transform 0.3s ease;
    transform: rotate(-90deg) !important;
    left: 0;
  }

  .ant-menu-submenu-open > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    transform: rotate(180deg) !important;
  }

  .ant-menu-item-icon {
    margin-right: 12px;
  }
`;

export const GroupLabel = styled.div`
  font-weight: 500;
  color: #b9b9b9;
  margin-top: 12px;
`;

export const TabLabel = styled.div`
  color: #b9b9b9;
`;
