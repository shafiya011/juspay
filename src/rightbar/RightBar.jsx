import React from "react";
import { useSelector } from "react-redux";
import { Data } from "../mockData";
import {
  RightContainer,
  Heading,
  SectionContainer,
  TextContent,
  TimeText,
  ContactItem,
  ContentWrapper,
} from "./styles";
import { Flex,IconContainer } from "../styles";

const RightBar = () => {
  const darkMode = useSelector((state) => state.ui.darkMode);

  const grouped = Data.reduce((acc, curr) => {
    const key = curr.heading;
    acc[key] = [...(acc[key] || []), curr];
    return acc;
  }, {});
  let Icon;
  return (
    <RightContainer>
      {["Notifications", "Activities", "Contacts"].map((section) => (
        <div key={section}>
          <Heading darkMode={darkMode}>{section}</Heading>
          <SectionContainer>
            {grouped[section]?.map((item, idx) =>
              section === "Contacts" ? (
                <Flex alignItems="center" justifycontent="flex-start">
                  <IconContainer>
                    <img src={item?.image} />
                  </IconContainer>
                  <ContactItem key={idx} darkMode={darkMode}>{item.content}</ContactItem>
                </Flex>
              ) : (
                <Flex key={idx}>
                  {section === "Activities" ? (
                    <IconContainer>
                      <img src={item?.image} />
                    </IconContainer>
                  ) : (
                    <IconContainer color={item?.color}>
                      {item?.image}
                    </IconContainer>
                  )}
                  <ContentWrapper>
                    <TextContent>{item.content}</TextContent>
                    <TimeText>{item.time}</TimeText>
                  </ContentWrapper>
                </Flex>
              )
            )}
          </SectionContainer>
        </div>
      ))}
    </RightContainer>
  );
};

export default RightBar;
