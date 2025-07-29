import { ChartBg, CardTitle } from "./styles";
import { useSelector } from "react-redux";
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
import {ChartHeader,ChartCard} from "./styles"


ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend
);

const RevenueChart = () => {
    const darkMode = useSelector((state) => state.ui.darkMode);

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
        pointRadius: 0,
        segment: {
          borderDash: (ctx) =>
            ctx.p0DataIndex >= 3 ? [6, 6] : [], // After April (index >=3), dotted
        },
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
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: 0, left: 0, right: 0, bottom: 20 },
    },
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 12 },
          color: "#888",
          padding: 10
        },
      },
      y: {
        min: 0,
        max: 30,
        ticks: {
          stepSize: 10,
          callback: (value) => `${value}M`,
          font: { size: 12 },
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
    <ChartCard darkMode={darkMode}>
      <ChartHeader>
        <CardTitle margin={"0px"}>Revenue</CardTitle>
        <div> | </div>
        <span>
          <span className="dot current" /> Current Week
          <span className="bold"> $58,211</span>
        </span>
        <span>
          <span className="dot previous" /> Previous Week
          <span className="bold"> $68,768</span>
        </span>
      </ChartHeader>

      <Line data={data} options={options} />
    </ChartCard>
  );
};

export default RevenueChart;
