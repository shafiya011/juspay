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
