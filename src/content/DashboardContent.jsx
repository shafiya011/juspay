import React from "react";
import { useSelector } from "react-redux";
import Trends from "./Trends";
import Header from "../header/Header";
import ProjectionChart from "./ProjectionChart";
import RevenueByLoc from "./RevenueByLoc";
import {
  Container,
  Title,
  InsightsWrapper,
  Insights,
  RevenueWrapper,
} from "./styles";
import RevenueChart from "./RevenueChart";
import SalesDoughnutChart from "./DoughnutChart";
import TopSellingProductsTable from "./TopSellingProductTable";
import OrderList from "./OrderList";
const DashboardContent = () => {
  const { darkMode, activeTab } = useSelector((state) => state.ui);
  
  return (
    <Container id="dashboard_contnet_container" darkMode={darkMode}>
      <Header />
      {activeTab == "orders" ? (
        <OrderList />
      ) : (
     
         <InsightsWrapper id="insights_wrapper"> 
        <Title>eCommerce</Title>
        <Insights id="trend_projection">
            <Trends/>
            <ProjectionChart/>
        </Insights>
        <RevenueWrapper  darkMode={darkMode}>
        <RevenueChart/>
        <RevenueByLoc/>
        <TopSellingProductsTable/>
        <SalesDoughnutChart/>
       </RevenueWrapper>
      </InsightsWrapper>
    
      )}
    </Container>
  );
};

export default DashboardContent;
