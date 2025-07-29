import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setActiveTab } from "../Redux/slice";
import {
  MenuContainer,
  TabLabel,
  ProfileSection,
  StyledTabs,
  StyledMenu,
  GroupLabel,
} from "./styles";
import {
  ShoppingOutlined,
  FolderOutlined,
  BookOutlined,
  UserOutlined,
  IdcardOutlined,
  TeamOutlined,
  FileTextOutlined,
  MessageOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const SideMenu = () => {
    const dispatch = useDispatch();
  const [selectedKey, setSelectedKey] = useState("default");
    const darkMode = useSelector((state) => state.ui.darkMode);
    const color = darkMode ? "#fff" :"#111"
  const menuItems = [
    {
      type: "group",
      label: <GroupLabel>Dashboards</GroupLabel>,
      children: [
        { key: "default", icon: <PieChartOutlined style={{color:color}}/>, label: "Default" },
        {
          key: "ecommerce",
          icon: <ShoppingOutlined color="red" style={{color:color}}/>,
          label: "eCommerce",
          children: [{ key: "orders", label: "Order List" }],
        },
        {
          key: "projects",
          icon: <FolderOutlined style={{color:color}}/>,
          label: "Projects",
          children: [{ key: "project1", label: "mock" }],
        },
        {
          key: "courses",
          icon: <BookOutlined style={{color:color}}/>,
          label: "Online Courses",
          children: [{ key: "course1", label: "" }],
        },
      ],
    },
    {
      type: "group",
      label: <GroupLabel >Pages</GroupLabel>,
      children: [
        {
          key: "userprofile",
          icon: <UserOutlined style={{color:color}}/>,
          label: "User Profile",
          children: [
            { key: "overview", label: "Overview" },
            { key: "proj", label: "Projects" },
            { key: "camp", label: "Campaigns" },
            { key: "docs", label: "Documents" },
            { key: "followers", label: "Followers" },
          ],
        },
        {
          key: "account",
          icon: <IdcardOutlined style={{color:color}}/>,
          label: "Account",
          children: [{ key: "account1", label: "mock" }],
        },
        {
          key: "corporate",
          icon: <TeamOutlined style={{color:color}}/>,
          label: "Corporate",
          children: [{ key: "corporate1", label: "mock" }],
        },
        {
          key: "blog",
          icon: <FileTextOutlined style={{color:color}} />,
          label: "Blog",
          children: [{ key: "blog1", label: "mock" }],
        },
        {
          key: "social",
          icon: <MessageOutlined style={{color:color}}/>,
          label: "Social",
          children: [{ key: "social1", label: "mock" }],
        },
      ],
    },
  ];

  const tabs = [
    {
      key: "1",
      label: <TabLabel>Favorites</TabLabel>,
      children: (
        <ul>
          <li>Overview</li>
          <li>Projects</li>
        </ul>
      ),
    },
    { key: "2", label: <TabLabel>Recently</TabLabel> },
  ];
  const handleMenuClick=(e)=>{
    setSelectedKey(e.key)
    if(e.key==="orders"){
      dispatch(setActiveTab("orders"))
    }else dispatch(setActiveTab(e.key))
  }
  return (
    <MenuContainer darkMode={darkMode}>
      <ProfileSection>
        <img src="https://i.pravatar.cc/150?img=4" alt="avatar" />
        <span>ByeWind</span>
      </ProfileSection>

      <StyledTabs defaultActiveKey="1" items={tabs} id="munu-tab" darkMode={darkMode}/>

      <StyledMenu
        mode="inline"
        items={menuItems}
        selectedKeys={[selectedKey]}
        onClick={(e) => handleMenuClick(e)}
        darkMode={darkMode}
      />
    </MenuContainer>
  );
};

export default SideMenu;
