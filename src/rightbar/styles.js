import { styled } from "styled-components";

export const RightContainer = styled.div`
  width: 19%;
  padding: 20px;
  border-left: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: "Inter", sans-serif;
`;

export const Heading = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props=>props?.darkMode ? "white" :"#333"};
  margin-bottom: 12px;
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

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TextContent = styled.div`
  font-size: 13px;
  margin-bottom: 4px;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
`;

export const TimeText = styled.div`
  font-size: 12px;
  color: #888;
`;

export const ContactItem = styled.div`
  font-size: 14px;
  color: ${props=>props?.darkMode ? "white" : "#111"};
`;
export const ContentWrapper= styled.div`
width:85%;`