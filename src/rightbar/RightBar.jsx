import React from "react";
import { Data } from "../mockData";
import {
  RightContainer,
  Heading,
  IconContainer,
  SectionContainer,
  TextContent,
  TimeText,
  ContactItem,
  ContentWrapper,
} from "./styles";
import { Flex } from "../styles";

const RightBar = () => {
  // Group data by heading

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
          <Heading>{section}</Heading>
          <SectionContainer>
            {grouped[section]?.map((item, idx) =>
              section === "Contacts" ? (
                <Flex allignItems="center">
                  <IconContainer>
                    <img src={item?.image} />
                  </IconContainer>
                  <ContactItem key={idx}>{item.content}</ContactItem>
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
