import React from "react";
import { Flex } from "../styles";
import { ChartBg, CardTitle } from "./styles";
import WorldMap from "../assets/world-map-replica.png";
import { Progress } from "antd";
import { RevenueLocation } from "../mockData";

const RevenueByLoc = () => {

  return (
    <ChartBg>
      <CardTitle>Revenue By Location</CardTitle>
      <img src={WorldMap} style={{ width: "100%" }} />
      {RevenueLocation.map((data) => {
        return (
          <div>
            <Flex justifycontent= {"space-between"}>
              <div>{data?.location}</div>
              <div>{data?.revenue}K</div>
            </Flex>
            <Progress percent={data?.revenue} strokeColor={"#a8c5da"} showInfo={false} strokeWidth={"3px"}/>
          </div>
        );
      })}
    </ChartBg>
  );
};

export default RevenueByLoc;
