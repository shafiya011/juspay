// // import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { LegendItem,ChartBg,CardTitle } from "./styles";
ChartJS.register(ArcElement, Tooltip, Legend);

const CustomDoughnut = () => {
  const data = {
    datasets: [
      {
        data: [300.56, 135.18, 48.96, 154.02],
        backgroundColor: ["#000", "#a8e6cf", "#b2ebf2", "#b3c7ff"],
        //   borderWidth: 6,
        //   borderColor: "#fff",
        borderColor: "#fff", // 👈 white border
        // 👈 thickness of border (acts like "gap")
        cutout: "50%",
      },
    ],
  };
  return (
    <ChartBg>
      <CardTitle>Total Sales</CardTitle>
      <div style={{width:"130px", height:"120px",margin:"auto"}}>
      <Doughnut
        className="doughnut-chart"
        data={data}
        plugins={[
          {
            id: "drawСircles",
            afterUpdate(chart) {
              const arcs = chart.getDatasetMeta(0).data;

              arcs.forEach((arc) => {
                arc.round = {
                  x: (chart.chartArea.left + chart.chartArea.right) / 2,
                  y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                  radius: (arc.outerRadius + arc.innerRadius) / 2,
                  thickness: (arc.outerRadius - arc.innerRadius) / 2,
                //   backgroundColor: arc.options.backgroundColor,
                //   backgroundColor: "fff",

                };
              });
            },
            afterDraw: (chart) => {
              const { ctx } = chart;

              chart.getDatasetMeta(0).data.forEach((arc) => {
                const endAngle = Math.PI / 2 - arc.endAngle;

                ctx.save();
                ctx.translate(arc.round.x, arc.round.y);
                ctx.fillStyle = arc.options.backgroundColor;
                ctx.beginPath();
                ctx.arc(
                  arc.round.radius * Math.sin(endAngle),
                  arc.round.radius * Math.cos(endAngle),
                  arc.round.thickness,

                  0,

                  2 * Math.PI
                );
                ctx.closePath();
                ctx.fill();
                ctx.restore();
              });
            },
          },
        ]}
      />
      </div>
      <div>
        <LegendItem>
          <span style={{ background: "#000" }} /> Direct &nbsp; $300.56
        </LegendItem>
        <LegendItem>
          <span style={{ background: "#a8e6cf" }} /> Affiliate &nbsp; $135.18
        </LegendItem>
        <LegendItem>
          <span style={{ background: "#b3c7ff" }} /> Sponsored &nbsp; $154.02
        </LegendItem>
        <LegendItem>
          <span style={{ background: "#b2ebf2" }} /> E-mail &nbsp; $48.96
        </LegendItem>
      </div>
    </ChartBg>
  );
};

export default CustomDoughnut;
