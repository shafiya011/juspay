// // // import React from 'react';
// // import { Doughnut } from "react-chartjs-2";
// // import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// // import { LegendItem,ChartBg,CardTitle } from "./styles";
// // ChartJS.register(ArcElement, Tooltip, Legend);

// // const CustomDoughnut = () => {
// //   const data = {
// //     datasets: [
// //       {
// //         data: [300.56, 135.18, 48.96, 154.02],
// //         backgroundColor: ["#000", "#a8e6cf", "#b2ebf2", "#b3c7ff"],
// //         //   borderWidth: 6,
// //         //   borderColor: "#fff",
// //         borderColor: "#fff", // 👈 white border
// //         // 👈 thickness of border (acts like "gap")
// //         cutout: "50%",
// //       },
// //     ],
// //   };
// //   return (
// //     <ChartBg>
// //       <CardTitle>Total Sales</CardTitle>
// //       <div style={{width:"130px", height:"120px",margin:"auto"}}>
// //       <Doughnut
// //         className="doughnut-chart"
// //         data={data}
// //         plugins={[
// //           {
// //             id: "drawСircles",
// //             afterUpdate(chart) {
// //               const arcs = chart.getDatasetMeta(0).data;

// //               arcs.forEach((arc) => {
// //                 arc.round = {
// //                   x: (chart.chartArea.left + chart.chartArea.right) / 2,
// //                   y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
// //                   radius: (arc.outerRadius + arc.innerRadius) / 2,
// //                   thickness: (arc.outerRadius - arc.innerRadius) / 2,
// //                 //   backgroundColor: arc.options.backgroundColor,
// //                 //   backgroundColor: "fff",

// //                 };
// //               });
// //             },
// //             afterDraw: (chart) => {
// //               const { ctx } = chart;

// //               chart.getDatasetMeta(0).data.forEach((arc) => {
// //                 const endAngle = Math.PI / 2 - arc.endAngle;

// //                 ctx.save();
// //                 ctx.translate(arc.round.x, arc.round.y);
// //                 ctx.fillStyle = arc.options.backgroundColor;
// //                 ctx.beginPath();
// //                 ctx.arc(
// //                   arc.round.radius * Math.sin(endAngle),
// //                   arc.round.radius * Math.cos(endAngle),
// //                   arc.round.thickness,

// //                   0,

// //                   2 * Math.PI
// //                 );
// //                 ctx.closePath();
// //                 ctx.fill();
// //                 ctx.restore();
// //               });
// //             },
// //           },
// //         ]}
// //       />
// //       </div>
// //       <div>
// //         <LegendItem>
// //           <span style={{ background: "#000" }} /> Direct &nbsp; $300.56
// //         </LegendItem>
// //         <LegendItem>
// //           <span style={{ background: "#a8e6cf" }} /> Affiliate &nbsp; $135.18
// //         </LegendItem>
// //         <LegendItem>
// //           <span style={{ background: "#b3c7ff" }} /> Sponsored &nbsp; $154.02
// //         </LegendItem>
// //         <LegendItem>
// //           <span style={{ background: "#b2ebf2" }} /> E-mail &nbsp; $48.96
// //         </LegendItem>
// //       </div>
// //     </ChartBg>
// //   );
// // };

// // export default CustomDoughnut;

// import React, { useRef, useEffect } from 'react';
// import { Chart, ArcElement, DoughnutController } from 'chart.js';

// Chart.register(ArcElement);

// const CustomDoughnut = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');

//     const roundedCapsPlugin = {
//       id: 'roundedCaps',
//       afterDatasetDraw(chart, args, pluginOptions) {
//         const { ctx } = chart;
//         const meta = chart.getDatasetMeta(0);
//         const arcs = meta.data;

//         arcs.forEach((arc, i) => {
//           const startAngle = arc.startAngle;
//           const endAngle = arc.endAngle;
//           const midRadius = (arc.outerRadius + arc.innerRadius) / 2;
//           const thickness = (arc.outerRadius - arc.innerRadius) / 2;

//           const x = arc.x;
//           const y = arc.y;

//           const prevArc = arcs[i === 0 ? arcs.length - 1 : i - 1];
//           const prevColor = prevArc.options.backgroundColor;

//           ctx.save();
//           ctx.translate(x, y);

