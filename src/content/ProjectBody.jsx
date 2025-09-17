import React from 'react'
import { useSelector } from "react-redux";
import ExportReport from '../Reports/reports';
import PricingPage from "../billing";
import DashboardContent from './DashboardContent';

const ProjectBody = () => {
 const { activeTab } = useSelector((state) => state.ui);
 if (activeTab == "billing") {
    return    <PricingPage />
 } else if (activeTab == "reports"){
   return <ExportReport/>
 } else return <DashboardContent/>
 
}

export default ProjectBody