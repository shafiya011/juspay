// import React from "react";
// import {ChartBg,CardTitle} from "./styles"
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
// } from "chart.js";
// import { Line } from "react-chartjs-2";

// ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

// const RevenueChart = () => {
//   const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Current Week",
//         data: [15, 10, 11, 16, 20, 21],
//         borderColor: "#000",
//         borderWidth: 4,
//         tension: 0.5, 
//         pointRadius: 0,
//         segment: {
//           borderDash: (ctx) => (ctx.p0.parsed.x >= 3 ? [6, 6] : undefined), // Dotted after Apr
//         },
//       },
//       {
//         label: "Previous Week",
//         data: [10, 18, 16, 12, 13, 24],
//         borderColor: "rgba(100, 149, 237, 0.4)",
//         borderWidth: 4,
//         tension: 0.5, 
//         pointRadius: 0,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (ctx) => `$${ctx.formattedValue}M`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         offset: true,
//         grid: {
//           display: false,
//           drawBorder: true,
//         },
//         border: {
//           display: true,
//           color: "#000",
//           width: 2,
//         },
//       },
//       y: {
//         beginAtZero: true,
//         min: 0,
//         max: 30,
//         ticks: {
//           stepSize: 10,
//           callback: (v) => `${v}M`,
//         },
//         grid: {
//           color: "#eee",
//           drawBorder: false,
//         },
//         border: {
//           display: false,
//         },
//       },
//     },
//   };

//   return (
//     <ChartBg id="revenue_chart">
//       <CardTitle >Revenue</CardTitle>
//       <Line data={data} options={options}  />
//     </ChartBg>
//   );
// };

// export default RevenueChart;






import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend
);

const ChartCard = styled.div`
  background: #f9fbfc;
  border-radius: 16px;
  padding: 20px;
  box-sizing: border-box;
  canvas{
    width:100%;
    height:90%;
  }
`;

const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-family: "Inter", sans-serif;

  span {
    font-size: 14px;
    margin-right: 20px;
    display: flex;
    align-items: center;
  }

  .dot {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    margin-right: 6px;
    display: inline-block;
  }

  .current {
    background-color: black;
  }

  .previous {
    background-color: #b3c7ff;
  }

  .bold {
    font-weight: 600;
    margin-left: 4px;
  }
`;

const RevenueChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Current Week",
        data: [12, 8, 9, 14, 19, 20],
        borderColor: "#000",
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        borderDash: [6, 6],
        pointRadius: 0,
      },
      {
        label: "Previous Week",
        data: [6, 17, 12, 10, 16, 25],
        borderColor: "#b3c7ff",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(179, 199, 255, 0.3)");
          gradient.addColorStop(1, "rgba(179, 199, 255, 0)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: {
            size: 12,
          },
          color: "#888",
        },
      },
      y: {
        min: 0,
        max: 30,
        ticks: {
          stepSize: 10,
          callback: (value) => `${value}M`,
          font: {
            size: 12,
          },
          color: "#888",
        },
        grid: {
          drawBorder: false,
          color: "#f0f0f0",
        },
      },
    },
  };

  return (
    <ChartCard>
      <ChartHeader>
        <strong>Revenue</strong>
        <span>
          <span className="dot current" /> Current Week
          <span className="bold"> $58,211</span>
        </span>
        <span>
          <span className="dot previous" /> Previous Week
          <span className="bold"> $68,768</span>
        </span>
      </ChartHeader>
      {/* <div > */}
        <Line data={data} options={options} width={664} height={272} />
      {/* </div> */}
    </ChartCard>
  );
};

export default RevenueChart;
