import React from "react";
import Trends from "./Trends";
import Header from "../header/Header";
import ProjectionChart from './ProjectionChart'
import RevenueByLoc from "./RevenueByLoc";
import { Container, Title, InsightsWrapper, Insights ,RevenueWrapper} from "./styles";
import RevenueChart from "./RevenueChart";
import SalesDoughnutChart from "./DoughnutChart";
import TopSellingProductsTable from "./TopSellingProductTable";
import OrderList from "./OrderList";
const DashboardContent = () => {
  return (
    <Container id="dashboard_contnet_container">
      <Header />
       {/* <InsightsWrapper id="insights_wrapper"> 
        <Title>eCommerce</Title>
        <Insights id="trend_projection">
            <Trends/>
            <ProjectionChart/>
        </Insights>
        <RevenueWrapper>
        <RevenueChart/>
        <RevenueByLoc/>
        <TopSellingProductsTable/>
        <SalesDoughnutChart/>
       </RevenueWrapper>
      </InsightsWrapper> */}
      <OrderList/>
    </Container>
  );
};

export default DashboardContent;
