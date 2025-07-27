import React from "react";
import { Menu, Tabs } from "antd";
import { MenuItems } from "./menuItems";
import { Flex, IconContainer } from "../styles";
// import {groupIcon} from "../assets/groupIcon";

import { MenuContainer ,StyledMenu} from "./styles";
const SideMenu = () => {
const items = [
  {
    key: '1',
    label: 'Favourite',
    children: (<div>
      <ul>
        <li>Overview</li>
         <li>Projects</li>
      </ul>
    </div>)
  },
  {
    key: '2',
    label: 'Recently',
    children: null,
  },
];

  return (
    <MenuContainer>
      <div style={{margin:"20px 0px 20px 8px"}}>
        <Flex alignItems="center">
          <IconContainer>
            <img src="https://i.pravatar.cc/150?img=4" />
          </IconContainer>
          <div>ByeWind</div>
        </Flex>
      </div>
      <Tabs defaultActiveKey="1" items={items}/>
  
     
      <StyledMenu
        defaultSelectedKeys={["default"]}
        defaultOpenKeys={["userprofile"]}
        mode="inline"
        items={MenuItems}
      />
    </MenuContainer>
  );
};

export default SideMenu;
