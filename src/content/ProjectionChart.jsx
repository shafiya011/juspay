import React from "react";
import {ChartBg,CardTitle} from "./styles"
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ProjectionsChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Actual",
        data: [17, 22, 17, 23, 15, 21],
        backgroundColor: "#a9c5da",
        barPercentage: 0.6,
        categoryPercentage: 0.6,
        grouped: false,
      },
      {
        label: "Projection",
        data: [21, 25, 23, 27, 20, 24],
        backgroundColor: " #d1dded",
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
        grouped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
          drawBorder: true,
        },
        border: {
          display: true,
          color: "black",
          width: 2,
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 30,
        ticks: {
          stepSize: 10,
          callback: (value) => `${value}M`,
        },
        grid: {
          color: "#eee",
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <ChartBg id='projection_chart'>
      <CardTitle>Projections vs Actuals</CardTitle>
      <Bar data={data} options={options} />
    </ChartBg>
  );
};

export default ProjectionsChart;
