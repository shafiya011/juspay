import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Chart, ArcElement, Tooltip,DoughnutController } from "chart.js";
import { ChartBg, CardTitle, Dot } from "./styles";
import { Flex } from "../styles";
import { Badge } from "antd";
Chart.register(ArcElement, Tooltip, DoughnutController);

const SalesDoughnutChart = () => {
   const darkMode = useSelector((state) => state.ui.darkMode);
  const chartRef = useRef(null);
console.log(darkMode,"doughnut");

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const roundedCapsPlugin = {
      id: "roundedCaps",
      afterDatasetDraw(chart) {
        const { ctx } = chart;
        const meta = chart.getDatasetMeta(0);
        const arcs = meta.data;

        arcs.forEach((arc) => {
          const endAngle = arc.endAngle;
          const midRadius = (arc.outerRadius + arc.innerRadius) / 2;
          const thickness = (arc.outerRadius - arc.innerRadius) / 2;
          const x = arc.x;
          const y = arc.y;

          // const prevArc = arcs[i === 0 ? arcs.length - 1 : i - 1];
          // const prevColor = prevArc.options.backgroundColor;

          ctx.save();
          ctx.translate(x, y);
          const rotationAngle = endAngle;
          const ex = midRadius * Math.cos(endAngle);
          const ey = midRadius * Math.sin(endAngle);
          ctx.beginPath();
          ctx.arc(ex, ey, thickness, rotationAngle, rotationAngle + Math.PI);
          ctx.fillStyle = arc.options.backgroundColor;
          ctx.fill();
          ctx.lineWidth = 5;
          ctx.strokeStyle =  darkMode ? "#282828":"#fff";
          ctx.stroke();

          ctx.restore();
        });
      },
    };

    const data = [300.56, 135.18, 154.02, 48.96];
    const total = data.reduce((a, b) => a + b, 0);

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
        datasets: [
          {
            data: data,
            backgroundColor: ["#1f1f1f", "#b9e6c9", "#a5b4fc", "#bae6fd"],
            borderWidth: 0,
            cutout: "65%",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (context) => {
                const value = context.raw;
                const percentage = ((value / total) * 100).toFixed(1);
                return `${context.label}: ${value} (${percentage}%)`;
              },
            },
          },
        },
      },
      plugins: [roundedCapsPlugin],
    });

    return () => chart.destroy();
  }, []);
  const Labels = [
    { name: "Direct", color: "#1f1f1f", value: "$300.56" },
    { name: "Affiliate", color: "#b9e6c9", value: "$135.18" },
    { name: "Sponsored", color: "#a5b4fc", value: "$154.02" },
    { name: "E-mail", color: "#bae6fd", value: "$48.96" },
  ];
  return (
    <ChartBg darkMode={darkMode}>
      <CardTitle>Total Sales</CardTitle>
      <div style={{ width: "125px", margin: "auto" }}>
        <canvas ref={chartRef} width={125} height={125}></canvas>
      </div>

      <div style={{ width: "150px", margin: "20px auto",padding:"auto" }}>
        {Labels.map((data) => {
          return (
            <Flex justifycontent= "flex-start" margin="5px 0px" >
              <Flex gap="15px">
                <Badge color={data?.color} />
                <div>{data?.name}</div>
              </Flex>
              <div style={{marginLeft: "30px"}}>{data?.value}</div>
            </Flex>
          );
        })}
      </div>
    </ChartBg>
  );
};

export default SalesDoughnutChart;
