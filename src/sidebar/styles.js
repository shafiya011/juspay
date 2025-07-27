import { Menu, Tabs } from "antd"
import {styled} from "styled-components"
export const MenuContainer = styled.div`
width:15%;
/* padding:20px 16px; */
border-right:1px solid rgba(5, 5, 5, 0.06);

`
export const MenuTab = styled(Tabs)`
.ant-tabs{
    color:#b9b9b9;
}`
export const StyledMenu = styled(Menu)`
.ant-menu-item-selected{
    background-color:#f3f3f3;
    color:black;
    ::before {
  content: "";
  position: absolute;
  left: 0; 
  top: 50%; 
  transform: translateY(-50%);
  width:6px;
  height:60%;
  background-color: #000;
  border-radius:5px;
}
}`