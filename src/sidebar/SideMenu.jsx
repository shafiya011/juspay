import React, { useState } from "react";
import {
  MenuContainer,
  TabLabel,
  ProfileSection,
  StyledTabs,
  StyledMenu,
  GroupLabel,
} from "./styles";
import {
  GlobalOutlined,
  ShoppingOutlined,
  FolderOutlined,
  BookOutlined,
  UserOutlined,
  IdcardOutlined,
  TeamOutlined,
  FileTextOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const SideMenu = () => {
  const [selectedKey, setSelectedKey] = useState("default");

  const menuItems = [
    {
      type: "group",
      label: <GroupLabel>Dashboards</GroupLabel>,
      children: [
        { key: "default", icon: <GlobalOutlined />, label: "Default" },
        {
          key: "ecommerce",
          icon: <ShoppingOutlined />,
          label: "eCommerce",
          children: [{ key: "", label: "" }],
        },
        {
          key: "projects",
          icon: <FolderOutlined />,
          label: "Projects",
          children: [{ key: "", label: "" }],
        },
        {
          key: "courses",
          icon: <BookOutlined />,
          label: "Online Courses",
          children: [{ key: "", label: "" }],
        },
      ],
    },
    {
      type: "group",
      label: <GroupLabel>Pages</GroupLabel>,
      children: [
        {
          key: "userprofile",
          icon: <UserOutlined />,
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
          icon: <IdcardOutlined />,
          label: "Account",
          children: [{ key: "", label: "" }],
        },
        {
          key: "corporate",
          icon: <TeamOutlined />,
          label: "Corporate",
          children: [{ key: "", label: "" }],
        },
        {
          key: "blog",
          icon: <FileTextOutlined />,
          label: "Blog",
          children: [{ key: "", label: "" }],
        },
        {
          key: "social",
          icon: <MessageOutlined />,
          label: "Social",
          children: [{ key: "", label: "" }],
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

  return (
    <MenuContainer>
      <ProfileSection>
        <img src="https://i.pravatar.cc/150?img=4" alt="avatar" />
        <span>ByeWind</span>
      </ProfileSection>

      <StyledTabs defaultActiveKey="1" items={tabs} id="munu-tab" />

      <StyledMenu
        mode="inline"
        items={menuItems}
        selectedKeys={[selectedKey]}
        onClick={(e) => setSelectedKey(e.key)}
      />
    </MenuContainer>
  );
};

export default SideMenu;