//           // Inward rounded cap (start)
//           ctx.fillStyle = i === 0 ? arc.options.backgroundColor : prevColor;
//           ctx.beginPath();
//           ctx.arc(
//             midRadius * Math.cos(startAngle),
//             midRadius * Math.sin(startAngle),
//             thickness,
//             0,
//             Math.PI * 2
//           );
//           ctx.fill();

//           // Outward rounded cap (end)
//           ctx.fillStyle = arc.options.backgroundColor;
//           ctx.beginPath();
//           ctx.arc(
//             midRadius * Math.cos(endAngle),
//             midRadius * Math.sin(endAngle),
//             thickness,
//             0,
//             Math.PI * 2
//           );
//           ctx.fill();
//           ctx.restore();
//         });
//       }
//     };

//     const chart = new Chart(ctx, {
//       type: 'doughnut',
//       data: {
//         datasets: [
//           {
//             data: [40, 20, 20, 20],
//             backgroundColor: ['#e77099', '#5da4e7', '#8f75e7', '#8fe768'],
//             borderWidth: 0,
//             cutout: '70%'
//           }
//         ]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: { display: false },
//           tooltip: {
//             enabled: true,
//             callbacks: {
//               label: (ctx) => `Value: ${ctx.raw}`
//             }
//           }
//         }
//       },
//       plugins: [roundedCapsPlugin]
//     });

//     return () => chart.destroy();
//   }, []);

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <canvas ref={chartRef} ></canvas>
//       <p>Click on a slice 😋</p>
//     </div>
//   );
// };

// export default CustomDoughnut;

import React, { useRef, useEffect } from "react";
import { Chart, ArcElement, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip);

const SalesDoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const roundedCapsPlugin = {
      id: "roundedCaps",
      afterDatasetDraw(chart) {
        const { ctx } = chart;
        const meta = chart.getDatasetMeta(0);
        const arcs = meta.data;

        arcs.forEach((arc, i) => {
          const startAngle = arc.startAngle;
          const endAngle = arc.endAngle;
          const midRadius = (arc.outerRadius + arc.innerRadius) / 2;
          const thickness = (arc.outerRadius - arc.innerRadius) / 2;
          const x = arc.x;
          const y = arc.y;

          const prevArc = arcs[i === 0 ? arcs.length - 1 : i - 1];
          const prevColor = prevArc.options.backgroundColor;

          ctx.save();
          ctx.translate(x, y);

          // Inward rounded cap
        //   const sx = midRadius * Math.cos(startAngle);
        //   const sy = midRadius * Math.sin(startAngle);
        //   ctx.beginPath();
        //   ctx.arc(sx, sy, thickness, 0, Math.PI * 2);
        //   ctx.fillStyle = i === 0 ? arc.options.backgroundColor : prevColor;
        //   ctx.fill();
        //   ctx.lineWidth = 2;
        //   ctx.strokeStyle = "#fff";
        //   ctx.stroke();

          // Outward rounded cap
          const rotationAngle = endAngle;
          const ex = midRadius * Math.cos(endAngle);
          const ey = midRadius * Math.sin(endAngle);
          ctx.beginPath();
          ctx.arc(
            ex,
            ey,
            thickness,
            rotationAngle ,
            rotationAngle + Math.PI
          );
          ctx.fillStyle = arc.options.backgroundColor;
          ctx.fill();
          ctx.lineWidth = 5;
          ctx.strokeStyle = "#fff";
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

  return (
    <div>
      <div style={{ width: "150px" }}>
        <h4 style={{ fontWeight: "600", marginBottom: "10px" }}>Total Sales</h4>
        <canvas ref={chartRef} width={150} height={150}></canvas>
      </div>

      {/* Legend on the right */}
      <div style={{ fontSize: "14px", lineHeight: "1.8" }}>
        <div>
          <span style={{ color: "#1f1f1f", marginRight: "6px" }}>●</span> Direct
          <span style={{ float: "right" }}>$300.56</span>
        </div>
        <div>
          <span style={{ color: "#b9e6c9", marginRight: "6px" }}>●</span>{" "}
          Affiliate <span style={{ float: "right" }}>$135.18</span>
        </div>
        <div>
          <span style={{ color: "#a5b4fc", marginRight: "6px" }}>●</span>{" "}
          Sponsored <span style={{ float: "right" }}>$154.02</span>
        </div>
        <div>
          <span style={{ color: "#bae6fd", marginRight: "6px" }}>●</span> E-mail{" "}
          <span style={{ float: "right" }}>$48.96</span>
        </div>
      </div>
    </div>
  );
};

export default SalesDoughnutChart;
