import { styled } from "styled-components";
export const Dashboard = styled.div`
  display: flex;
  width: 100%;
  font-family: sans-serif;
  ${props=>props?.darkMode &&`
  background-color: black;
  color:white;`}
 
`;
export const Flex = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
    margin: ${(props) => props.margin};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifycontent || "center"};
`;


export const IconContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: ${(props) => props?.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
