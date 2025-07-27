import React from "react";
import { useSelector } from "react-redux";
import { TrendCard, TrendValue, CardTitle, Value,TrendWrapper } from "./styles";
import { Flex } from "../styles";
import { TrendsData } from "../mockData";
import UpgradeTrend from "../assets/upgradeTrend";
import DowngradeTrend from "../assets/downgradeTrend";

const Trends = () => {
    const darkMode = useSelector((state) => state.ui.darkMode);

  const trendDirection = (value) => {
    if (value < 0) {
      return <DowngradeTrend />;
    } else return <UpgradeTrend />;
  };
  return (
    <TrendWrapper id= "trendwrapper" darkMode={darkMode}>
      {TrendsData?.map((data, key) => {
        const Trend = trendDirection(data?.trend);
        return (
          <TrendCard key={key} color={data?.bg_color}>
            <CardTitle>{data?.title}</CardTitle>
            <Flex justifycontent="space-between" >
              <Value className="value">{data?.score}</Value>
              <TrendValue className="trendvalue">{data?.trend}{Trend}</TrendValue>
            </Flex>
          </TrendCard>
        );
      })}
    </TrendWrapper>
  );
};

export default Trends;
