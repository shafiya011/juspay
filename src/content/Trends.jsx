import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  TrendCard,
  TrendValue,
  CardTitle,
  Value,
  TrendWrapper,
  TrendFlex,
} from "./styles";
import { TrendsData } from "../mockData";
import UpgradeTrend from "../assets/upgradeTrend";
import DowngradeTrend from "../assets/downgradeTrend";

const Trends = () => {
  const API_URL = "http://localhost:8081/agent/trendsdata";
  const darkMode = useSelector((state) => state.ui.darkMode);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data, "shafiya");
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);


  const trendDirection = (value) => {
    if (value < 0) {
      return <DowngradeTrend />;
    } else return <UpgradeTrend />;
  };
  return (
    <TrendWrapper id="trendwrapper" darkMode={darkMode}>
      {TrendsData?.map((data, key) => {
        const Trend = trendDirection(data?.trend);
        return (
          <TrendCard key={key} color={data?.bg_color}>
            <CardTitle>{data?.title}</CardTitle>
            <TrendFlex>
              <Value className="value">{data?.score}</Value>
              <TrendValue className="trendvalue">
                {data?.trend}
                {Trend}
              </TrendValue>
            </TrendFlex>
          </TrendCard>
        );
      })}
    </TrendWrapper>
  );
};

export default Trends;
