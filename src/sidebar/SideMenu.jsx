import React from 'react'
import { Menu } from 'antd';
import { MenuItems } from './menuItems';

import {MenuContainer} from "./styles"
const SideMenu = () => {
  return (
    <MenuContainer>
     <Menu
      defaultSelectedKeys={['dashboards']}
      defaultOpenKeys={['userprofile']}
      mode="inline"
      items={MenuItems}
    />
    </MenuContainer>
  )
}

export default SideMenu