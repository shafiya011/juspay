import { styled } from "styled-components";
export const Dashboard = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid red;
  font-family: sans-serif;
`;
export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifycontent};
  ${(props) =>
    props?.trendHover &&
    `
&:hover{
flex-direction: row-reverse;
background-color:#f0f1f3;}`}
`;
export const IconContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: ${props=>props?.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
  img{
    width:100%;
    height:100%;
    border-radius:50%;
  }
`;