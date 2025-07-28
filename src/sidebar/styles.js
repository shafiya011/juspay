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
    font-size: 14px;
    font-weight: 500;
  }
`;

export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin: 0px 0px 12px 10px;
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
    font-size: 14px;
    cursor: pointer;
    color:${props=>props?.darkMode ? "white":"black"};
  }
  ul li::marker {
    color: #e6e6e6 !important;
  }
`;

export const StyledMenu = styled(Menu)`
  border: none;
  ${(props) =>
    props?.darkMode &&
    `
  background-color:black;
  color:white;`}
  .ant-menu-item,
  .ant-menu-submenu-title {
    font-size: 14px;
    padding-left: 30px !important;
    display: flex;
    align-items: center;
    height: 36px;
  }
  .ant-menu-title-content {
    margin: 0px;
    ${(props) =>
      props?.darkMode &&
      `
  background-color:black;
  color:white;`}
  }
  .ant-menu-item-selected {
    background-color: #f3f3f3;
    border-radius: 6px;
    position: relative;
    color: black;
       ${(props) =>
      props?.darkMode &&
      `
  background-color:black;
  color:white;`}
  }

  .ant-menu-item-selected::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 60%;
    background-color: #000;
    border-radius: 5px;
  }

  .ant-menu-submenu-arrow {
    left: 0;
    margin-left: 5px;
    color: #e6e6e6;
    transition: transform 0.3s ease;
    transform: rotate(-90deg) !important;
  }
  .ant-menu-submenu-open > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    transform: rotate(180deg) !important;
    margin-left: 5px;
  }
  .ant-menu-item-icon {
    margin-right: 12px;
  }
`;

export const GroupLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #b9b9b9;
  margin-top: 12px;
`;

export const TabLabel = styled.div`
  font-size: 14px;
  color: #b9b9b9;
`;
