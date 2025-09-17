import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setActiveTab } from "../Redux/slice";
import {
  MenuContainer,
  ProfileSection,
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
  SettingOutlined 
} from "@ant-design/icons";

const SideMenu = () => {
    const dispatch = useDispatch();
  const [selectedKey, setSelectedKey] = useState("default");
    const darkMode = useSelector((state) => state.ui.darkMode);
    const color = darkMode ? "#fff" :"#111"
  const menuItems = [
    {
      type: "group",
      label: <GroupLabel>Overview</GroupLabel>,
      children: [
        { key: "default", icon: <PieChartOutlined style={{color:color}}/>, label: "Default" },
        {
          key: "ecommerce",
          icon: <ShoppingOutlined color="red" style={{color:color}}/>,
          label: "eCommerce",
        },
          {
          key: "profile",
          icon: <IdcardOutlined style={{color:color}}/>,
          label: "Profile",

        },
        {
          key: "reports",
          icon: <FolderOutlined style={{color:color}}/>,
          label: "Reports"
        },
        {
          key: "courses",
          icon: <BookOutlined style={{color:color}}/>,
          label: "Online Courses",
          children: [{ key: "course1", label: "mock" }],
        },
      ],
    },
    {
      type: "group",
      label: <GroupLabel >Accounts</GroupLabel>,
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
          key: "reviews",
          icon: <MessageOutlined style={{color:color}}/>,
          label: "Reviews",
        },
            {
          key: "billing",
          icon: <TeamOutlined style={{color:color}}/>,
          label: "Billing And Subscription",
 
        },
        {
          key: "settings",
          icon: <SettingOutlined  style={{color:color}} />,
          label: "Settings",

        },
      
      ],
    },
  ];

  const handleMenuClick=(e)=>{
    console.log(e.key,"shaf");
    
    setSelectedKey(e.key)
   dispatch(setActiveTab(e.key))
  }
  return (
    <MenuContainer darkMode={darkMode}>
      <ProfileSection>
        <img src="https://i.pravatar.cc/150?img=4" alt="avatar" />
        <span>ByeWind</span>
      </ProfileSection>

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
